document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  if (!form) {
    console.error('Form element not found');
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    // Or loop through all form data
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    } // <-- Corrected closing curly brace

    // Print each form field value
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const linkedinInput = document.getElementById('linkedin').value;
    const jobInput = document.getElementById('job').value;

    console.log('Name:', nameInput);
    console.log('Email:', emailInput);
    console.log('Phone:', phoneInput);
    console.log('LinkedIn:', linkedinInput);
    console.log('Job:', jobInput);
  });
});
