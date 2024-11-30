navList = document.querySelector(".navlist")

document.getElementById("menu-icon").addEventListener(
    'click', () => {
        if (navList.style.opacity === "0") {
            navList.style.opacity = "1"
        }
        else {
            navList.style.opacity = "0"
        }
    }
)