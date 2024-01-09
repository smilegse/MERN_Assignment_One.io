
var ageInput = document.getElementById("ageInput");

// Execute a function when the user presses a key on the keyboard
ageInput.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    checkAge();
  }
}); 

function ageInputFocus(){
  ageInput.value='';
  var resultCard = document.getElementById("ageCard");
  resultCard.style.display = "none";
}
function ageClear() {
  ageInput.value = '';
  var resultCard = document.getElementById("ageCard");
  resultCard.style.display = "none";
}

function checkAge() {
  // Get the age from the input field
  var age = document.getElementById("ageInput").value;

  // Convert the age to a number
  age = parseInt(age);

  // Check if the age is greater than or equal to 18
  if (!isNaN(age)) {
    var resultMessage = document.getElementById("ageMessage");
    var resultCard = document.getElementById("ageCard");

    if (age >= 18) {
      resultMessage.textContent = "You are an adult.";
    } else {
      resultMessage.textContent = "You are a child.";
    }
    // Display the result card
    resultCard.style.display = "block";
  } else {
    var resultCard = document.getElementById("ageCard");
    resultCard.style.display = "none";
    alert("Please enter a valid age.");
  }
}