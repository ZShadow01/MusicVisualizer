const socket = new io();


socket.on('ready', async (args) => {
    const config = args.config;

    const preview = document.getElementById('preview');
    // preview.style.aspectRatio = config.preview['aspect-ratio'];

    await fetchAudioFiles();
});


window.addEventListener('resize', () => {
    const preview = document.getElementById('preview');
    preview.style;
});


const workspaceResizer = document.getElementById('workspaceResizer');
const workspace = document.getElementById('workspace');

workspaceResizer.addEventListener('mousedown', (event) => {
    document.getElementsByClassName('row').item(1).style.height = event.pageY + 'px';
});
