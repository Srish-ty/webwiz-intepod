var i = 0,j=0,k=0;
var txt1 = 'Reading package lists... Done';
var txt2 = 'Building dependency tree... Done';
var txt3 = 'Reading state information... Done'; 

var speed = 40;

setTimeout(typeWriter1, 1000);
setTimeout(typeWriter2, 2000);
setTimeout(typeWriter3, 3100);
setTimeout(move,3700);
setTimeout(hidetype, 5900);

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("instapro1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }
}
function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("instapro2").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
}

function typeWriter3() {
    if (k < txt3.length) {
      document.getElementById("instapro3").innerHTML += txt3.charAt(k);
      k++;
      setTimeout(typeWriter3, 50);
    }
}

function hidetype(){
    let thisel=document.getElementsByClassName("instcont")[0];
    console.log(thisel);
    thisel.style.display='none';
}


function move() {
  //window.alert('hey');
  var elem = document.getElementById("progBar"); 
  var width = 1;
  var id = setInterval(frame, 5);
  function frame() {
    if (width >= 300) {
      clearInterval(id);
    } else {
      //console.log(width);
      width++; 
      elem.style.width = width + 'px'; 
    }
  }
}