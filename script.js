document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event to all project links
    document.querySelectorAll('.project a').forEach(item => {
        item.addEventListener('click', function(e) {
            alert('Prepare to be amazed by this project!');
        });
    });
});
