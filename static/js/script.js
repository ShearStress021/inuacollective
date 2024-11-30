navList = document.querySelector(".navlist")

document.getElementById("menu-icon").addEventListener(
    'click', () => {
        if (navList.style.display === "none") {
            navList.style.display = "flex"
        }
        else {
            navList.style.display = "none"
        }
    }
)