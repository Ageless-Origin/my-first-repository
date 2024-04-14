// === USE STRICT === //
"use strict";

// === DOM ELEMENTS === //
let spanTimer;
let intervalTimer;

// === EVENT LISTENERS === //
window.addEventListener("load", init, false);

// === METHODS === //

// Init function
function init() {
    // Link DOM elements with variables
    spanTimer = document.getElementById("span-timer");

    // Add interval
    intervalTimer = setInterval(updateTime, 1000);
}

/** 
 * Update current time.
 * */
function updateTime() {
    let date = new Date();
    let hours = new String(date.getHours()).padStart(2, "0");
    let minutes = new String(date.getMinutes()).padStart(2, "0");
    let seconds = new String(date.getSeconds()).padStart(2, "0");
    spanTimer.innerText = hours + ":" + minutes + ":" + seconds;
}