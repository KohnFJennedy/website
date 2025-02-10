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