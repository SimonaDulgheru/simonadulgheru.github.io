const burgerNavBar = document.querySelector(".nav-links");

function navBar() {
    
    if (burgerNavBar.style.display === "block") {
        burgerNavBar.style.display = "none";
    } else {
        burgerNavBar.style.display = "block";
    }
  }
  navBar();