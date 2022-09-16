function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("#menu-toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}

function myFunction() {
    var changeText = document.getElementById("changeMenu");
    if (changeText.innerHTML === "Close") {
        changeText.innerHTML = "Menu";
    } else {
        changeText.innerHTML = "Close";
    }
}

let closeBtn = document.querySelector('#menu-toggle')

let openBtn = document.querySelector('#menu-toggle')

closeBtn.addEventListener('click', function () {
    // document.documentElement.style.overflow = 'scroll';
    // document.documentElement.style.overflowX = 'none';
    console.log("toto")
})

openBtn.addEventListener('click', function () {
    console.log("toto")
})



