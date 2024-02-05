var section = document.querySelector('section'),
    overlay = document.querySelector('.overlay'),
    openBtn = document.querySelector('.show-modal'),
    closeBtn = document.querySelector('.close-btn');
    closeX = document.querySelector('.close-x')

    openBtn.addEventListener("click", () => section.classList.add("active"));
    closeX.addEventListener('click', () => section.classList.remove("active"));
    overlay.addEventListener('click' , () => section.classList.remove("active"));
    closeBtn.addEventListener("click", () => section.classList.remove("active"));

// document.addEventListener('contextmenu', function (p) {
//     p.preventDefault();
//     alert("Kod ni ko'chirish mumkinmas !!!");
// });

