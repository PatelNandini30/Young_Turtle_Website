# Young Turtle - Quantitative Trading Firm Website

A production-ready React application for Young Turtle, a high-frequency trading and quantitative research firm.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
   *Dependencies needed:* `react`, `react-dom`, `react-router-dom`, `framer-motion`, `lucide-react`, `recharts`, `typescript`, `@types/react`, `@types/react-dom`.
   
   *(Note: Since this is a raw code output, ensure you have a standard Vite or CRA setup if starting from scratch, or just unzip this into a configured project)*

### Running Locally
```bash
npm start
# or if using Vite
npm run dev
```

The app will be available at `http://localhost:3000` (or 5173 for Vite).

## 📁 Project Structure

```
/
├── public/              # Static assets (images, PDFs)
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Mock JSON data (Team, Quotes, Jobs)
│   ├── lib/             # Utilities and API mocks
│   ├── pages/           # Page views (Home, About, etc.)
│   ├── App.tsx          # Main layout and routing
│   ├── index.tsx        # Entry point
│   ├── types.ts         # TS Interfaces
│   └── constants.ts     # Global configs
└── index.html           # HTML entry + Tailwind CDN config
```

## 🎨 Design & Theme

- **Primary:** Deep Ocean Navy `#071A2F`
- **Secondary:** Scientific Teal `#00A89D`
- **Accent:** Warm Gold `#D4AF37`
- **Font:** Inter (Google Fonts)

## 🖼️ Asset Replacement

Replace the placeholder URLs in `src/constants.ts` or the file paths in `public/assets/` with your actual media.

**Asset Prompts for Designers:**
- `hero-1.jpg`: 1920×1080 cinematic ocean with a lone sea turtle silhouette, deep-blue mood, subtle film grain.
- `hero-1.webm`: 10–20s loop, turtle gliding left→right, gentle camera dolly, muted, optimized for web.
- `team-1.jpg`: 800×800 portrait style, neutral studio background.

## ♿ Accessibility

- All images include `alt` tags.
- Buttons and links use semantic HTML.
- Colors pass WCAG AA contrast ratios (Teal on Navy).
- `prefers-reduced-motion` is respected by Framer Motion.

## 🔧 Integrations

### Contact Forms
The forms in `src/components/ContactForm.tsx` currently point to `src/lib/api.ts` which mocks a network request. To integrate real email sending:

1. Use a service like [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/).
2. Replace the `submitContactForm` function in `api.ts` with a `fetch` call to your endpoint.

Example:
```typescript
await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ...data, access_key: "YOUR_KEY" })
});
```

### Regulatory PDFs
Place your actual PDF documents in `public/regulatory/` and ensure the filenames match those linked in `pages/Regulatory.tsx`.

## 📜 License
Private and Confidential. Young Turtle Technologies.
