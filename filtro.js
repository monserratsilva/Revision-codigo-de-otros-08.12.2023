const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./img/taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./img/taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./img/bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./img/bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./img/zapato-rojo.jpg"}
  ]


// Tenemos un div contenedor de productos en lugar de un li
const listaProductos = document.getElementById("lista-de-productos");
const inputFiltro = document.getElementById("filtroInput");
const botonDeFiltro = document.getElementById("filtroButton");

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    var titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);

    listaProductos.appendChild(divProducto);
  }
}

displayProductos(productos);

botonDeFiltro.onclick = function() {
  // Se cambió "li" a "listaProductos"
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = inputFiltro.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  for (let i = 0; i < productosFiltrados.length; i++) {
    var divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    var titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productosFiltrados[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    divProducto.appendChild(titulo);
    divProducto.appendChild(imagen);

    listaProductos.appendChild(divProducto);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

// Se corrigieron los nombres de las variables para ser más descriptivos.
// Se añadió un ID al input para facilitar su selección en JavaScript.
// Se cambiaron los nombres de algunas variables y se mejoró la legibilidad del código JavaScript.
// Se corrigió la selección del contenedor de productos en lugar de un elemento li.
// Se añadió un contenedor para mostrar los productos (listaProductos).