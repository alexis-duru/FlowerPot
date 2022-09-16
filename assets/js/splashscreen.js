const firstVisit = localStorage.getItem('firstVisit');
const splashscreen = document.querySelector('.intro');

if(firstVisit === null) {
    localStorage.setItem('firstVisit', 'true');
    splashscreen.classList.remove('mask');
} else {
    localStorage.setItem('firstVisit', 'false');
    splashscreen.classList.add('mask');
}


window.addEventListener('DOMContentLoaded', () => {

    let intro = document.querySelector('.intro');
    let logoSpan = document.querySelectorAll('.logo');

    setTimeout(() => {

        logoSpan.forEach((span, idx) =>{

            setTimeout(() => {
                span.classList.add('active');
            }, (idx +1) * 400)
        });

        setTimeout(() => {

            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })

        },2000)

        setTimeout(() =>{
            intro.style.top = '-100vh';
        },2300)
    })
},)