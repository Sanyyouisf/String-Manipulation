var inputString = document.getElementById("inputString");
var outputString = document.getElementById("outputString");
var btnString = document.getElementById("btnString");

// function to reverse the string
function reversal(string) {
	outputString.innerHTML= '<p>'+" the reverses order of the characters are :   "
								 + string.split('').reverse().join('')+'</p>';
}

//function to sort the string
// and add it to the DOM with new line 
function alphabits(string) {
	outputString.innerHTML+= '<p>'+" the characters in alphabetical order are :   "
							      + string.split('').sort().join('') +'</p>';
}

// function palindrome(inputString) {
// 	if (var outputString === reversal(inputString));{
// 		outputString.innerHTML+= '<p>'+" Your string is a palidrome :   "
// 							  + inputString === reversal(input)'</p>';
// 	}
// }

// event listener for the button click 
btnString.addEventListener("click", function() {
	reversal(inputString.value);
	alphabits(inputString.value);
	palindrome(inputString.value);
});

// event for clicking the enter button in kb 
inputString.addEventListener("keypress",
	function(event){
		if (event.keyCode === 13){
			reversal(inputString.value);
			alphabits(inputString.value);
			palindrome(inputString.value);
		}
		});
