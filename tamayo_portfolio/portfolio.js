window.onload = () => {
    const sections = document.querySelectorAll('.interests .card-container');
    sections.forEach(section => section.style.display = 'none');
    const kdramaSection = document.getElementById('aspirations');
    kdramaSection.style.display = 'block';

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            sections.forEach(section => section.style.display = 'none');
            document.getElementById(link.getAttribute('href').substring(1)).style.display = 'block';
        });
    });
};

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString();
    dateElement.textContent = `${currentDate}`;
});

// Open modal when card is clicked
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const modalId = this.getAttribute('data-target');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close modal when 'x' is clicked
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
