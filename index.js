#!/usr/bin/env node

var b = require('bonescript');
var led1 = "USR3";
var led2 = "USR2";
var led3 = "USR1";
var led4 = "USR0";
var state = 0;

b.pinMode(led1, 'out');
b.pinMode(led2, 'out');
b.pinMode(led3, 'out');
b.pinMode(led4, 'out');

toggleLED = function() {
    state = state ? 0 : 1;
    b.digitalWrite(led1, state);
    b.digitalWrite(led2, state);
    b.digitalWrite(led3, state);
    b.digitalWrite(led4, state);
};

timer = setInterval(toggleLED, 100);

stopTimer = function() {
    clearInterval(timer);
};

setTimeout(stopTimer, 30000);


console.log(`Hello World`)


