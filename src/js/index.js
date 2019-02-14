document.addEventListener("DOMContentLoaded", ready);


import '../css/main.scss';

function ready() {
	console.log("App was load ...");
	
	const contactsTop = document.getElementById("contactsTop");
	const mainMenu = document.getElementById("mainMenu");
	const contactsHeight = contactsTop.clientHeight;
	
	f(contactsHeight,mainMenu);
	
	window.onscroll = function() {
		f(contactsHeight,mainMenu);
	};
	
	function f(contactsHeight,mainMenu) {
		if( ( window.pageYOffset || document.documentElement.scrollTop) >= contactsHeight){
			mainMenu.classList.add("fixed-top")
		}else {
			mainMenu.classList.remove("fixed-top")
		}
	}
}



