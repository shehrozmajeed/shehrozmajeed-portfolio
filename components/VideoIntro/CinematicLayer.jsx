'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './VideoIntro.module.css';

/**
 * CinematicLayer
 * A transparent, additive-blended particle field that sits above the
 * video and below the text. Warm orange + white "bokeh" points drift
 * on slow sine-wave paths, with a subtle mouse-parallax camera move.
 *
 * Fully self-disposing: all geometry/material/renderer resources are
 * released on unmount so this is safe inside client-side route changes.
 */
export default function CinematicLayer({ particleCount = 90 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = canvas.clientWidth || window.innerWidth;
    let height = canvas.clientHeight || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 18;

    // ---- particle geometry ----
    const count = prefersReducedMotion
      ? Math.floor(particleCount / 2)
      : particleCount;

    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3); // [speed, phase, radius]
    const colorMix = new Float32Array(count); // 0 = warm orange, 1 = white

    const warm = new THREE.Color('#ff9d52');
    const white = new THREE.Color('#fff3e4');
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 26;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 14;
      positions.set([x, y, z], i * 3);

      seeds.set(
        [0.15 + Math.random() * 0.35, Math.random() * Math.PI * 2, 0.6 + Math.random() * 1.6],
        i * 3
      );

      const mix = Math.random();
      colorMix[i] = mix;
      const c = warm.clone().lerp(white, mix * 0.7);
      colors.set([c.r, c.g, c.b], i * 3);

      sizes[i] = (0.35 + Math.random() * 1.1) * (mix > 0.6 ? 1.4 : 1);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      map: makeBokehTexture(),
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const basePositions = positions.slice();

    // ---- mouse parallax (very subtle) ----
    const pointer = { x: 0, y: 0 };
    const targetPointer = { x: 0, y: 0 };

    function onPointerMove(e) {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetPointer.x = nx;
      targetPointer.y = ny;
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // ---- resize handling ----
    function onResize() {
      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);
    window.addEventListener('resize', onResize);

    // ---- animation loop ----
    let rafId;
    const clock = new THREE.Clock();
    const posAttr = geometry.getAttribute('position');

    function animate() {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        for (let i = 0; i < count; i++) {
          const ix = i * 3;
          const speed = seeds[ix];
          const phase = seeds[ix + 1];
          const radius = seeds[ix + 2];

          posAttr.array[ix] =
            basePositions[ix] + Math.sin(t * speed + phase) * radius * 0.4;
          posAttr.array[ix + 1] =
            basePositions[ix + 1] + Math.cos(t * speed * 0.8 + phase) * radius * 0.3;
          posAttr.array[ix + 2] =
            basePositions[ix + 2] + Math.sin(t * speed * 0.6 + phase) * radius * 0.2;
        }
        posAttr.needsUpdate = true;
      }

      pointer.x += (targetPointer.x - pointer.x) * 0.03;
      pointer.y += (targetPointer.y - pointer.y) * 0.03;
      camera.position.x = pointer.x * 1.2;
      camera.position.y = -pointer.y * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    animate();

    // ---- cleanup ----
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
      geometry.dispose();
      material.map?.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [particleCount]);

  return <canvas ref={canvasRef} className={styles.particleCanvas} aria-hidden="true" />;
}

/** Generates a soft radial-gradient sprite so points read as glowing bokeh circles. */
function makeBokehTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.35, 'rgba(255,255,255,0.6)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
