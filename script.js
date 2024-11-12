// Get elements
const modal = document.getElementById("ratingModal");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");
const ratingButtons = document.querySelectorAll(".rating-btn");
const modalContent = document.querySelector(".modal-content");
const messageBox = document.getElementById("message");

// Variable to store the selected rating
let selectedRating = null;

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  // Clear any message displayed in the message box
  messageBox.innerHTML = "";
}

// Close modal when clicking the "Cancel" button
cancelBtn.addEventListener("click", closeModal);

// Close modal when clicking the close button (X)
closeBtn.addEventListener("click", closeModal);

// Close modal when clicking outside of the modal content
modal.addEventListener("click", (event) => {
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
});

// Handle rating button selection
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Deselect other buttons
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    // Mark this button as selected
    button.classList.add("selected");
    // Update the selected rating
    selectedRating = button.getAttribute("data-value");

    // Display a feedback message based on rating
    let feedbackMessage;
    if (selectedRating === "10") {
      feedbackMessage =
        "Thank you for your high rating! We’re glad you had a great experience.";
    } else if (selectedRating >= "7") {
      feedbackMessage = "Thanks for your feedback! We appreciate your support.";
    } else {
      feedbackMessage =
        "We’ll work hard to improve. Thanks for letting us know!";
    }

    // Update message box with feedback message
    messageBox.innerHTML = `<p class="feedback-message">${feedbackMessage}</p>`;
  });
});

// Handle submit button click to display a thank-you message
submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    // Display thank-you message based on the selected rating
    messageBox.innerHTML = `<p class="thanks-message">Thanks for your feedback! You rated us: ${selectedRating}.</p>`;
  } else {
    // Display a message prompting the user to select a rating
    messageBox.innerHTML = `<p class="error-message">Please select a rating before submitting.</p>`;
  }
});
