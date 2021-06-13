function toggleNavBar() {
    let navButton = document.getElementById("hamburgerIcon2"); 

    if (navButton.className == "fa fa-bars menu-toggle") {
        navButton.className = "fa fa-close"; 
    }
    else if (navButton.className == "fa fa-close") {
        navButton.className = "fa fa-bars menu-toggle"; 
    }
}   