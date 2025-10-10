document.addEventListener('DOMContentLoaded', function() {
    // --- Typewriter Effect ---
    const typewriterElement = document.querySelector('.typewriter');
    
    const words = [
        "CSE Junior @ UTArlington.",
        "Software Developer.",
        "Data Enthusiast.",
        "Problem Solver."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typewriterElement) return; 
        
        const currentWord = words[wordIndex];
        const typeSpeed = isDeleting ? 75 : 150;

        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Logic to switch between typing and deleting
        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of the word
            setTimeout(() => { isDeleting = true; }, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        setTimeout(type, typeSpeed);
    }

    // Initialize the effect
    setTimeout(type, 500);

    // smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll('header .nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    

    //feather Icons initialization
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
