var dm= document.getElementsByClassName('dark-mode')[0];
var boole=0;
var sec = document.getElementsByClassName('sec');
var headis = document.getElementsByClassName('head1');
var sbar= document.getElementsByClassName('sidenav')[0];

dm.addEventListener('click',changeMode);

function changeMode(){
    if(boole==0){
        document.body.style.backgroundImage='url("https://webwiznitr.netlify.app/static/media/logo.cd0dd8f3.ico")';
        document.body.style.backgroundColor='azure';
        document.body.style.color='black';
        for(s of sec){s.style.color='rgb(13, 12, 28)';}
        for(h of headis){h.style.color='rgb(13, 12, 28)';}
        sbar.style.backgroundColor='rgb(214, 211, 245)';
        dm.style.color='rgb(156, 132, 227)';
        boole=1;
    }
    else{
        document.body.style.backgroundImage = "url('./images/backgci.jpg')";
        document.body.style.backgroundColor='rgb(13, 12, 28)';
        document.body.style.color='white';
        for(s of sec){s.style.color='white';}
        for(h of headis){h.style.color='#f8f5fa';}
        sbar.style.backgroundColor='rgb(13, 12, 28)';
        dm.style.color='white';
        boole=0;
    }
}