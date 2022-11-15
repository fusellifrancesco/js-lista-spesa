let arrayListaSpesa = ["Pane", "Pasta", "Latte", "Uova"];

for (let i = 0; i < arrayListaSpesa.length; i++){

    console.log(
        `
        ---LISTA SPESA CICLO FOR:---
        ${arrayListaSpesa};
        `
    );
}

let i = 0;

while (i < arrayListaSpesa.length){
    
    document.getElementById("lista").innerHTML += "<li>" + arrayListaSpesa[i] + "</li>"
    
    console.log(
        `
        ---LISTA SPESA CICLO WHILE:---
        ${arrayListaSpesa};
        ` 
    )

/*     if (arrayListaSpesa[i] == "Latte"){
        break;
    } */
    
    i++;
}

