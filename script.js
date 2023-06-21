const playlist = [
    { name: 'Song 1', audio: 'song1.mp3' },
    { name: 'Song 2', audio: 'song2.mp3' },
    { name: 'Song 3', audio: 'song3.mp3' }
];

function createPlaylistItem(song) {
    const playlistItem = document.createElement('li');
    playlistItem.textContent = song.name;
    playlistItem.addEventListener('click', function() {
        playSong(song.audio);
    });

    return playlistItem;
}

function playSong(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

function renderPlaylist() {
    const playlistElement = document.getElementById('playlist');

    playlist.forEach(song => {
        const playlistItem = createPlaylistItem(song);
        playlistElement.appendChild(playlistItem);
    });
}

renderPlaylist();
