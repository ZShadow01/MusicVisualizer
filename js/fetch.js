async function fetchAudioFiles() {
    const response = await fetch('http://localhost:8000/audiofiles');
    
    const json = await response.json();

    console.log(json);

    const files = [];
    for (let i = 0; i < json.length; ++i) {
        const res = await fetch(`http://localhost:8000/audiofiles?n=${i}`);

        const blob = await res.blob();

        files.push(window.URL.createObjectURL(blob));
    }
    /*fetch('/audiofiles')
        .then(res => res.blob())
        .then(blob => {
            let file = window.URL.createObjectURL(blob);

        });*/
}
