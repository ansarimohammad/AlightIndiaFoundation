// Function to fetch and insert header and footer content
function fetchAndInsert(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

// Load header and footer dynamically for each page
document.addEventListener('DOMContentLoaded', function() {
    // Determine the current page and load appropriate content
    const path = window.location.pathname;
    let headerFile, footerFile;

    // Define header and footer files based on the current page
    if (path.endsWith('/index.html') || path === '/') {
        headerFile = 'header.html';
        footerFile = 'footer.html';
    } else if (path.endsWith('/about.html')) {
        headerFile = 'header_about.html';
        footerFile = 'footer_about.html';
    } else if (path.endsWith('/contact.html')) {
        headerFile = 'header_contact.html';
        footerFile = 'footer_contact.html';
    } else {
        // Default fallback

        // footerFile = '../footer/footer.html';            // You can two footerFile at a time for multi page changes
        // footerFile = '../../footer/footer.html';
        headerFile = 'header.html';
        footerFile = 'footer.html';
    }

    // Fetch and insert header and footer content
    fetchAndInsert(headerFile, 'header');
    fetchAndInsert(footerFile, 'footer');
});









// Not Working Use OnClick on html 

/*


// Example form submission handling (can be customized per page)
document.addEventListener('DOMContentLoaded', function() {
    // Add form submission handling for each specific page
    const path = window.location.pathname;

    if (path.endsWith('/index.html') || path === '/') {
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
    } else if (path.endsWith('/about.html')) {
        // Add specific form handling for about.html if needed
    } else if (path.endsWith('/contact.html')) {
        // Add specific form handling for contact.html if needed
    }
});
*/