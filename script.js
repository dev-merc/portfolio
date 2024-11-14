// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show button when scrolling down
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Detect when sections are in view
const sections = document.querySelectorAll('section');

function checkSectionInView() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= windowHeight * 0.8) {  // 80% of the viewport height
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkSectionInView);
window.addEventListener('load', checkSectionInView);  // Check on page load
