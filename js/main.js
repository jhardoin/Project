// nav
document.getElementById('nav').addEventListener('change', function() {
    const selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage; // Redirects to the selected page
    }
});



document.querySelector('#newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Thank you for subscribing');
});







