// ==========================
// CURSOR CUSTOM
// ==========================

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// ==========================
// SCROLL FADE IN
// ==========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll('section, .service-card, .step').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";
    observer.observe(el);
});

// ==========================
// FAQ ACCORDION
// ==========================

document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.style.maxHeight = answer.style.maxHeight ? null : "200px";
    });
});

// ==========================
// AUTO SLIDER CONTROL (extra smooth)
// ==========================

let slideIndex = 0;
const slides = document.querySelector('.slides');

setInterval(() => {
    slideIndex++;
    if(slideIndex > 2) slideIndex = 0;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}, 4000);
