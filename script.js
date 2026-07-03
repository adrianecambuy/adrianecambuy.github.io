function trackClick(action) {
  try {
    // pega dados existentes
    let data = JSON.parse(localStorage.getItem("tracking")) || [];

    // garante limite (evita travar navegador)
    if (data.length > 100) {
      data = data.slice(-100);
    }

    // evento estruturado (padrão profissional)
    const event = {
      action: action,
      page: window.location.pathname,
      time: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    data.push(event);

    localStorage.setItem("tracking", JSON.stringify(data));

    console.log("📊 Event tracked:", event);

  } catch (error) {
    console.error("Tracking error:", error);
  }
}
