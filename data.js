async function sendData(data) {
    // Construct a FormData instance
    const formData = new FormData();
  
    // Add a text field
    formData.append("name", "Pomegranate");
  
    // Add a file
    const selection = await window.showOpenFilePicker();
    if (selection.length > 0) {
      const file = await selection[0].getFile();
      formData.append("file", file);
    }
  
    try {
      const response = await fetch("https://example.org/post", {
        method: "POST",
        // Set the FormData instance as the request body
        body: formData,
      });
      console.log(await response.json());
    } catch (e) {
      console.error(e);
    }
  }
  
  const send = document.querySelector("#send");
  send.addEventListener("click", sendData);

  const form = document.querySelector("#userinfo");

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});