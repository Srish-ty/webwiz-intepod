const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))






const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    
    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", '${x}px'); 
    target.style.setProperty("--mouse-y", '${y}px');
}
for(const card of document.querySelectorAll(".card")){
    card.onmousemove = e => handleOnMouseMove(e);
}

   
