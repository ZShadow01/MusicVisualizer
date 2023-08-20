const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('api', {
    emit: (event, args) => ipcRenderer.invoke(event, args),
    on: (event, listener) => ipcRenderer.on(event, listener)
});
