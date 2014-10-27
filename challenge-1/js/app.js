// Challenge summary:
// You will be implementing a countdown clock which take the number
// of seconds as parameter. In addition, you will also add 'confetti'
// to a random location on the page for each passing second.

// After you have completed the basic core components, there are a few
// optional features to work on:
// -- If seconds > 60, timer display should switch to minute:second.
// -- Include a warning when time is up (audio or visual).
// -- Display time in miliseconds.


// First, take a look at the index.html file to see the items you
// will need to work with.

// This function is the equivalent of document ready
$(function() {
	/* Hints:
	 		-- Start by registering the click event for the button.
	 		-- You will need to keep track of the number of second somewhere.
	 		-- Remember javascript function can be assigned into variable.
	 		-- Input values are strings, remember to parse it!
			-- Regex for checking digit input is '^\\d+$'
			-- Look up how setInterval() works, you will need it.
	*/


    $('#countdownButton').click(function() {
        var regExDigit = new RegExp('^\\d+$');
        var timeInput = $('#time');
        var confettiInput = $('#size');
        var timer;

        if(regExDigit.test(timeInput.val()) && regExDigit.test(timeInput.val())) {
            window.clearInterval(timer);
            var curSec = (parseInt(timeInput.val()));
            $('#displayedTimer').text(curSec + 's');
            timer = window.setInterval(function() {
                curSec = countDown(curSec, parseInt(confettiInput.val()), timer);
            }, 1000);
        } else {
            timeInput.val('Numbers Only!');
            confettiInput.val('Numbers Only!');
        }
    });
});

function countDown(secs, confettiSize, timer) {
	// Hint: if time < 0, stop the countdown, otherwise refresh the timer display & call createConfetti().
	// Hint: to stop countdown, look up clearInterval() function.
    --secs;
    $('#displayedTimer').text(secs + 's');
    if((secs) <= 0) {
        window.clearInterval(timer);
    }
    return secs;
}

function createConfetti(confettiSize) {
	// Get confetti's size. If user doesn't specify or type in invalid value, switch to a default size.

	//	Random color RGB, use Math.floor(Math.random() * 255)
    var ranCol = Math.floor(Math.random() * 255);

	// Random locations on screen
	// Hint: use Math.floor, Math.random, window.innerHeight/Width to compute px value.
    var locX = Math.floor(Math.random() * window.innerHeight);
    var locY = Math.floor(Math.random() * window.innerWidth);

	// Add confetti and apply styles: width/height, location, background-color.
	// Hint: use fixed positioning with top & left attributes
    var confetti = $('div');

	// [Optional]
	// Change the timer display's font color to the same as the last confetti's
	// background color. This is actually very simple (1-2 line of code).
	
	// [Optional]
	// Allow user to click on each confetti and remove it (1-2 line of code).
}