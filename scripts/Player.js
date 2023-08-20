class Player {
    constructor() {
        this.audioFiles = [];
        this.inputDevices = [];

        this.play = false;
    }

    addAudioFile(file) {
        this.audioFiles.push(file);
    }

    addInputDevice(device) {
        this.inputDevices.push(device);
    }
}


module.exports = Player;
