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



logos.addEventListener('click', function(event) {
event.preventDefault();
clickSound.play();
clickSound.addEventListener('ended', function() {
window.location.href = 'index.html';
});
});





document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const selectedSeason = document.querySelector('input[name="season"]:checked');
    
    if (selectedSeason) {
        document.getElementById('popup').style.display = 'block';
    } else {
        alert("Please select a season before submitting.");
    }
});


document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});