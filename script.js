const bookingForm = document.querySelector(".booking-form");
const rentalDateInput = document.querySelector('input[name="rental_date"]');

if (rentalDateInput) {
  const today = new Date().toISOString().split("T")[0];
  rentalDateInput.min = today;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", () => {
    const button = bookingForm.querySelector(".submit-button");

    if (button) {
      button.textContent = "Sending...";
      button.disabled = true;
    }
  });
}
