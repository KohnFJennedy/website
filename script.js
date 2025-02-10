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
const logos = document.querySelector('.logo');


logos.forEach(function(logo) {
    logo.addEventListener('click', function(event) {
        event.preventDefault();
        clickSound.play();
        clickSound.addEventListener('ended', function() {
            window.location.href = 'index.html';
        });
    });
});