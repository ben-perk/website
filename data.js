const form = document.querySelector('#contact-form');
if (!form) {
  console.error('Form element not found');
  return;
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  // Access individual form fields
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const linkedin = formData.get('linkedin');  
  const job = formData.get('job');

  // Or loop through all form data
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }


  // Do something with the form data, e.g., send it to a server
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzbfvL1dMR1oT91Nw78JovoDJIjuHuwhiR43TxrCiWgL9QhxmSzOAlBz6XI40KeS7n1TQ/exec';

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('Data successfully sent to spreadsheet!');
      form.reset();
    }
  } catch (error) {
    console.log('Error:', error);
  }
});
});




