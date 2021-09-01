// Quick Start Code: https://github.com/electron/electron-quick-start/blob/master/main.js

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { channels } = require('../src/shared/constants');
const url = require('url');

let mainWindow;
function createWindow () {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname,'../index.html'),
    protocol: 'file',
    slashes: true
})
  mainWindow = new BrowserWindow({ 
      width: 800, 
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        webSecurity: false
      },
  });
  
  mainWindow.loadURL(startUrl);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on(channels.APP_INFO, (event) => {
  event.sender.send(channels.APP_INFO, {
    appName: app.getName(),
    appVersion: app.getVersion(),
  });
});