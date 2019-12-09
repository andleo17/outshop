let marca = window.location.search.split('=')[1];

marca = marcas.find(c => c.id == marca);

function mostrarmarca() {
	let $imagenMarca = document.getElementById('imagen-marca');
	let $nombremarca = document.getElementById('nombre-marca');
	$nombremarca.innerText = marca.nombre;
	$imagenMarca.innerHTML = `<img src="${marca.foto}" height="150">`;
}

mostrarmarca();
productos = productos.filter(p => p.marca == marca);
listarProductos(productos);
