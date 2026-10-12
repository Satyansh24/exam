// Mobile menu toggle handling
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar");

mobileMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Feedback Form Handling & Success Message Display
const feedbackForm = document.getElementById("feedback-form");
const successMessage = document.getElementById("success-message");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Basic form submission simulation
  successMessage.textContent = "Your response has been recorded. Thank you!";
  successMessage.classList.add("show");

  // Reset the form fields
  feedbackForm.reset();

  // Hide success message after 4 seconds
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 4000);
});
