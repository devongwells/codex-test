Neon Flow — Desktop App

What this is
- A minimal Electron wrapper around the Neon Flow canvas demo.
- Produces a clickable macOS app you can put on your Desktop.

Quick start (development)
- From repo root:
  1) `cd desktop`
  2) `npm install`
  3) `npm start` (launches the app window)

Build a macOS app (.app / .dmg)
- From `desktop/`:
  - `npm run build`
  - Output appears in `desktop/dist/`.
    - On Apple Silicon: `dist/Neon Flow-darwin-arm64/Neon Flow.app` and a `.dmg`.
    - On Intel: `dist/Neon Flow-darwin-x64/Neon Flow.app` and a `.dmg`.

Move to Desktop
- Drag `Neon Flow.app` to your Desktop or Applications.
- Double-click to open; no installer or CLI needed.

Notes
- The app is unsigned for local builds; macOS may show a security prompt.
  - If blocked, right-click the app, choose Open, then Open again to allow.
- No network, file, or system access is requested; it’s a local HTML canvas.

