document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded!');
    
    // Add current date to footer
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>Last updated: ' + new Date().toDateString() + '</p>';
    document.body.appendChild(footer);
});