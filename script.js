document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active-mobile');
        mobileMenuBtn.classList.toggle('open');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active-mobile');
            mobileMenuBtn.classList.remove('open');
        });
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handling
    const form = document.getElementById('hacker-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                track: document.getElementById('track').value
            };

            // Show success message (placeholder logic)
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = 'Application Sent!';
            submitBtn.style.background = '#00b894';
            submitBtn.disabled = true;

            console.log('Form Submitted:', formData);

            setTimeout(() => {
                form.reset();
                submitBtn.innerText = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        });
    }

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .track-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
});

// Update active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        item.classList.remove('active');
        if (itemPath === currentPath) {
            item.classList.add('active');
        }
    });
});
