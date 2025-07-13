// Arreglo de productos base
const productos = [
  { nombre: "Laptop Lenovo", precio: 1200, descripcion: "Ideal para oficina y estudios." },
  { nombre: "Monitor LG 24''", precio: 300, descripcion: "Alta definición Full HD." },
  { nombre: "Teclado Mecánico RGB", precio: 80, descripcion: "Perfecto para gamers." }
];

// Función para renderizar productos
function renderizarLista() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar contenido anterior

  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: $${producto.precio}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(li);
  });
}

// Función para agregar un nuevo producto
function agregarProducto() {
  const nuevoProducto = {
    nombre: "Producto Nuevo",
    precio: 999,
    descripcion: "Agregado automáticamente desde el botón."
  };
  productos.push(nuevoProducto);
  renderizarLista();
}

// Renderizar al cargar
document.addEventListener("DOMContentLoaded", renderizarLista);
