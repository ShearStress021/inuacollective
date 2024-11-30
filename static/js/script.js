navList = document.querySelector(".navlist")

document.getElementById("menu-icon").addEventListener(
    'click', () => {
        if (navList.style.right === "-100%") {
            navList.style.right = 0
        }
        else {
            navList.style.right = "-100%"
        }
    }
)