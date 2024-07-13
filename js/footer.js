function fetchAndInsertFooter(url, elementId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
}

// Function to handle form submission
function handleFormSubmission() {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Here you can add your logic to handle the form data
  // For example, you can send the data to a server using fetch or XMLHttpRequest

  console.log('Form Submitted!');
  console.log('Name:', name);
  console.log('Email:', email);

  // Clear the form after submission
  document.getElementById('subscribeForm').reset();

  // Provide feedback to the user
  alert('Thank you for subscribing!');
}


document.addEventListener('DOMContentLoaded', function() {

  const path = window.location.pathname;
  let footerFile;

 
  if (path.endsWith('/index.html') || path === '/') {
      footerFile = './footer/footer.html';
  }  else {

    footerFile = '../footer/footer.html';
    footerFile = '../../footer/footer2.html';
  }

  fetchAndInsertFooter(footerFile, 'footer');

});

