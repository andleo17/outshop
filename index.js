class Categoria {
	constructor(id, nombre) {
		this.id = id;
		this.nombre = nombre;
	}
}

class Marca {
	constructor(id, nombre) {
		this.id = id;
		this.nombre = nombre;
	}
}

class Producto {
	constructor(
		id,
		nombre,
		precio,
		marca,
		categoria,
		color,
		valoracion,
		imagen
	) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.marca = marca;
		this.categoria = categoria;
		this.color = color;
		this.valoracion = valoracion;
		this.imagen = imagen;
	}
}

let categorias = [
	new Categoria(0, 'Ropa para mujeres'),
	new Categoria(1, 'Ropa para hombres'),
	new Categoria(2, 'Ropa para niños')
];

let marcas = [
	new Marca(0, 'Newport'),
	new Marca(1, 'Basement'),
	new Marca(2, 'University Club'),
	new Marca(3, 'Christian Lacroix'),
	new Marca(4, 'J.Crew'),
	new Marca(5, 'Billabong'),
	new Marca(6, 'Tommy Hilfiger')
];

let productos = [
	new Producto(
		0,
		'Chompa verde',
		95.99,
		marcas[0],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		1,
		'Chompa verde',
		105.89,
		marcas[1],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		2,
		'Chompa verde',
		95.99,
		marcas[1],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		3,
		'Chompa verde',
		95.99,
		marcas[2],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		4,
		'Chompa verde',
		95.99,
		marcas[3],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		5,
		'Chompa verde',
		95.99,
		marcas[4],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		6,
		'Chompa verde',
		95.99,
		marcas[5],
		categorias[1],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	)
];

function listarMarcas() {
	let $marcas = document.getElementById('marcas');
	let html = '';
	marcas.forEach(m => {
		html += `<a class="dropdown-item" href="#">${m.nombre}</a>`;
	});
	$marcas.innerHTML = html;
}

function listarCategorias() {
	let $categorias = document.getElementById('categorias');
	let html = '';
	categorias.forEach(c => {
		html += `<a class="dropdown-item" href="#">${c.nombre}</a>`;
	});
	$categorias.innerHTML = html;
}

function listarProductos() {
	let $productos = document.getElementById('productos');
	let html = '';
	productos.forEach(p => {
		html += `
		<a id="${p.id}" href="" class="item col-xl-4 col-md-6 col-sm-12 mt-3">
					<div class="card container-fluid">
						<div class="row">
							<div class="col-md-12 col-5">
								<img
									src="${p.imagen}"
									class="card-img-top"
									alt="imagen"
								/>
							</div>
							<div class="col-md-12 col">
								<div class="card-body">
									<h6 class="text-muted">${p.marca.nombre}</h6>
									<h5 class="card-title">${p.nombre}</h5>
									<p
										class="card-text text-danger font-weight-bold"
									>
										S/ ${p.precio}
									</p>
									<div class="rating text-warning">
										${mostrarValoracion(p)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</a>
		`;
	});
	$productos.innerHTML = html;
}

function mostrarValoracion(producto) {
	let html = '';
	for (let i = 0; i < Math.floor(producto.valoracion); i++) {
		html += '<i class="fas fa-star"></i>';
	}
	if (producto.valoracion % 1 != 0) {
		html += '<i class="fas fa-star-half-alt"></i>';
	}
	for (let i = 0; i < 5 - Math.ceil(producto.valoracion); i++) {
		html += '<i class="far fa-star"></i>';
	}
	return html;
}

listarMarcas();
listarCategorias();
listarProductos();
