const { app, BrowserWindow, shell, ipcMain, Notification, Tray, nativeImage, Menu, safeStorage, session } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

const isDev = !app.isPackaged;

if (process.platform === "win32") {
  app.commandLine.appendSwitch("force-device-scale-factor", "1");
}

function isWin() {
  return process.platform === "win32";
}

const isDevEarly = process.env.NODE_ENV !== "production" && !app.isPackaged;
if (isDevEarly && process.env.ELECTRON_USER_DATA_SUFFIX) {
  const suffix = String(process.env.ELECTRON_USER_DATA_SUFFIX).trim();
  if (suffix) {
    try {
      const appData = app.getPath("appData");
      app.setPath("userData", path.join(appData, app.getName() + "-dev-" + suffix));
    } catch (err) {
      console.warn("[main] Could not set userData for dev instance:", err.message);
    }
  }
}

//Sample IPC handler for showing notifications
ipcMain.handle("show-notification", (_event, title, body) => {
  if (Notification.isSupported()) {
    const notification = new Notification({
      title: isDev ? "Example App Development" : title || "Example App",
      body: body || "",
      icon: isDev ? path.join(__dirname, "assets", "app-icon.png") : path.join(__dirname, "assets", "app-icon.png"),
      silent: false
    });

    notification.on("click", () => {
      focusMainWindow();
    });

    notification.show();
  }
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs')
    }
  })

  if (isDev) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(createWindow)