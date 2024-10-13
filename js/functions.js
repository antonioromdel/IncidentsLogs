window.addEventListener("DOMContentLoaded", () => {
    const btnToogle = document.querySelector(".btnToogle")
    const body = document.getElementById("body")

    function loadTheme() {
        
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            body.classList.add(savedTheme)
        }
        btnToogle.textContent = savedTheme === "temaOscuro" ? "Modo claro" : "Modo Oscuro"
    }

    loadTheme()
    
    btnToogle.addEventListener("click", () => {
        body.classList.toggle("temaOscuro")
        console.log("Hola")

        if(body.classList.contains("temaOscuro")){
            btnToogle.textContent = "Modo Claro"
            localStorage.setItem("theme", "temaOscuro")
        } else {
            btnToogle.textContent = "Modo Oscuro"
            localStorage.setItem("theme", "temaClaro")
        }

        const saved = localStorage.getItem("theme")
        console.log(saved)

    })
})