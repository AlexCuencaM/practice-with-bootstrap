let temas = ["TEMA A", "TEMA B", "TEMA C"];
function addEvents() {
    const form = document.getElementById("form-theme");
    const tema = document.getElementById("tema");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        temas.push(tema.value);
        addRow(tema.value)        
        tema.value = ""

    });
}



function contentRow(tema) {
    return `<tr><th><input type="text" name="temas[]" value="${tema}"/></th>
            <th><button class="btn btn-success">Guardar</button></th>
            <th><button class="btn btn-danger" onclick="deleteRow(this)">Borrar</button></th></tr>`;
}
function loadRows() {
    let table = document.getElementById("table-body");
    table.innerHTML = "";
    for(let tema of temas){
        let fila = table.insertRow(-1);
        fila.innerHTML = contentRow(tema);
    }
}
function addRow(tema){
    let table = document.getElementById("table-body");
    let fila = table.insertRow(-1);
    fila.innerHTML = contentRow(tema);
}
function deleteRow(r){    
    const row = r.parentNode.parentNode.rowIndex;		    
	document.getElementById("table-theme").deleteRow(row);
    temas.splice(row - 1,1)
}

addEvents();
loadRows();

function boton_1(){
    const boton = document.getElementById("botoncito");
    boton.addEventListener("click",function(e){
        alert("Hola, si funciono :D");
    })
}

boton_1();