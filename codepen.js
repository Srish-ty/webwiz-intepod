var i = 0,j=0,k=0;
var htpara= 'this is html';
var cspara = '<pre> import matplotlib.pyplot as plt \n def draw_scatterplot(x_values, y_values):\n plt.scatter(x_values, y_values, s=20)\n  plt.title("Scatter Plot")\n    plt.xlabel("x values")\n    plt.ylabel("y values")\n    plt.show()\n    </pre>';

var jspara = 'Reading state information... Done'; 

var speed = 40;

var pytab=document.getElementsByClassName('csstab'); console.log(pytab);
pytab.addEventListener('click',typecss);

function typehtm() {
    if (i < txt1.length) {
      document.getElementById("instapro1").innerText += txt1.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }
  function typecss() {
    window.alert(101);
      if (j < cspara.length) {
        document.getElementById("cssb").innerText += cspara.charAt(j);
        j++;
        setTimeout(typecss, speed);
      }
  }
  
  function typejs() {
      if (k < txt3.length) {
        document.getElementById("instapro3").innerText += txt3.charAt(k);
        k++;
        setTimeout(typeWriter3, 50);
      }
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