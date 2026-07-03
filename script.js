document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Scroll suave para links do menu
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  // 🔹 Animação simples ao rolar (fade-in leve)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  const elements = document.querySelectorAll(".card, .video-box, .section h2");

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});
