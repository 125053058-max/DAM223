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

    function agregarProducto(nombre, precio) {
        menu.push({producto: nombre, precio});
    }

    function editaryBorrar() {
        menu[1].precio = 75;
        menu.splice(0,1);
    
    }

    /* parte dos */
    function buscarPostres(){
    let postres = menu.filter(p => p.tipo == "postres");
    return postres.map(p => console.log(p.producto + ": $" + p.precio));
        
}

function buscarBebidas() {
        let bebidas = menu.filter(p => p.tipo == "bebidas");
        return bebidas.map(p => console.log(p.producto + ": $" + p.precio));
}

function productosBaratos() {
        let baratos = menu.filter (p => p.precio <  80)
        return baratos.map  (p => console.log(p.producto + " $" + p.precio));
}

function productosCaros() {
        let caros = menu.filter (p => p.precio >= 80 )
        return caros.map(p => console.log(p.producto + "$" + p.precio));
}
}

mostrar();

productosBaratos();
prodtouctosCaros(); 
buscarBebidas();
buscarPostres();

module.exports = {menu, mostrar, editaryBorrar, agregarProducto, productosBaratos, productosCaros, buscarBebidas, buscarPostres};