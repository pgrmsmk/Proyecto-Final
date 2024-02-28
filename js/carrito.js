const carrito = [];
document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.agregar-al-carrito');
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });

  document.getElementById('verCarrito').addEventListener('click', () => {
    const carritoDeCompras = document.getElementById('carritoDeCompras');
    carritoDeCompras.style.display = 'block';
    actualizarCarrito();
  });
});

function agregarAlCarrito(event) {
  const boton = event.target;
  const itemId = boton.getAttribute('data-id');
  const itemNombre = boton.closest('.libro').querySelector('h4').textContent;
  const itemPrecio = boton.getAttribute('data-precio');

  const nuevoItem = { id: itemId, nombre: itemNombre, precio: itemPrecio };
  carrito.push(nuevoItem);
  alert(`${itemNombre} agregado al carrito.`);
}

function actualizarCarrito() {
  const carritoDeCompras = document.getElementById('carritoDeCompras');
  carritoDeCompras.innerHTML = '';
  carrito.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('carrito-item');
    div.innerHTML = `${item.nombre} - ${item.precio} <button class="eliminar-del-carrito" data-index="${index}">Eliminar</button>`;
    carritoDeCompras.appendChild(div);
  });

  const botonesEliminar = document.querySelectorAll('.eliminar-del-carrito');
  botonesEliminar.forEach(boton => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}

function eliminarDelCarrito(event) {
  const boton = event.target;
  const index = boton.dataset.index;
  carrito.splice(index, 1); 
  actualizarCarrito(); 
}

