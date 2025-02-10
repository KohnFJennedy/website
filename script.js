let isOriginalBackground = true;


function toggleBackground() {
    const body = document.querySelector('body');

    if (isOriginalBackground) {
        body.style.backgroundImage = 'url("img/background2.png")';
        body.style.filter = "brightness(50%)";
    } else {
        body.style.backgroundImage = 'url("img/background.png")';
        body.style.filter = "brightness(50%)";
    }

    isOriginalBackground = !isOriginalBackground;
}


const clickSound = new Audio('img/sound.mp3');
const logos = document.querySelector('.logo');



logos.addEventListener('click', function(event) {
event.preventDefault();
clickSound.play();
clickSound.addEventListener('ended', function() {
window.location.href = 'index.html';
});
});