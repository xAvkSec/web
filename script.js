document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    const joinForm = document.querySelector('#join form');

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Handle join form submission
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for applying to join NOVGREY! We will review your application.');
            joinForm.reset();
        });
    }
});