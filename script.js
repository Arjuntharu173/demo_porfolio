var typed = new Typed(".text",{
    strings:["Frontend Developer", "Python Developer", "Django Frameworke","Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.home-img2');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 10% of the element is visible
    );

    images.forEach(img => observer.observe(img));
});