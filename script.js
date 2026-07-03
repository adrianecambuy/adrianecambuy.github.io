// Scroll reveal suave
const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
window.scrollTo({
top: target.offsetTop - 80,
behavior: "smooth"
});
}
});
});
