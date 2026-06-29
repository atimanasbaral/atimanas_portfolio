// Portfolio Website JavaScript - Formula 1 Inspired Theme

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initBlueprintViewer();
    initSkillsAnimation();
    initContactForm();
    initSmoothScroll();
    initParallaxEffects();
    initMicroInteractions();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Highlight current section on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for skill bars
                if (entry.target.classList.contains('skill-progress')) {
                    const progress = entry.target.getAttribute('data-progress');
                    setTimeout(() => {
                        entry.target.style.width = progress + '%';
                    }, 200);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.telemetry-card, .project-card, .skill-category, .feature-card, .profile-card, .fade-in, .slide-in-left, .slide-in-right, .scale-in, .skill-progress');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Stagger animation for cards
    const cards = document.querySelectorAll('.telemetry-card, .project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Blueprint viewer functionality
function initBlueprintViewer() {
    const unitButtons = document.querySelectorAll('.unit-btn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Unit toggle functionality
    unitButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            unitButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const unit = this.getAttribute('data-unit');
            updateBlueprintUnits(unit);
        });
    });
    
    // Tab functionality
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active button
            tabButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabName}-content`) {
                    content.classList.add('active');
                }
            });
            
            // Update blueprint view
            updateBlueprintView(tabName);
        });
    });
    
    // Interactive blueprint hover effects
    const blueprintSvg = document.querySelector('.blueprint-svg');
    if (blueprintSvg) {
        const svgElements = blueprintSvg.querySelectorAll('rect, circle, path, line');
        
        svgElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.stroke = '#FF1801';
                this.style.strokeWidth = '3';
                this.style.transition = 'all 0.3s ease';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.stroke = '';
                this.style.strokeWidth = '';
            });
        });
    }
}

// Update blueprint units
function updateBlueprintUnits(unit) {
    const dimensionValues = document.querySelectorAll('.dim-value');
    const annotations = document.querySelectorAll('.annotation-text');
    
    if (unit === 'inches') {
        // Convert to inches (1mm = 0.03937 inches)
        dimensionValues.forEach(value => {
            const mmValue = parseFloat(value.textContent);
            if (!isNaN(mmValue)) {
                value.textContent = (mmValue * 0.03937).toFixed(1) + 'in';
            }
        });
        
        annotations.forEach(annotation => {
            const text = annotation.textContent;
            if (text.includes('mm')) {
                const mmValue = parseFloat(text.match(/\d+/)[0]);
                annotation.textContent = text.replace(/\d+mm/, (mmValue * 0.03937).toFixed(1) + 'in');
            }
        });
    } else {
        // Reset to mm
        dimensionValues.forEach(value => {
            const text = value.textContent;
            if (text.includes('in')) {
                const inValue = parseFloat(text);
                value.textContent = Math.round(inValue / 0.03937) + 'mm';
            }
        });
        
        annotations.forEach(annotation => {
            const text = annotation.textContent;
            if (text.includes('in')) {
                const inValue = parseFloat(text.match(/[\d.]+/)[0]);
                annotation.textContent = text.replace(/[\d.]+in/, Math.round(inValue / 0.03937) + 'mm');
            }
        });
    }
}

// Update blueprint view based on selected tab
function updateBlueprintView(tabName) {
    const blueprintSvg = document.querySelector('.blueprint-svg');
    if (!blueprintSvg) return;
    
    // Add different highlight effects based on tab
    const views = blueprintSvg.querySelectorAll('.view-top, .view-side, .view-front');
    views.forEach(view => {
        view.style.opacity = '0.3';
        view.style.transition = 'opacity 0.5s ease';
    });
    
    // Highlight relevant parts based on tab
    switch(tabName) {
        case 'dimensions':
            blueprintSvg.querySelector('.view-top').style.opacity = '1';
            break;
        case 'aerodynamics':
            blueprintSvg.querySelector('.view-side').style.opacity = '1';
            break;
        case 'chassis':
            blueprintSvg.querySelectorAll('.view-top, .view-side').forEach(v => v.style.opacity = '1');
            break;
        default:
            views.forEach(view => view.style.opacity = '1');
    }
}

// Skills animation
function initSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Smooth scrolling
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    const heroBg = document.querySelector('.hero-bg');
    const f1Car = document.querySelector('.f1-car');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (f1Car && scrolled < window.innerHeight) {
            f1Car.style.transform = `translateX(${-scrolled * 0.3}px) rotateY(${scrolled * 0.1}deg)`;
        }
    });
}

// Micro-interactions
function initMicroInteractions() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function() {
            this.style.transform = 'translateY(0)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.telemetry-card, .project-card, .skill-category, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon, .social-link');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
    
    // Project card special effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const visual = card.querySelector('.project-visual');
        
        card.addEventListener('mouseenter', function() {
            if (visual) {
                visual.style.background = 'linear-gradient(135deg, #FF1801 0%, #FF6B6B 50%, #15151E 100%)';
                visual.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (visual) {
                visual.style.background = 'linear-gradient(135deg, #FF1801 0%, #FF6B6B 100%)';
                visual.style.transform = 'scale(1)';
            }
        });
    });
    
    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations and effects
}, 10));

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or notifications
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }
    
    // Arrow key navigation for blueprint tabs
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeTab = document.querySelector('.tab-btn.active');
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = tabs.indexOf(activeTab);
        
        let newIndex;
        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
            newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        tabs[newIndex].click();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console Easter egg
console.log('%c ENGINEERED TO WIN ', 'background: #FF1801; color: white; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px;');
console.log('%c ATIMANAS BARAL - Portfolio Website', 'background: #15151E; color: white; font-size: 14px; padding: 5px; border-radius: 3px;');
