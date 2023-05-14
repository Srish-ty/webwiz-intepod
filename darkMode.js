var dm= document.getElementsByClassName('dark-mode')[0];
var boole=0;
var sec = document.getElementsByClassName('sec');
dm.addEventListener('click',changeMode);

function changeMode(){
    if(boole==0){
        document.body.style.backgroundColor='azure';
        document.body.style.color='night';
        for(s of sec){s.style.color='rgb(13, 12, 28)';}
        dm.style.color='rgb(156, 132, 227)';
        boole=1;
    }
    else{
        document.body.style.backgroundColor='rgb(13, 12, 28)';
        document.body.style.color='white';
        for(s of sec){s.style.color='white';}
        dm.style.color='white';
        boole=0;
    }
}