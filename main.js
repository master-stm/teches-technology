import { companyLogos } from './company-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the people section
    initPeopleSection();
    
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
});

function initPeopleSection() {
    const peopleGrid = document.getElementById('people-grid');
    
    if (!peopleGrid) return; // Skip if not on a page with people grid
    
    // Display leadership, board, and founding members on main page (up to 15)
    const leadershipTeam = people.filter(person => 
        person.category === 'leadership' || 
        person.category === 'board' || 
        person.category === 'founding').slice(0, 15);
    
    // Generate HTML for each person
    leadershipTeam.forEach(person => {
        const personCard = document.createElement('a');
        personCard.className = 'person-card';
        personCard.dataset.category = person.category;
        personCard.href = `pages/member.html?id=${encodeURIComponent(person.name)}`;
        
        // Generate random color for the avatar background if no image is provided
        const randomColor = getRandomColor();
        
        personCard.innerHTML = `
            <div class="person-image" style="background-color: ${randomColor}">
                <svg width="80" height="80" viewBox="0 0 24 24">
                    <path fill="white" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
            </div>
            <div class="person-info">
                <h3 class="person-name">${person.name}</h3>
                <p class="person-role">${person.role}</p>
                <p class="person-bio">${person.bio}</p>
                <div class="person-social">
                    ${person.linkedin ? `<a href="${person.linkedin}" class="social-icon" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                    </a>` : ''}
                    ${person.github ? `<a href="${person.github}" class="social-icon" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </a>` : ''}
                    ${person.twitter ? `<a href="${person.twitter}" class="social-icon" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                        </svg>
                    </a>` : ''}
                </div>
            </div>
        `;
        
        peopleGrid.appendChild(personCard);
    });
    
    // Add "View All Members" button
    const viewAllBtn = document.createElement('a');
    viewAllBtn.href = 'pages/members.html';
    viewAllBtn.className = 'cta-button';
    viewAllBtn.style.marginTop = '2rem';
    viewAllBtn.style.display = 'inline-block';
    viewAllBtn.textContent = 'View All Members';
    
    const peopleSection = document.querySelector('.people-section');
    if (peopleSection) {
        peopleSection.appendChild(viewAllBtn);
    }
}

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

// Utility function to generate random color
function getRandomColor() {
    const colors = [
        '#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6',
        '#1abc9c', '#d35400', '#34495e', '#16a085', '#c0392b'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}