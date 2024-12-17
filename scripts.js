//dialog box
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.enroll .button').addEventListener('click', function(){
		document.querySelector('.enroll dialog').classList.toggle('show');
	});
	document.querySelector('.close').addEventListener('click', function(){
		document.querySelector('.enroll dialog').classList.toggle('show');
	});
});