let arrayListaSpesa = ["Pane", "Pasta", "Latte", "Uova"];

for (let i = 0; i < arrayListaSpesa.length; i++){

    document.querySelector("li").innerHTML = arrayListaSpesa[i]

    console.log(
        `
        ---LISTA SPESA CICLO FOR:---
        ${arrayListaSpesa};
        `
    );
}

let i = 0;

while (i < arrayListaSpesa.length){
    console.log(
        `
        ---LISTA SPESA CICLO WHILE:---
        ${arrayListaSpesa};
        ` 
    )

    if (i < 4){
        break;
    }

}

