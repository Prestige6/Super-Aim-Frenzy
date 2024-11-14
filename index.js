function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}


// Show the home section by default
document.getElementById('play').style.display = 'block';

const target = document.getElementById("target");
const timer = document.getElementById("timer");
let sixty = 60
let isTimerRunning = false;
let score = document.getElementById("score");
let Points = 100
let End = true
function PositionCords() {
    if (End) {
        // Get dimensions of .game container
        const gameContainer = document.querySelector(".game");
        const containerWidth = gameContainer.clientWidth;
        const containerHeight = gameContainer.clientHeight;

        // Generate random positions within the container dimensions
        let up = Math.floor(Math.random() * (containerHeight - 50)); // 50 is the button height
        let left = Math.floor(Math.random() * (containerWidth - 50)); // 50 is the button width

        // Apply the random top and left positions to #target
        target.style.top = up + "px";
        target.style.left = left + "px";

        //Timer
    } else {
        return
    }

}
function Timer() {
    const sfx = new Audio('button-124476.mp3');

    if (sfxEnabled) {
        sfx.volume = 1.0;
    } else {
        sfx.volume = 0;
    }

    sfx.play();
    // If the timer is not already running, start the countdown
    if (!isTimerRunning) {
        isTimerRunning = true; // Mark that the timer is running
        // Set interval to decrease the timer every second
        const intervalID = setInterval(() => {
            if (sixty <= -1) {
                clearInterval(intervalID); // Stop the timer when it reaches 0
                console.log("Timer stopped");
                End = false
            } else {
                timer.textContent = sixty; // Update the timer text
                sixty--; // Decrease the timer by 1

            }
        }, 1000);
    }

    // Each time the button is clicked, add 10 seconds to the timer
}
function ScoreAdder() {
    if (End) {
        score.textContent = Points
        Points = Points + 100
    }
    else {
        return
    }
}
target.addEventListener("click", Timer)
target.addEventListener("click", ScoreAdder)

//Settings
const SFX = document.getElementById("sfx")
let ColorOfCube = document.getElementById("ColorOfCube");
const rgbInput = document.getElementById('rgbInput');
function SetColorOfCube() {
    // Get the RGB value entered by the user
    let colorValue = ColorOfCube.value;

    // Validate if the value is a valid RGB format
    if (colorValue.match(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/)) {
        // Set the background color of the target button
        target.style.background = colorValue;
    } else {
        alert("Please enter a valid RGB color in the format rgb(r, g, b)");
    }
}

//CursorChanger1

function CursorChange(url) {
    document.querySelectorAll("body, button, input, *").forEach(element => {
        element.style.cursor = `url('${url}') 16 16, auto`;
    });
}

//SFX on and off
let sfxEnabled = true
function sfxChange(YesOrNo) {
    sfxEnabled = YesOrNo
}