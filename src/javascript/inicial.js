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

const openButton = document.querySelectorAll('.button-02');

openButton.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.showModal();
    });
});

const closeButton = document.querySelectorAll('.close-modal');

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        modal.close();
    });
}); 