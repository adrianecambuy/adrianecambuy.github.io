function trackClick(action) {

  let data = JSON.parse(localStorage.getItem("tracking")) || [];

  data.push({
    action: action,
    time: new Date().toISOString()
  });

  localStorage.setItem("tracking", JSON.stringify(data));

  console.log("📊 Click:", action);
}  
