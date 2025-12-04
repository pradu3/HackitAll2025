/**
 * HackITAll 2025 - Provocarea Rotables
 * Main JavaScript file for navigation and UI interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== Smooth Scrolling for Navigation Links =====
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Active Navigation State on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const topNavLinks = document.querySelectorAll('.nav-link');
    const floatingNavItems = document.querySelectorAll('.floating-nav-item');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Update top navigation
                topNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });

                // Update floating navigation
                floatingNavItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-section') === sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // ===== Floating Navigation Visibility =====
    const floatingNav = document.getElementById('floatingNav');

    function updateFloatingNavVisibility() {
        if (window.scrollY > 300) {
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', updateFloatingNavVisibility);
    updateFloatingNavVisibility(); // Initial call

    // ===== Header Scroll Effect =====
    const header = document.querySelector('.sap-header');
    const nav = document.querySelector('.sap-nav');

    function updateHeaderOnScroll() {
        if (window.scrollY > 50) {
            if (header) header.classList.add('scrolled');
            if (nav) nav.classList.add('scrolled');
        } else {
            if (header) header.classList.remove('scrolled');
            if (nav) nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeaderOnScroll);
    updateHeaderOnScroll(); // Initial call
});
