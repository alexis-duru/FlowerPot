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



