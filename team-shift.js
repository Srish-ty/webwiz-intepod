let secret=document.getElementById("secret");
let cd1 = document.getElementsByClassName('team-cards')[0];
document.querySelectorAll(".team-cards").forEach(n => n.addEventListener("click",()=> {
  secret.classList.toggle("active");
  //cd1.style.backgroundColor ='red';
  cd1.classList.toggle("mvLeft");
}))

let secret2=document.getElementById("secret2");
let cd2 = document.getElementsByClassName('team-cards2')[0];
document.querySelectorAll(".team-cards2").forEach(n => n.addEventListener("click",()=> {
  secret2.classList.toggle("active");
  cd2.classList.toggle("mvLeft");
}))

let secret3=document.getElementById("secret3");
let cd3 = document.getElementsByClassName('team-cards3')[0];
document.querySelectorAll(".team-cards3").forEach(n => n.addEventListener("click",()=> {
  secret3.classList.toggle("active");
  cd3.classList.toggle("mvLeft");
}))