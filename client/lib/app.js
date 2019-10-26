
// initialize the player object
var player = new PreziPlayer('prezi-player', {
	preziId: "xzrf8_apklcr",
	width: 500,
	height: 400,
	debug: true
});

// if content is ready, get and display the title of the prezi and number of steps
player.on(PreziPlayer.EVENT_STATUS, function(event) {
	if (event.value == PreziPlayer.STATUS_CONTENT_READY) {
		document.getElementById('i-title').value = player.getTitle();
		setTimeout(function(){
			document.getElementById('t-step-count').innerHTML = player.getStepCount();
		}, 2000);	
	}
});

// display the current step
player.on(PreziPlayer.EVENT_CURRENT_STEP, function(event) {
	document.getElementById('t-current-step').innerHTML = event.value + 1;
});

// event handlers for the buttons
document.getElementById("b-previous").addEventListener('click', function(){
    player.previousStep();
});
document.getElementById("b-next").addEventListener('click', function(){
    player.nextStep();
});
document.getElementById("b-move-to-step").addEventListener('click', function(){
    player.toStep(document.getElementById("i-step-number").value - 1);
});
