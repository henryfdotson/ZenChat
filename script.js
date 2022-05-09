function randomizeCardColor() {
  const colors = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark"]

  var cardColor = colors[Math.floor(Math.random()*colors.length)];

  return cardColor;
}

function messageIdGenerator(max) {
    return Math.floor(Math.random() * max);
}

function getMessage(name, message) {
  // Function pulls in the two input fields

  // Then strips the message content to add as a element
  const messageStripped = message.replace(/[^a-z0-9]/gi, '');

  // Create the element and add a class to it
  var messageDiv = document.createElement("div");
  messageDiv.classList.add("messageDiv");

  // Randomize color of the card
  cardColor = randomizeCardColor();

  // Create X button
  xButton = `<button type="button" class="btn btn-secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
  </svg>
  </button>`;

  // Get an Id number for the card

  const messageID = messageIdGenerator(99999);

  // Create the new card containing the inputted data
  messageDiv.innerHTML = `
  <div  id="${messageID}" class="card text-white ${cardColor} mb-3 ${messageStripped}" style="max-width: 18rem;">

  <button type="button" id="${messageStripped}remove" class="btn remove-btn btn-secondary" onclick="return this.parentNode.remove();">X</button>

      <div class="card-header">${name}</div>
      <div class="card-body">
        <h5 class="card-title">${message}</h5>
      </div>
  </div>
  `;

  // Append the card to the "queue" element
  document.getElementById("queue").appendChild(messageDiv);
}