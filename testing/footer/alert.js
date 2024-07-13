document.getElementById('subscribeForm').addEventListener('submit', function(event) {
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
  });