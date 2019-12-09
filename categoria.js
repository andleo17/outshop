let categoria = window.location.search.split('=')[1];

categoria = categorias.find(c => c.id == categoria);

function mostrarCategoria() {
	let $nombreCategoria = document.getElementById('nombre-categoria');
	let $descripcionCategoria = document.getElementById(
		'descripcion-categoria'
	);
	$nombreCategoria.innerText = categoria.nombre;
	$descripcionCategoria.innerText = categoria.descripcion;
}

mostrarCategoria();
productos = productos.filter(p => p.categoria == categoria);
listarProductos(productos);
