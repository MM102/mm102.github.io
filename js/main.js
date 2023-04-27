
var logo_scaleTime = 0;
var logo_mouseX;
var logo_mouseY;

function logoIn() {
	logo_scaleTime = 0;
    hoverInvterval = setInterval(function(){   
		logo_scaleTime = Math.min(logo_scaleTime+1,100);
		var scale = easeInOutQuad(logo_scaleTime/200, 0, 1, 0.5);
		logoUpdate(scale);
    },5);
}

function logoMove(event) {
	logo_mouseX = event.clientX;
	logo_mouseY = event.clientY;
}

function logoReset() {
	const logo = document.querySelector( ".logo_container" );
	logo.style.setProperty("--logo-slideScale", 0);
    clearInterval(hoverInvterval);

    returnInvterval = setInterval(function(){   
		logo_scaleTime = Math.max(logo_scaleTime-1,0);
		var scale = easeInOutQuad(logo_scaleTime/200, 0, 1, 0.5);
		logoUpdate(scale);
		if (logo_scaleTime == 0) {
			clearInterval(returnInvterval);
		};
    },5);

}

function logoUpdate(scale) {
	const header = document.querySelector( "header" );
	const logo = document.querySelector( ".logo_container" );

	const middleX = (header.offsetWidth/2);
	const middleY = (header.offsetHeight/2)-window.scrollY;
	const logo102OffsetX = ((logo_mouseX - middleX)/32)*(scale);
	const logo102OffsetY = ((logo_mouseY - middleY)/32)*(scale);
	const logoCharsOffsetX = ((logo_mouseX - middleX)/24)*(scale);
	const logoCharsOffsetY = ((logo_mouseY - middleY)/24)*(scale);

	logo.style.setProperty("--logo102-slideX", logo102OffsetX + "px");
	logo.style.setProperty("--logo102-slideY", logo102OffsetY + "px");
	logo.style.setProperty("--logoChars-slideX", logoCharsOffsetX + "px");
	logo.style.setProperty("--logoChars-slideY", logoCharsOffsetY + "px");
}

function easeInOutQuad (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}
