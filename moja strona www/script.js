function mobileMenu() {
    var mobileMenuIcon = document.getElementById("mobile-menu-icon"); // jest przyjęte, że nie używam znaków specjalnych//
    var menu = document.getElementById("main-menu");

    if(mobileMenuIcon) { // funkcja warunkowa //
        mobileMenuIcon.addEventListener("click", function() {
            menu.classList.toggle("opened"); // toggle - rozsunięcie się //
            mobileMenuIcon.classList.toggle("opened");
        }) // funkcja w funkcji w funkcji? //
    }
}

mobileMenu();