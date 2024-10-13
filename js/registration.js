window.addEventListener("DOMContentLoaded", () => {

    const table = document.querySelector(".tableBody")
    const divtable = document.querySelector(".tablaRegistros")
    
    
    function loadIts() {
        let its = JSON.parse(localStorage.getItem("itlist"))
        const checkit = its ? its : []
        table.innerHTML = ""
    
    if(checkit.length > 0){

        checkit.forEach((element, index) => {

            table.innerHTML += `
            <tr>
                <td>${element.userName}</td>
                <td>${element.numberUser}</td>
                <td>${element.emailUser}</td>
                <td>${element.direccionUser}</td>
                <td>${element.typeConnection}</td>
                <td>${element.proveedor}</td>
                <td>${element.typeIT}</td>
                <td>${element.dateIncident}</td>
                <td>${element.periocidad}</td>
                <td>${element.descriptionIT}</td>
                <td>
                <button class="btnDelete"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg></button>
            </td>
            </tr>
            `
            const deletebtn = document.querySelectorAll(".btnDelete")
            deletebtn.forEach(myBtn => {
                myBtn.onclick = () => deleteIt(index, checkit)
            })
        });

    } else {
        divtable.innerHTML += `
        <tr>
            <td>
                <h2>No hay Incidencias registradas</h2>
            </td>
        </tr>`
    }
    }

    function deleteIt(index, checkit) {
        checkit.splice(index, 1)
        localStorage.setItem("itlist", JSON.stringify(checkit))
        loadIts()
    }

    loadIts()

})