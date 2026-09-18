/* Menú */const menu =[
    {producto: "café", precio: 50},
    {producto: "moka frappuccino", precio: 70},
    {producto: "cheescake", precio: 80}
];

/* Listar producto */
console.log("lista de productos: ");
for (let i=0; i<menu.length; i++){
    console.log(menu[i].producto + " $" + menu[i].precio);

}

/* editar producto */
let productoEditar = menu.find ((item) => item.producto === "frappuccino");
if (productoEditar) {
    productoEditar.precio = 120;
    console.log("Producto editado:");
    console.log(`- ${productoEditar.producto}: $${productoEditar.precio}`)

}

/* Eliminar prodcuto */

function eliminarProducto(producto) {
    const index = menu.findIndex((item) => item.producto === producto);
    if (index !== -1) {
        menu.splice(index, 1);
        console.log(`Producto eliminado: ${producto}`);
    }
}
