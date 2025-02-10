let isOriginalBackground = true;


function toggleBackground() {
    const body = document.querySelector('body');

    if (isOriginalBackground) {
        body.style.backgroundImage = 'url("img/background2.png")';
    } else {
        body.style.backgroundImage = 'url("img/background.png")';
    }

    isOriginalBackground = !isOriginalBackground;
}


const clickSound = new Audio('img/sound.mp3');
const logo = document.getElementById('logo');

logo.addEventListener('click', function() {
    clickSound.play();
});