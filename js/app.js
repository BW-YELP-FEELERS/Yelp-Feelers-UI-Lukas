const getNavYBar = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".navul");

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}


getNavYBar();