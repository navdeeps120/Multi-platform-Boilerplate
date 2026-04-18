# Multi-platform Boilerplate

A starter template to run a single React app across:

- Web (Vite)
- Desktop (Electron)
- Mobile (Capacitor: Android + iOS)

## Tech Stack

- React 19
- Vite 8
- Electron 41
- Capacitor 8
- ESLint 9

## Project Structure

```text
.
|-- src/                    # React app source
|-- public/                 # Static web assets
|-- electron/               # Electron main and preload process
|-- capacitor/              # Native platform projects (android/ios)
|-- capacitor.config.json   # Capacitor configuration
|-- vite.config.js          # Vite configuration
|-- package.json            # Scripts and dependencies
```

## Prerequisites

- Node.js 20+ and npm
- Android Studio (for Android)
- Xcode (for iOS, macOS only)
- Git

Recommended for Android:

- Java 17

## Setup

```bash
npm install
```

## Development Commands

- `npm run dev`
  - Starts Vite only (web development).

- `npm run dev:electron`
  - Starts Vite + Electron together.

- `npm run dev:electron:only`
  - Starts Electron only, assumes Vite is already running on port 5173.

- `npm run sync:android:dev`
  - Waits for Vite on port 5173, syncs Capacitor Android, then opens Android Studio.

- `npm run dev:android`
  - Starts Vite + Android sync/open flow together.

## Build Commands

- `npm run build:web`
  - Production build for web.

- `npm run build:mobile`
  - Production web build for Capacitor consumption.

- `npm run build:android`
  - Builds for mobile and runs `cap sync android`.

- `npm run build:windows`
  - Builds with Electron mode and packages a Windows app via `electron-builder`.

## Utility Commands

- `npm run lint`
- `npm run preview`
- `npm run generate:assets`

## Recommended Workflows

### Web

```bash
npm run dev
```

### Electron (Desktop)

```bash
npm run dev:electron
```

### Android (Capacitor)

First-time setup:

```bash
npx cap sync android
npx cap open android
```

Daily Android dev:

```bash
npm run dev:android
```

### Side-by-side: Electron + Android

If you want Electron and Android running at the same time, avoid starting multiple Vite servers on the same port.

Use this order:

1. `npm run dev:electron`
2. `npm run sync:android:dev`

Do not run `npm run dev:android` while `npm run dev:electron` is already running, because both try to start Vite on port 5173.

### iOS (Capacitor)

```bash
npm run build:mobile
npx cap sync ios
npx cap open ios
```

## Configuration Notes

- Capacitor dev server target is configured in `capacitor.config.json`.
- Electron entry point is `electron/main.cjs`.
- Electron preload is `electron/preload.cjs`.
- Vite dev server runs on port `5173`.

## Troubleshooting

- `Port 5173 is already in use`
  - Kill the existing process using port 5173, then rerun your command.

- Android shows connection timeout while Electron works
  - Ensure Vite is running and reachable.
  - Confirm your Capacitor `server.url` points to a reachable host for the emulator/device.
  - Run `npx cap doctor`.

- Electron blank screen in dev
  - Ensure Vite is running before Electron starts.
  - Verify `VITE_DEV_SERVER_URL=http://localhost:5173` is set in the Electron dev script.

## Before Publishing

Update these values for your app:

- `appId` and `appName` in `capacitor.config.json`
- `build.appId`, `build.productName`, signing, and publish settings in `package.json`
- app icons in `electron/assets`

## License

Add a license file appropriate for your project.
