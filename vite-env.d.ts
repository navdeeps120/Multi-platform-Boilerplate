/// <reference types="vite/client" />

declare const __APP_ENV__: string

// Augment the global Window interface so window.electronAPI is typed everywhere
declare global {
  interface Window {
    electronAPI?: {
      ping: () => string
      // Add more Electron API methods here as you expand electron/preload.cjs
    }
  }
}

export {}