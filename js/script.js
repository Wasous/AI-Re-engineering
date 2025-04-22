// Scroll Header Effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Particles Animation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particlesCount = 15;

    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size
        const size = Math.random() * 50 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.3;

        // Random animation duration
        const duration = Math.random() * 25 + 15;
        particle.style.animationDuration = `${duration}s`;

        // Random animation delay
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

// Scroll Animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Sector Tabs Functionality
function initSectorTabs() {
    const sectorTabs = document.querySelectorAll('.sector-tab');
    const sectorContents = document.querySelectorAll('.sector-content');

    if (sectorTabs.length > 0) {
        sectorTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                sectorTabs.forEach(t => t.classList.remove('active'));
                sectorContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab
                tab.classList.add('active');

                // Show corresponding content
                const sectorId = tab.getAttribute('data-sector');
                const targetContent = document.getElementById(`${sectorId}-content`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
}

// Email validation for corporate emails
function initEmailValidation() {
    const downloadForm = document.getElementById('whitepaper-download');
    const contactForm = document.querySelector('.contact-form');

    if (downloadForm) {
        downloadForm.addEventListener('submit', function(e) {
            const email = document.getElementById('wp-email').value;
            if (isPersonalEmail(email)) {
                e.preventDefault();
                alert('Por favor, utiliza tu email corporativo para descargar el whitepaper.');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const email = document.getElementById('email').value;
            if (isPersonalEmail(email)) {
                e.preventDefault();
                alert('Por favor, utiliza tu email corporativo para reservar tu auditoría.');
            }
        });
    }
}

function isPersonalEmail(email) {
    const personalDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'aol.com', 'icloud.com', 'protonmail.com', 'mail.com'];
    if (!email.includes('@')) return true;
    
    const domain = email.split('@')[1].toLowerCase();
    return personalDomains.some(personalDomain => domain.includes(personalDomain));
}

// Init functions on page load
window.addEventListener('load', function () {
    createParticles();
    animateOnScroll();
    initSectorTabs();
    initEmailValidation();

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});