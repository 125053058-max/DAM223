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

    function productosBaratos() {
        let baratos = menu.filter (p => p.precio <=  50)
        console.log("Productos baratos: ");
        for (let i = 0; i < baratos.length; i++) {}
        console.log(baratos[i].producto + " $" + baratos[i].precio);
    }

    function productosCaros() {
        let caros = menu.filter (p => p.precio <= 80 )
        console.log("Productos Caros: ");
        for (let i = 0; i < caros.length; i++) {}
        console.log(caros[i].producto + "$" + baratos[i].precio);

    }

    function buscarBebidas() {
        let bebidas = menu.filter(p => p.tipo == "bebidas");
        console.log("Bebidas:");

        for (let i = 0; i < bebidas.length; i++) {
            console.log(bebidas[i].producto + ": $" + bebidas[i].precio);
        }
    }

    function buscarPostres(){
        let postres = menu.filter(p => p.tipo == "postres");
        console.log("Postres:");

        for (let i = 0; i < postres.length; i++) {}
        console.log(postres[i].producto + ": $" + postres[i].precio);
    }
}

mostrar();

productosBaratos();
prodtouctosCaros(); 
buscarBebidas();
buscarPostres();

module.exports = {menu, mostrar, editaryBorrar, agregarProducto, productosBaratos, productosCaros, buscarBebidas, buscarPostres};