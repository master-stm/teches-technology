import { companyLogos } from './company-data.js';
import { partnersData } from './partners-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize filter buttons
    initFilterButtons();
    
    // Add smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize placement scroll with company logos
    initPlacementScroll();
    
    // Initialize partners slider
    initPartnersSlider();
});

function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const personCards = document.querySelectorAll('.person-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            // Show/hide person cards based on filter
            personCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links that start with #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const formElements = contactForm.elements;
            let isValid = true;
            
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value.trim()) {
                    isValid = false;
                    formElements[i].style.borderColor = 'red';
                } else {
                    formElements[i].style.borderColor = '';
                }
            }
            
            if (isValid) {
                // Simulate form submission
                const submitButton = contactForm.querySelector('button[type="submit"]');
                submitButton.textContent = 'Sending...';
                
                setTimeout(() => {
                    submitButton.textContent = 'Message Sent!';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        submitButton.textContent = 'Send Message';
                    }, 3000);
                }, 1500);
            }
        });
    }
}

function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    
    // Set initial active slide
    slides[0].classList.add('active');
    dots[0].classList.add('active');
    
    // Auto slide change
    setInterval(() => {
        nextSlide();
    }, 5000);
    
    // Click events for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }
    
    function updateSlider() {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
}

function initPlacementScroll() {
    const placementContainer = document.querySelector('.placement-scroll');
    if (!placementContainer) return;
    
    // Clear existing content
    placementContainer.innerHTML = '';
    
    // Add company logos
    companyLogos.forEach(company => {
        const logoItem = document.createElement('div');
        logoItem.className = 'placement-item';
        logoItem.innerHTML = `
            <div class="company-logo" style="color: ${company.color}">
                ${company.icon}
                <span class="company-name">${company.name}</span>
            </div>
        `;
        placementContainer.appendChild(logoItem);
    });
    
    // Create duplicate items to ensure continuous scrolling
    const placementItems = Array.from(placementContainer.querySelectorAll('.placement-item'));
    placementItems.forEach(item => {
        const clone = item.cloneNode(true);
        placementContainer.appendChild(clone);
    });
}

function initPartnersSlider() {
    const partnersTrack = document.querySelector('.partners-track');
    if (!partnersTrack) {
        console.log('Partners track not found');
        return;
    }
    
    console.log('Partners data:', partnersData); // Debug log
    
    // Clear existing content
    partnersTrack.innerHTML = '';
    
    // Create two sets of partners for continuous scrolling
    const partners = [...partnersData, ...partnersData];
    
    // Add partner items
    partners.forEach(partner => {
        const partnerItem = document.createElement('div');
        partnerItem.className = 'partner-item';
        partnerItem.textContent = partner.name;
        partnersTrack.appendChild(partnerItem);
    });
    
    // Force a reflow to ensure the animation starts
    partnersTrack.style.animation = 'none';
    partnersTrack.offsetHeight; // Trigger reflow
    partnersTrack.style.animation = 'slide 30s linear infinite';
}

// Utility function to generate random color
function getRandomColor() {
    const colors = [
        '#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6',
        '#1abc9c', '#d35400', '#34495e', '#16a085', '#c0392b'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}