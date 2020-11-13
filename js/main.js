// Form Validation
// Element
var input = document.querySelectorAll('input');
var txtarea = document.querySelector('textarea');
var inputContainer = document.querySelectorAll('.input-container');
var txtareaContainer = document.querySelector('.textarea-container');

// Adding event listener to the elements
// First Name

input[0].addEventListener("focusin", function () {
	inputContainer[0].style.border = "1px solid #303030";
});

input[0].addEventListener("focusout", function () {
	inputContainer[0].style.border = "";
});

// Last Name
input[1].addEventListener("focusin", function () {
	inputContainer[1].style.border = "1px solid #303030";
});

input[1].addEventListener("focusout", function () {
	inputContainer[1].style.border = "";
});

// Phone Number
input[2].addEventListener("focusin", function () {
	inputContainer[2].style.border = "1px solid #303030";
});

input[2].addEventListener("focusout", function () {
	inputContainer[2].style.border = "";
});

// Company Name
input[3].addEventListener("focusin", function () {
	inputContainer[3].style.border = "1px solid #303030";
});

input[3].addEventListener("focusout", function () {
	inputContainer[3].style.border = "";
});

// Email Address
input[4].addEventListener("focusin", function () {
	inputContainer[4].style.border = "1px solid #303030";
});

input[4].addEventListener("focusout", function () {
	inputContainer[4].style.border = "";
});

// Textarea
txtarea.addEventListener("focusin", function () {
	txtareaContainer.style.border = "1px solid #303030";
});

txtarea.addEventListener("focusout", function () {
	txtareaContainer.style.border = "";
});