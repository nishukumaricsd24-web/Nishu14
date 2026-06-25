// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
    const offset = -currentTestimonial * 100;
    testimonialTrack.style.transform = `translateX(${offset}%)`;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    updateCarousel();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    updateCarousel();
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Auto-advance carousel every 5 seconds
    setInterval(nextTestimonial, 5000);
}

// Admission Form Validation and Submission
const admissionForm = document.getElementById('admissionForm');
const formMessage = document.getElementById('formMessage');

if (admissionForm) {
    admissionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(admissionForm);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        let isValid = true;
        const requiredFields = admissionForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#dc3545';
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        // Validate email format
        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#dc3545';
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Validate phone number (basic validation)
        const phoneField = document.getElementById('phone');
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
        if (!phoneRegex.test(phoneField.value)) {
            isValid = false;
            phoneField.style.borderColor = '#dc3545';
            showMessage('Please enter a valid phone number.', 'error');
            return;
        }
        
        // Check if terms are accepted
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            isValid = false;
            showMessage('Please accept the terms and conditions.', 'error');
            return;
        }
        
        if (isValid) {
            // Simulate form submission
            showMessage('Thank you for your application! We will review your submission and contact you within 3-5 business days.', 'success');
            
            // Log form data (in production, this would be sent to a server)
            console.log('Application submitted:', data);
            
            // Reset form after successful submission
            setTimeout(() => {
                admissionForm.reset();
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            showMessage('Please fill in all required fields correctly.', 'error');
        }
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate email
        const emailField = document.getElementById('contactEmail');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailField.value)) {
            showContactMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showContactMessage('Thank you for contacting us! We will get back to you shortly.', 'success');
        
        console.log('Contact form submitted:', data);
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            contactMessage.style.display = 'none';
        }, 5000);
    });
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showContactMessage(message, type) {
    contactMessage.textContent = message;
    contactMessage.className = `form-message ${type}`;
    contactMessage.style.display = 'block';
    
    // Scroll to message
    contactMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '#fff';
            });
            navLink.style.color = '#ffd700';
        }
    });
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
const cards = document.querySelectorAll('.course-card, .faculty-card, .stat-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form field real-time validation feedback
const formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#28a745';
        }
    });
    
    input.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(220, 53, 69)') {
            this.style.borderColor = '#ddd';
        }
    });
});

// Add loading animation for page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Console welcome message
console.log('%cWelcome to Excellence College!', 'color: #1e3c72; font-size: 24px; font-weight: bold;');
console.log('%cEmpowering minds, shaping futures since 1985', 'color: #2a5298; font-size: 14px;');