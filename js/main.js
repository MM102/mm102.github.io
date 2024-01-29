
var logo_scaleTime = 0;
var logo_mouseX;
var logo_mouseY;

function logoMove(event) {
	logo_mouseX = event.clientX;
	logo_mouseY = event.clientY;
	logoUpdate();
}

function logoUpdate() {
	// console.log();
	const header = document.querySelector( "header" );
	const logo = document.querySelector( ".logo_container" );

	const middleX = (header.offsetWidth/2);
	const middleY = (header.offsetHeight/2)-window.scrollY;
	const logo102OffsetX = ((logo_mouseX - middleX)/32);
	const logo102OffsetY = ((logo_mouseY - middleY)/32);
	const logoCharsOffsetX = ((logo_mouseX - middleX)/24);
	const logoCharsOffsetY = ((logo_mouseY - middleY)/24);

	logo.style.setProperty("--logo102-slideX", logo102OffsetX + "px");
	logo.style.setProperty("--logo102-slideY", logo102OffsetY + "px");
	logo.style.setProperty("--logoChars-slideX", logoCharsOffsetX + "px");
	logo.style.setProperty("--logoChars-slideY", logoCharsOffsetY + "px");
}