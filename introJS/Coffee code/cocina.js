
/* parte uno */
let menu = [
    {producto: "café", precio: 50},
    {producto: "moka frappuccino", precio: 70},
    {producto: "cheescake", precio: 80}
];

function mostrar() {
    for (let i = 0; i < menu.length; i++) {
        console.log (menu[i].producto + ": $" + menu[i].precio);
    
    }

}
    function agregarProducto(nombre, precio) {
        menu.push({producto: nombre, precio});
    }

    function editarProducto(nombre, nuevoPrecio) {
        let producto = menu.find(p => p.producto == nombre);

        if (producto) {
            producto.precio = nuevoPrecio;
        }

    }

    function borrarProducto(nombre) {
        let posicion = menu.findIndex(p => p.producto == nombre);

        if(posicion != -1) {
            menu.splice(posicion, 1);
        }
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


        /* Parte tres */

function prepararCafe(estado) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {

    if (estado == "correcto") {
                 resolve ({ nombre: nombre, precio, mensaje: "Cafe preparado correctamente"});
} else {
         reject("No se logró preparar el café");
}
        }, 3000);

    });

}
}

function errorCocina(estado) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {

            if (estado == "error") {
                reject("Error en cocina");
            } else {
                resolve("No hubo errores en cocina");

            }

            }, 3000);
        });
      }

      function faltaIngrediente(estado) {

        return new Promise(function(resolve, reject) {
            setTimeout(function() {

                if (estado == "ingrediente") {
                    reject("Falta un ingrediente para poder preparar el café");
                    
                    } else {
                        resolve("Ingredientes disponibles");
                    }
                }, 300);
            });
        }
      

    
    



module.exports = {menu, mostrar, editarProducto, agregarProducto, borrarProducto, productosBaratos, productosCaros, buscarBebidas, buscarPostres, prepararCafe, errorCocina, faltaIngrediente};