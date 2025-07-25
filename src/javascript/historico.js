//logica do navigation bar

const menuList = document.querySelector("nav ul")

menuList.addEventListener("click", (event) => {
    const clickedMenuItem = event.target.closest("li");

    if(clickedMenuItem) {
        const activeMenuItem = menuList.querySelector(".active");
        if(activeMenuItem) {
            activeMenuItem.classList.remove("active");
        }

        clickedMenuItem.classList.add("active");
    };
});