
window.addEventListener("DOMContentLoaded", () => {

    
    const form = document.getElementById("form")
    const notification = document.querySelector(".notification")
    
    const myForm = (e) => {
        const formDate = new FormData(e.target)
        const myIT = {}
        
        for(let [name, value] of formDate){
            myIT[name] = value
        }

        return myIT
    }

    

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let itSave = myForm(e)
        
        if(itSave.numberUser.length != 9) {
            alert("El número móvil debe de tener 9 dígitos")
        } else {
        
            let itlist = JSON.parse(localStorage.getItem("itlist"))
        
            itlist = itlist ? itlist : []

        itlist.push(itSave)
        localStorage.setItem("itlist", JSON.stringify(itlist))
        form.reset()

        notification.classList.add("show")

        setTimeout(() => {
            notification.classList.remove("show")
        }, 3000)
        }
    })
})

    