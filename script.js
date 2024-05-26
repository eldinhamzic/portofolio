document.addEventListener("mousemove", function(event) {
    const background = document.getElementById("background");
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const backgroundX = (mouseX / window.innerWidth) * 100;
    const backgroundY = (mouseY / window.innerHeight) * 100;
    background.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
});