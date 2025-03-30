// Typing effect for the terminal text
const typingText = document.querySelector('.typing-text');
const text = "Hello World! I'm PHIMS...";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', typeWriter);

// Terminal mode toggle
const terminalToggle = document.querySelector('.terminal-toggle');
const body = document.body;

terminalToggle.addEventListener('click', () => {
    body.classList.toggle('terminal-mode');
    if (body.classList.contains('terminal-mode')) {
        terminalToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        terminalToggle.innerHTML = '<i class="fas fa-terminal"></i>';
    }
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add glitch effect to project cards on hover
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'glitch 0.3s infinite';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.animation = 'none';
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { email, message });
    
    // Show success message
    alert('Message sent successfully!');
    contactForm.reset();
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add matrix rain effect in terminal mode
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-rain';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const matrixArray = matrix.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0FF';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    return setInterval(draw, 33);
}

let matrixInterval;

terminalToggle.addEventListener('click', () => {
    if (body.classList.contains('terminal-mode')) {
        matrixInterval = createMatrixRain();
    } else {
        const canvas = document.getElementById('matrix-rain');
        if (canvas) {
            canvas.remove();
        }
        clearInterval(matrixInterval);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrix-rain');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// Add typing effect to experience list items
const experienceItems = document.querySelectorAll('.experience-list li');
experienceItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    setTimeout(() => {
        item.style.transition = 'all 0.5s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, index * 200);
}); 
