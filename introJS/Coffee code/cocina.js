console.time ("cafeteria");

let menu = [
    {producto: "café", precio: 50},
    {producto: "moka frappuccino", precio: 70},
    {producto: "cheescake", precio: 80}
];

function mostrar() {
    for (let i = 0; i < menu.length; i++) {
        console.log (menu[i].producto + ": $" + menu[i].precio);

    }

    function productosBaratos() {
        let baratos = menu.filter (p => p.precio <=  50)

    }
  


}

function editaryBorrar() {
    menu[1].precio = 75;
    menu.splice(0, 1);

}

mostrar();
editaryBorrar();
console.log("menu actualizado");
mostrar();
console.timeEnd("cafeteria");