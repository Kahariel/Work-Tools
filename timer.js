document.addEventListener('keyup', (event) => {
    if (event.key == ' ' || event.code == "Space" || event.keyCode == 32) {
        countdown = 60;
        setInterval(timer, 1000);
    }
})


function timer() {
    document.getElementById("timer").innerHTML = countdown;
    countdown--;
    if (countdown == 0) {
        document.getElementById("ding").onplay();
    }
}

var countdown = 60;