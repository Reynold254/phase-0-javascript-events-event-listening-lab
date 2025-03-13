function addingEventListener() {
  // Select the button element
  const input = document.getElementById("button");

  // Define the event handler function
  function clickAlert() {
    alert("I was clicked!");
  }

  // Attach the event listener
  input.addEventListener("click", clickAlert);
}
