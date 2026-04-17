# Multi-platform Boilerplate

A starter template for building one React codebase and targeting:

- Web with Vite
- Desktop with Electron
- Mobile with Capacitor (Android and iOS)

This project is intended to help you move quickly from prototype to multi-platform delivery with a familiar frontend stack.

## Tech Stack

- React 19
- Vite 8
- Electron 41
- Capacitor 8
- ESLint 9

## Project Structure

```text
.
|-- src/                    # React application source
|-- public/                 # Static assets
|-- electron/               # Electron main/preload process files
|-- capacitor/              # Native platform projects (android/ios)
|-- capacitor.config.json   # Capacitor app configuration
|-- vite.config.js          # Vite configuration
|-- package.json            # Scripts and dependencies
```

## Prerequisites

Install the following tools before starting:

- Node.js 20+ and npm
- Git
- Android Studio (for Android builds)
- Xcode (for iOS builds, macOS only)

Optional but recommended:

- Java 17 (Android toolchain)

## Getting Started

1. Clone the repository.
2. Install dependencies.

```bash
npm install
```

3. Run web development mode.

```bash
npm run dev
```

Vite runs on http://localhost:5173.

## Available Scripts

### Development

- npm run dev
	- Starts Vite web dev server.

- npm run dev:electron
	- Starts Vite and Electron together for desktop development.

- npm run dev:electron:only
	- Starts only Electron side watcher and launches Electron (expects Vite server already running).

- npm run dev:android
	- Starts Vite and tries to run sync workflow for Android.
	- Note: this script currently references sync:android:dev, which is not defined in package.json.

### Build

- npm run build:web
	- Builds web output into dist.

- npm run build:mobile
	- Builds web assets for Capacitor usage.

- npm run build:android
	- Builds web assets and runs Capacitor sync for Android.

- npm run build:windows
	- Builds web assets and packages a Windows app via electron-builder.

### Utilities

- npm run generate:assets
	- Generates Capacitor Android app icons/splash resources.

- npm run lint
	- Runs ESLint.

- npm run preview
	- Serves production web build locally.

## Platform Workflows

## Web

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build:web
npm run preview
```

## Electron (Desktop)

Development:

```bash
npm run dev:electron
```

Windows package:

```bash
npm run build:windows
```

Build artifacts are generated in windows-build.

## Capacitor Android

If this is your first setup on a fresh clone:

```bash
npx cap sync android
```

Open Android Studio:

```bash
npx cap open android
```

Typical Android build flow:

```bash
npm run build:android
npx cap open android
```

## Capacitor iOS

Build web assets:

```bash
npm run build:mobile
```

Sync iOS platform:

```bash
npx cap sync ios
```

Open Xcode:

```bash
npx cap open ios
```

## Configuration Notes

- Capacitor app metadata is in capacitor.config.json.
- Electron entry point is electron/main.cjs.
- Electron preload script is electron/preload.cjs.
- Vite output directory is dist.

## Troubleshooting

- If Electron starts with a blank window in development:
	- Ensure Vite is running on port 5173.
	- Check your firewall or security software is not blocking localhost.

- If Android sync or open fails:
	- Verify Android Studio is installed and SDK tools are configured.
	- Run npx cap doctor and resolve reported issues.

- If npm run dev:android fails immediately:
	- Add a missing sync:android:dev script in package.json, or use the manual flow:
		1) npm run build:android
		2) npx cap open android

## Customization Checklist

Before publishing your own app, update:

- App name and appId in capacitor.config.json
- App metadata under build in package.json
- Electron icons under electron/assets/
- Bundle identifiers, signing, and release settings per platform

## License

Choose and add a license file that matches your distribution goals.
