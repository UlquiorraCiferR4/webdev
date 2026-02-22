so  things I'have to fix : 
- when I'click  on  the link in  the hidable nav the x still shows make it disapare maybe using event lisiner or something
close.js : 
function showNav() {
    document.getElementById("hiden").style.display = "block";
    document.getElementById("close").style.display = "block";
    Document.getElementById("background").style.display = "block";
}
function hideNav() {
    document.getElementById("hiden").style.display = "none";
    Document.getElementById("background").style.display = "none";

    hide_x()
}
function hide_x() {
    document.getElementById("close").style.display = "none";
    Document.getElementById("background").style.display = "none";

}
script.js : // addEventListener that make me  hide element when I'press esc
// Add event listener for 'keydown' on window object
window.addEventListener('keydown', function(e) {
    // Check if the pressed key is ESC (key code 27)
    if (e.key === 'Escape' || e.keyCode === 27) {
        // Execute your desired function here
        hide();
    }
});


song mute play :      <script> sittigs.html
        document.getElementById('muteBtn').addEventListener('change', function() {
            // Send a message to the parent frame
            window.parent.postMessage({
                type: 'muteToggle',
                state: this.checked
            }, '*');
        });
    </script>

    index.html
    
<script>
        // Listen for messages from the child frame
        window.addEventListener('message', function(event) {
            if (event.origin === 'http://localhost:8000') { // Adjust origin as needed
                const audio = document.getElementById('audio');
                if (audio) {
                    audio.muted = event.data.state;
                    alert("wtf");
                }
            }
        });
</script>
