const beats = [
    { name: 'Beat 1', audio: 'beat1.mp3', cover: 'cover1.jpg' },
    { name: 'Beat 2', audio: 'beat2.mp3', cover: 'cover2.jpg' },
    { name: 'Beat 3', audio: 'beat3.mp3', cover: 'cover3.jpg' }
];

function createAudioPlayer(beat) {
    const audio = new Audio(beat.audio);
    audio.controls = true;

    const audioPlayer = document.createElement('div');
    audioPlayer.className = 'audio-player';
    audioPlayer.innerHTML = `
        <img src="${beat.cover}" alt="${beat.name} cover">
        <h2>${beat.name}</h2>
        <button class="buy-button"><img src="cart-icon.png" alt="Cart Icon"></button>
    `;
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
