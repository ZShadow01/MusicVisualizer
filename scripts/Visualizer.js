function Visualizer() {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();

    let fftSize = 1024;
    let bufferSize = 512;

    let surface = null;

    return {
        setCanvas(canvas) {
            surface = canvas;
        },

        update() {
            
        },
        
        render() {

        }
    }
}
