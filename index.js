class Categoria {
	constructor(id, nombre, descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
	}
}

class Marca {
	constructor(id, nombre, foto) {
		this.id = id;
		this.nombre = nombre;
		this.foto = foto;
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

let carrito = [];

if (localStorage.getItem('carrito') != null) {
	carrito = JSON.parse(localStorage.getItem('carrito'));
}

let categorias = [
	new Categoria(
		0,
		'Ropa para mujeres',
		'En Outshop encontrarás la mejor moda para mujeres. Lúcete con nuestra increíble variedad de ropa.'
	),
	new Categoria(
		1,
		'Ropa para hombres',
		'Encuentra lo mejor en ropa para hombres en OutShop. Demuestra que tienes buen gusto adquiriendo algo de nuestro catálogo.'
	),
	new Categoria(
		2,
		'Ropa para niños',
		'Regala por esta navidad ropa para tu hijo. Para qué comprarle juguetes a tu hijo si puedes comprarle ropa. Aquí en OutShop te ofrecemos una gran variedad de ropa para niños.'
	)
];

let marcas = [
	new Marca(
		0,
		'Vans',
		'https://i.pinimg.com/originals/1a/4e/3a/1a4e3a121b8883ffea739c8b4704bb7b.jpg'
	),
	new Marca(
		1,
		'Basement',
		'https://pack-arte.com.ar/wp-content/uploads/2018/02/basement-logo-2.jpg'
	),
	new Marca(
		2,
		'University Club',
		'https://m.universidadperu.com/imgmarca/2006-296672.gif'
	),
	new Marca(
		3,
		'Christian Lacroix',
		'https://www.moooicarpets.com/wp-content/uploads/2015/04/ChristianLacroix.jpg'
	),
	new Marca(
		4,
		'J.Crew',
		'https://www.littlerock.com/images/default-source/destinations/shopping-images/j-crew-logo-560x400.tmb-detailitem.jpg?sfvrsn=233e8db6_1'
	),
	new Marca(
		5,
		'Billabong',
		'https://upload.wikimedia.org/wikipedia/commons/a/a2/BBG_Logo_Wave_Icon.jpg'
	),
	new Marca(
		6,
		'Tommy Hilfiger',
		'https://logosmarcas.com/wp-content/uploads/2018/03/Tommy-Hilfiger-logo.png'
	)
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
		'Chompa Roja',
		105.89,
		marcas[1],
		categorias[0],
		'Verde',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881469618?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		2,
		'Chompa Morada',
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
		categorias[0],
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
		html += `<a class="dropdown-item" href="marca.html?id=${m.id}">${m.nombre}</a>`;
	});
	$marcas.innerHTML = html;
}

function listarCategorias() {
	let $categorias = document.getElementById('categorias');
	let html = '';
	categorias.forEach(c => {
		html += `<a class="dropdown-item" href="categoria.html?id=${c.id}">${c.nombre}</a>`;
	});
	$categorias.innerHTML = html;
}

function listarProductos(lista) {
	let $productos = document.getElementById('productos');
	let html = '';
	lista.forEach(p => {
		html += `
		<div class="item col-xl-4 col-md-6 col-sm-12 mt-3" data-toggle="modal" data-target="#detalle" onclick="mostrarDetalles(${
			p.id
		})">
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
				</div>
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

function buscarProductos(nombre) {
	if (nombre == '') {
		listarProductos(productos);
	} else {
		listarProductos(productos.filter(p => p.nombre.includes(nombre)));
	}
}

function mostrarDetalles(id) {
	let producto = productos.find(p => p.id == id);
	let $detalleTitulo = document.getElementById('detalleTitulo');
	$detalleTitulo.innerText = producto.nombre;
	let $detalleCuerpo = document.getElementById('detalleCuerpo');
	html = `<img class="card-img-top" src="${producto.imagen}" alt="imagen"/>
			<div class="mt-3 d-flex flex-column">
				<span><b>Nombre: </b>${producto.nombre}</span>
				<span><b>Marca: </b>${producto.marca.nombre}</span>
				<span><b>Categoría: </b>${producto.categoria.nombre}</span>
				<span><b>Color: </b>${producto.color}</span>
				<span><b>Precio: </b>S/ ${producto.precio}</span>
			</div>`;
	$detalleCuerpo.innerHTML = html;
	let $btnAgregarCarrito = document.getElementById('btnAgregarCarrito');
	$btnAgregarCarrito.setAttribute('data-id', id);
	let $btnEliminarCarrito = document.getElementById('btnEliminarCarrito');
	$btnEliminarCarrito.setAttribute('data-id', id);
	if (carrito.findIndex(p => p.id == id) == -1) {
		mostrar('btnAgregarCarrito');
		ocultar('btnEliminarCarrito');
	} else {
		ocultar('btnAgregarCarrito');
		mostrar('btnEliminarCarrito');
	}
}

function agregarCarrito(id) {
	let producto = productos.find(p => p.id == id);
	carrito.push(producto);
	$('#detalle').modal('hide');
	actualizarCarrito();
}

function eliminarCarrito(id) {
	carrito.splice(
		carrito.findIndex(p => p.id == id),
		1
	);
	$('#detalle').modal('hide');
	actualizarCarrito();
}

function mostrar(elemento) {
	document.getElementById(elemento).classList.remove('d-none');
}

function ocultar(elemento) {
	document.getElementById(elemento).classList.add('d-none');
}

function actualizarCarrito() {
	localStorage.setItem('carrito', JSON.stringify(carrito));
	mostrarCarrito();
}

function limpiarCarrito() {
	carrito = [];
	actualizarCarrito();
}

function mostrarCarrito() {
	document.getElementById('cantidad').innerText = carrito.length;
	let $confirmacionCuerpo = document.getElementById('confirmacionCuerpo');
	let html = '';
	carrito.forEach(p => {
		html += `
			<tr>
				<td>${p.nombre}</td>
				<td>${p.precio}</td>
			</tr>
		`;
	});
	let total = 0;
	if (carrito.length == 1) {
		total = carrito[0].precio;
	} else if (carrito.length > 1) {
		total = carrito.reduce((p1, p2) => p1.precio + p2.precio);
	}
	html += `
		<tr>
			<th>Total</th>
			<td>${total}</td>
		</tr>
	`;
	$confirmacionCuerpo.innerHTML = html;
}

document.getElementById('btnAgregarCarrito').onclick = evt =>
	agregarCarrito(evt.target.dataset.id);

document.getElementById('btnEliminarCarrito').onclick = evt =>
	eliminarCarrito(evt.target.dataset.id);

document.getElementById('txtBuscar').oninput = evt => {
	buscarProductos(document.getElementById('txtBuscar').value);
};

listarMarcas();
listarCategorias();
listarProductos(productos);
mostrarCarrito();
