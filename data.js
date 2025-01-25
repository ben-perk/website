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
  const scriptURL=
  "https://script.google.com/macros/s/AKfycbyaa2OaUPoYwx9ZX_ndoDPZnqebvacAWtgVTCQay-uhoIsiLxWZdcbsMCP4qFjqkLiVqQ/exec";

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var name = document.getElementById("name").checked;
        var email = document.getElementById("email").checked;
        var phone = document.getElementById("phone").checked;
        var linkedin = document.getElementById("linkedin").checked;
        var job = document.getElementById("job").checked;
        

        if (name) {
          formData.append("name", "Yes");
      } else {
          formData.append("name", "No");
      }
      
      if (email) {
          formData.append("email", "Yes");
      } else {
          formData.append("email", "No");
      }
      
      if (phone) {
          formData.append("phone", "Yes");
      } else {
          formData.append("phone", "No");
      }
      
      if (linkedin) {
          formData.append("linkedin", "Yes");
      } else {
          formData.append("linkedin", "No");
      }
      
      if (job) {
          formData.append("job", "Yes");
      } else {
          formData.append("job", "No");
      }
      

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });




