function navBar() {
    const burgerNavBar = document.querySelector(".nav-links");
    if (burgerNavBar.style.display === "block") {
        burgerNavBar.style.display = "none";
    } else {
        burgerNavBar.style.display = "block";
    }
  }