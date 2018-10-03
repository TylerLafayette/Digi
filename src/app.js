
// Modules to control application life and create native browser window
const electron = require('electron')
const { app, BrowserWindow } = electron
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600, titleBarStyle: 'hiddenInset'})

  // and load the index.html of the app.
  mainWindow.loadFile(__dirname + '/client/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => (process.platform !== 'darwin') ? app.quit() : null)

app.on('activate', () => mainWindow ? null : createWindow())