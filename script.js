function playAudio() {
    const volumeIcon = document.getElementById('icon');

    volumeIcon.src = 'images/volume_down.svg';

    const audio = document.getElementById('audio');
    audio.play();

    setTimeout(() => {
        volumeIcon.src = 'images/volume_up.svg';
    },750);
}
