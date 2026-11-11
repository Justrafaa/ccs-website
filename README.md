# Creator Content Studio — Static Website

A responsive HTML/CSS/JavaScript launch site. No framework, paid subscription, server, or build process required.

## Preview locally

Open `index.html` in a browser. For best results, run `python -m http.server 8000` from this folder and visit http://localhost:8000.

## Configure Discord (required before launch)

1. Open `config.js`.
2. Replace `discordUrl: ""` with a valid Discord invite URL, e.g. `discordUrl: "https://discord.gg/YOUR_INVITE"`.
3. Test the **Work With Me**, **Get Started**, and **Contact on Discord** links.

**Note:** A Discord username alone is not a reliable clickable contact URL. A server invite with a dedicated `#orders` or `#contact` channel is recommended. Never put Discord bot tokens in client-side files.

## Deploy free with GitHub Pages

1. Create a GitHub account if needed.
2. Create a new **public** repository, e.g. `ccs-website`.
3. Upload the **contents** of this folder to the repository root (not the enclosing folder), including `assets/`.
4. In the repository, go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
6. Once published, GitHub will show the live URL, typically `https://YOUR-USERNAME.github.io/ccs-website/`.
7. Test on mobile, and confirm all links and image files work.

GitHub Pages is free for eligible public repositories. Availability and terms can change. It serves static sites only; this project does not collect payments or form submissions.

## Before commercial launch

- Replace mockup-cropped portfolio images with original or properly licensed samples. They may include game marks or other third-party intellectual property.
- Replace the hero concept image if commercial use rights are not established.
- Remove concept disclaimers only when the replacement work is genuinely yours and permission has been obtained where needed.
- Confirm Belgian registration, VAT, invoicing, and social contribution requirements before trading.
- Set up Discord permissions so visitors can contact you without exposing private information.
- Add legal/business information and a privacy notice as applicable before operating commercially.

## Edit the website

- Text, prices and sections: `index.html`
- Design and mobile layouts: `styles.css`
- Discord destination: `config.js`
- Mobile menu and contact-link logic: `script.js`
- Images: `assets/`
