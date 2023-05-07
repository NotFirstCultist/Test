let question = 0;

let btnR = document.querySelectorAll('.right');
btnR[question].addEventListener('click', doRight);

console.log(btnR);

function doRight(){
    question += 1;
    btnR[question].addEventListener('click', doRight);
    document.querySelector('.q1').setAttribute('style', '--visibility: hidden')
}