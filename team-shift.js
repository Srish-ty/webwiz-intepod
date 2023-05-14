let secret=document.getElementById("secret")
document.querySelectorAll(".cards").forEach(n => n.addEventListener("click",()=> {
  secret.classList.toggle("active");
}))