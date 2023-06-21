const beats = [
    { name: 'Beat 1', audio: 'beat1.mp3' },
    { name: 'Beat 2', audio: 'beat2.mp3' },
    { name: 'Beat 3', audio: 'beat3.mp3' }
];

function createAudioPlayer(beat) {
    const audio = new Audio(beat.audio);
    audio.controls = true;

    const audioPlayer = document.createElement('div');
    audioPlayer.className = 'audio-player';
    audioPlayer.innerHTML = `<h2>${beat.name}</h2>`;
    audioPlayer.appendChild(audio);

    return audioPlayer;
}

function renderBeatStore() {
    const beatContainer = document.getElementById('beat-container');

    beats.forEach(beat => {
        const audioPlayer = createAudioPlayer(beat);
        beatContainer.appendChild(audioPlayer);
    });
}

renderBeatStore();
