const textSubmit = document.getElementById('textSubmit');

// Submit message on 'Enter' press

textSubmit.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submitButton").click();
  }
});