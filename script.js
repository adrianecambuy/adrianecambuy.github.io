document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      trackClick("link_click");
    });
  });

});

// 📊 SISTEMA DE RASTREIO
function trackClick(action) {

  let data = JSON.parse(localStorage.getItem("tracking")) || [];

  data.push({
    action: action,
    time: new Date().toISOString()
  });

  localStorage.setItem("tracking", JSON.stringify(data));

  console.log("📊 Clique registrado:", action);
}

// 🔍 VER DADOS (debug)
function getTracking() {
  return JSON.parse(localStorage.getItem("tracking")) || [];
}
