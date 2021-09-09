let count = 0
let value = document.querySelector("#value")
let btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const classes = e.currentTarget.classList
        if (classes.contains("decrease")) {
            count--
        } else if (classes.contains("reset")) {
            count = 0
        } else {
            count++
        }

        if (count < 0) {
            value.style.color = "red"
        } else if (count === 0) {
            value.style.color = "black"
        } else {
            value.style.color = "green"
        }

        value.textContent = count
    })
})