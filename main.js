const producto = {
    marca: "Samsung",
    modelo: "S22",
    precio: 165000,
    stock: 2,
    vendedor: {
        nombre: "MercadoLibre",
        direccion: "Iturraspe 1023",
    },
};

const {
    marca,modelo,precio,
    vendedor: {nombre, direccion},
} = producto;

console.log(marca, modelo, precio, nombre);

producto.stock > 0 ? console.log("Tenemos stock") : console.log("No tenemos stock");
