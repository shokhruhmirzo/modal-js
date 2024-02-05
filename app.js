var modal = document.querySelector('.modal');
var body = document.querySelector('body');

function fn(){
    modal.classList.add('modal__js');
    body.style.background = '#00000038';

}
function cs(){
    modal.classList.remove('modal__js')
    body.style.background = 'white';
}

document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Kod ni ko'chirish mumkinmas !!!");
});
