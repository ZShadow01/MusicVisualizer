const socket = new io();


socket.on('ready', async (args) => {
    const config = args.config;

    const preview = document.getElementById('preview');
    preview.style.aspectRatio = config.preview['aspect-ratio'];

    await fetchAudioFiles();
});
