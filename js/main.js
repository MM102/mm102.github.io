
var logo_scaleTime = 0;
var logo_mouseX;
var logo_mouseY;

function mobileCheck() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function load() {
	if ( mobileCheck() ) {
		const scrollImgs_list = document.querySelectorAll('.image-scroll-container');
		scrollImgs_list.forEach(i => {
			i.style.overflowX = "scroll";
		});
	};
}
window.onload = load;

function logoMove(event) {
	if ( mobileCheck() ) {
		return
	};
	logo_mouseX = event.clientX;
	logo_mouseY = event.clientY;
	logoUpdate();
};

function logoUpdate() {
	const header = document.querySelector( "header" );
	// console.log();
	const logo = document.querySelector( ".logo-hero" );

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
};

function imgMove(event) {
	if ( mobileCheck() ) {
		return
	};
	imgContainer_mouseX = event.clientX;
	imgUpdate();
};

function imgUpdate() {
	const imgContainer = document.querySelector( ".image-scroll-container:hover" );
	const imgIndicators = imgContainer.parentNode;
	const img = document.querySelector( ".image-scroll-container:hover img" );
	const imgContainer_rect = imgContainer.getBoundingClientRect();
	const img_rect = img.getBoundingClientRect();
	const staticRegion = 50
	const mouseX = (imgContainer_mouseX-(imgContainer_rect.left+staticRegion)) / (imgContainer_rect.width-(staticRegion*2));
	const mouseXClamp = Math.min(Math.max(mouseX, 0), 1);
	const imgOffsetX = ((img_rect.width - imgContainer_rect.width)*mouseXClamp);

	imgContainer.style.setProperty("--img-scrollX", -imgOffsetX + "px");

	if (mouseXClamp == 0) {
		imgIndicators.style.setProperty('--opacity-left', 0);
	} else {
		imgIndicators.style.setProperty('--opacity-left', 1);
	}
	if (mouseXClamp == 1) {
		imgIndicators.style.setProperty('--opacity-right', 0);
	} else {
		imgIndicators.style.setProperty('--opacity-right', 1);
	}
};

function imgScroll(t) {

	const imgContainer = document.getElementById(t);
	const imgIndicators = imgContainer.parentNode;
	const img = imgContainer.querySelector( "img" );
	const imgContainer_rect = imgContainer.getBoundingClientRect();
	const img_rect = img.getBoundingClientRect();

	const scrollPercent = -(imgContainer.scrollLeft) / (imgContainer_rect.width - img_rect.width);
	
	if (scrollPercent == 0) {
		imgIndicators.style.setProperty('--opacity-left', 0);
	} else {
		imgIndicators.style.setProperty('--opacity-left', 1);
	}
	if (scrollPercent == 1) {
		imgIndicators.style.setProperty('--opacity-right', 0);
	} else {
		imgIndicators.style.setProperty('--opacity-right', 1);
	}

};

function hideId(id, box) {
	var checkBox = document.getElementById(box);
	var x = document.getElementById(id);
	if (checkBox.checked == true) {
		x.style.opacity = 1;
	} else {
		x.style.opacity = 0;
	}
}

function hideRoom(id, id2, box, box2) {
	var checkBox = document.getElementById(box);
	var checkBox2 = document.getElementById(box2);
	var x = document.getElementById(id);
	var y = document.getElementById(id2);

	if (checkBox.checked == true) {
		x.style.opacity = 1;
	} else {
		x.style.opacity = 0;
	}

	if (checkBox.checked == true && checkBox2.checked == true) {
		y.style.opacity = 1;
	} else {
		y.style.opacity = 0;
	}
}
  
function toggleNav() {
	const header = document.querySelector( ".header-normal" );
	const navIsOpened = header.getAttribute("aria-expanded");

	if (navIsOpened === "true") {
		header.setAttribute("aria-expanded", false);
	} else {
		header.setAttribute("aria-expanded", true);
	}
}