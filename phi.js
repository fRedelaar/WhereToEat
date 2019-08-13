function addAnimation(){
    var timer = 7;
    var header = document.querySelector('.headertext');
    header.classList.add('animation');

    //setTimeOut voert een functie uit na een bepaalde tijd (timer staat nu op 7 seconden)
    setTimeout(removeAnimation, timer*1000);
}

function removeAnimation(){
    var timer = 5;
    var header = document.querySelector('.headertext');
    header.classList.remove('animation');
    setTimeout(addAnimation, timer*1000);
}



//initiele load van animation, kan je op een document.ready() plaatsen als je wil :) anders werkt hij nu altijd op je pagina
addAnimation();