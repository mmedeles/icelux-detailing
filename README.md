# IceLux Detailing — Website

Premium mobile car detailing website built with Next.js, TypeScript, and Tailwind CSS. Deployable to Cloudflare Pages.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS variables
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (display) + DM Sans (body)
- **Hosting**: Cloudflare Pages

---

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx        # Site navigation
│   └── Footer.tsx        # Site footer
├── lib/
│   └── data.ts           # All static content (packages, services, copy)
├── gallery/
│   └── page.tsx          # Gallery page
├── packages/
│   └── page.tsx          # Packages page
├── contact/
│   └── page.tsx          # Contact / Book page
├── globals.css           # Global styles + custom utilities
├── layout.tsx            # Root layout + metadata
└── page.tsx              # Homepage
```

---

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Build for Production

```bash
npm run build
```

This generates a static export in the `/out` directory (configured via `output: "export"` in `next.config.ts`).

---

## Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push this repo to GitHub or GitLab.
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project**.
3. Connect your GitHub/GitLab account and select this repository.
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Click **Save and Deploy**.

### Option 2: Direct Upload (Wrangler CLI)

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the site
npm run build

# Deploy
wrangler pages deploy out --project-name icelux-detailing
```

---

## Connect Custom Domain (iceluxdetailing.com)

1. In Cloudflare Dashboard → **Pages** → select your project → **Custom domains**.
2. Click **Set up a custom domain** → enter `iceluxdetailing.com`.
3. If your domain is registered through Cloudflare, DNS will be auto-configured.
4. If registered elsewhere, add these DNS records at your registrar:
   - `CNAME iceluxdetailing.com → <your-pages-project>.pages.dev`
   - `CNAME www → <your-pages-project>.pages.dev`
5. SSL is automatic via Cloudflare — no additional configuration needed.

---

## Updating Content

All site content lives in `app/lib/data.ts`. Edit this file to update:
- Service descriptions
- Package names and inclusions
- Service areas
- Contact information
- Trust bar items

---

## Future Integrations

### Booking System
In `app/contact/page.tsx`, find the comment `// TODO: Replace href with Square Appointments or Calendly URL`.
Replace `#booking-placeholder` with your booking URL.

### Contact Form Backend
The contact form in `app/contact/page.tsx` has a `handleSubmit` function.
Connect it to [Formspree](https://formspree.io), Netlify Forms, or a custom API.

### Gallery Photos
Replace placeholder divs in `app/gallery/page.tsx` with `<Image>` components pointing to real photos.
Consider Cloudflare Images or Cloudinary for optimized delivery.

### Instagram Feed
In the gallery page, there's a placeholder for an Instagram embed.
Connect via [Elfsight](https://elfsight.com/instagram-feed-widget/) or the Instagram Basic Display API.

### Testimonials
Replace placeholder testimonials in `app/page.tsx` with real customer reviews.

---

## Environment

No environment variables are required for the static build.
If you add server-side features in the future, create a `.env.local` file.

---

## Brand Colors

| Token | Hex |
|---|---|
| Background Primary | `#050912` |
| Background Secondary | `#07101C` |
| Midnight Section | `#0B1628` |
| Card Background | `#09111F` |
| Dark Blue Panel | `#0B1B33` |
| Primary Accent | `#22BFFF` |
| Secondary Accent | `#8EDFFF` |
| Text Base | `#EAF8FF` |
| Muted Text | `#8CA9BD` |
| Border/Glow | `#2BCBFF` |

---

© IceLux Detailing
