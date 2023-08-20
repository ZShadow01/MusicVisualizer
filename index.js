const { app, BrowserWindow } = require('electron');
const config = require('./config.json');

const Core = require('./scripts/Core.js');

let mainWindow = null;

async function createWindow() {
    let win = new BrowserWindow({
        darkTheme: true,
        autoHideMenuBar: true,
        webPreferences: {
            // preload: path.resolve(__dirname, 'preload.js')
        }
    });

    await Core.init();

    win.loadURL('http://localhost:8000');

    win.webContents.openDevTools();

    win.on('closed', function() {
        win = null;
    });

    return win;
}


app.whenReady().then(async function() {
    mainWindow = await createWindow();

    app.on('activate', async function() {
        if (BrowserWindow.getAllWindows().length === 0) mainWindow = await createWindow();
    });
});


app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});
