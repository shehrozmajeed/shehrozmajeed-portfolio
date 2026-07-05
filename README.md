# Shehroz Majeed — Portfolio

A fully deployable Next.js (App Router) portfolio: cinematic video hero,
About, Experience timeline, Projects grid, Skills & Certifications, and
Contact — dark, editorial, glassmorphism throughout.

## 1. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Deploy (Vercel — recommended, zero-config)

```bash
npm install -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at
https://vercel.com/new — it auto-detects Next.js, no settings needed.

Any other Node host works too (Netlify, Render, your own server):
`npm run build && npm run start`.

## 3. Project structure

```
app/
  layout.jsx          -> fonts (Bebas Neue + Sora), global metadata
  globals.css          -> reset, scroll-margin for anchors
  page.jsx             -> composes every section in order
components/
  Navbar/               -> glass nav, scroll-aware, resume download, mobile menu
  VideoIntro/           -> cinematic video hero (see section 5 below)
  About/                -> summary + stat cards + education
  Experience/           -> vertical timeline (NEXUS, CyberSecurity Malaysia)
  Projects/             -> bento-style grid, all 9 CV projects, GitHub links
  Skills/               -> grouped skill pills + certification badges
  Contact/              -> CTA panel — email, resume, socials
  Footer/               -> copyright + back-to-top
  shared/useScrollReveal.js -> shared GSAP + ScrollTrigger reveal-on-scroll hook
lib/
  data.js               -> single source of truth for all CV content
public/
  videos/hero-talking.mp4
  resume/Shehroz_Majeed_Resume.pdf
```

## 4. Editing content

Everything text-based — name, role, stats, experience, projects, skills,
certifications, social links — lives in **`lib/data.js`**. Edit that one
file rather than hunting through components.

### GitHub repo links (verify before shipping)
`lib/data.js` → `projects[].repo` currently uses best-guess slugs against
`github.com/shehrozmajeed` (e.g. `IPDR-Cloud`, `KAPAv1.0`). Two projects
(MedSentinel, AlumNet) have `repo: null` since the CV doesn't list a
`[github]` tag for them — their card shows a disabled repo icon until you
add a real URL. Confirm/replace slugs against your actual repos.

## 5. Cinematic video hero — notes carried over from the last build

- **Compress the video** before shipping: the current file is a phone-editor
  export (~15MB). Run it through `ffmpeg` (H.264, ~2–3 Mbps, 1080p max) or a
  service like Cloudinary/Mux — this is the single biggest thing standing
  between this build and a fast Lighthouse score.
- Starts muted (browser autoplay policy) with an auto-hiding "Tap for sound"
  badge; unmuting happens on user click, which browsers allow.
- The video plays once (no loop). When it ends, a centered glass "Replay"
  button fades in over the frozen last frame; clicking it restarts both the
  sharp and blurred layers from 0:00.
- The Three.js particle layer disposes all GPU resources on unmount and
  halves particle count / disables drift under `prefers-reduced-motion`.
- **Entry gate**: a hacker-terminal boot sequence (`components/EntryGate`)
  now sits in front of the hero. Clicking "Enter Site" is a genuine user
  gesture, so the browser allows that click's `play()` call to include
  audio — this is the only reliable way to start the video with sound
  immediately, since browsers block unmuted autoplay outright. If that
  play-with-sound call is somehow still rejected, it falls back to muted
  automatically and shows the usual "Tap for sound" badge.

### To swap the video for a new one

**No code changes needed** if you keep the same filename:
just replace `public/videos/hero-talking.mp4` with your new file (same name).

If you want a different filename, change one line in
`components/VideoIntro/VideoIntro.jsx`:

```js
const VIDEO_SRC = '/videos/hero-talking.mp4'; // <- update this path
```

**Before swapping in any new video, check its codec** — browsers need
H.264 video + AAC audio in an .mp4 container. Many phone/AI video exports
use HEVC (H.265), which Chrome, Firefox, and Edge cannot play (only Safari
can) and will render as a blank black box with no sound. Check with:

```bash
ffprobe -v error -show_entries stream=codec_name,codec_type -of default=noprint_wrappers=0 your-video.mp4
```

If `codec_name=hevc` shows up, convert it first:

```bash
ffmpeg -i your-video.mp4 -c:v libx264 -pix_fmt yuv420p -crf 21 -preset slow \
  -c:a aac -b:a 128k -movflags +faststart public/videos/hero-talking.mp4
```

## 6. Performance & polish already in place

- Every section reveals in on scroll via a shared GSAP `ScrollTrigger`
  hook (`useScrollReveal`), batched and fired once — no re-triggering,
  no layout thrash.
- Fixed navbar turns to frosted glass only after 40px of scroll, and all
  in-page anchors have `scroll-margin-top` so the nav never overlaps content.
- Two-font system throughout (Bebas Neue display / Sora body) loaded via
  `next/font/google` — no layout shift, no external font requests.
- Fully responsive: 3-column bento grid → 2 → 1 across projects/skills,
  mobile nav drawer, fluid type via `clamp()` everywhere.

## 7. Before going live — checklist

- [ ] Compress `public/videos/hero-talking.mp4`
- [ ] Verify/replace GitHub repo slugs in `lib/data.js`
- [ ] Add a real favicon (`app/icon.png` or `app/favicon.ico`)
- [ ] Swap placeholder Open Graph image if you want rich link previews
- [ ] Double check phone/email in `lib/data.js` are the ones you want public
