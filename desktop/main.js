const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#070810',
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    }
  });

  win.once('ready-to-show', () => win.show());

  // Load bundled demo
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
}

app.whenReady().then(() => {
  // Prefer dark aesthetics
  try { nativeTheme.themeSource = 'dark'; } catch {}
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

