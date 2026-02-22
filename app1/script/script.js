addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        // Execute your desired function here
        showHide();
    }
});
function showHide() {
    if (document.getElementById("background").style.display === "block"){
        document.getElementById("background").style.display = "none";
        document.getElementById("hiden").style.display = "none";
    }else {
        document.getElementById("background").style.display = "block";
        document.getElementById("hiden").style.display = "block";
    }
    
}
// play background music
const audio = new Audio('assets/NEFFEX - Grateful [Copyright Free].mp3');
(function playMusic() {
    if (audio.paused) {
        audio.play();
        audio.volume = 0.25;
    }
}
)();



