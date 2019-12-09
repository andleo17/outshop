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
		'Polos Tommy Hilfiger Edición Limitada',
		69.0,
		marcas[6],
		categorias[1],
		'Azul',
		4.5,
		'https://http2.mlstatic.com/polos-tommy-hilfiger-edicion-limitada-D_NQ_NP_700541-MPE31591773767_072019-O.webp'
	),
	new Producto(
		1,
		'Chompa Polo Tommy Hilfiger Original Nuevo Modelo Ralph',
		85.0,
		marcas[6],
		categorias[1],
		'Negro',
		3,
		'https://http2.mlstatic.com/chompa-polo-tommy-hilfiger-original-nuevo-modelo-ralph-D_NQ_NP_797953-MPE32067817993_092019-F.webp'
	),
	new Producto(
		2,
		'Polos Tommy Hilfiger Importado Mulberry Place Talla S-m',
		100,
		marcas[6],
		categorias[1],
		'Verde',
		1,
		'https://http2.mlstatic.com/polos-tommy-hilfiger-importado-mulberry-place-talla-s-m-D_NQ_NP_969375-MPE31255311796_062019-O.webp'
	),
	new Producto(
		3,
		'Hermoso Polo Tommy Hilfiger 100% Original Importado De Usa',
		120,
		marcas[6],
		categorias[0],
		'Blanco',
		5,
		'https://http2.mlstatic.com/hermoso-polo-tommy-hilfiger-100-original-importado-de-usa-D_NQ_NP_931010-MPE32848755159_112019-F.webp'
	),
	new Producto(
		4,
		'Camisa',
		99,
		marcas[1],
		categorias[1],
		'Azul',
		5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881512501?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		5,
		'Polo',
		95.99,
		marcas[1],
		categorias[1],
		'Verde',
		2.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881661239?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		6,
		'Polo blanco',
		39.9,
		marcas[2],
		categorias[0],
		'Blanco',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881575379?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		7,
		'Polo con decoración',
		29.9,
		marcas[2],
		categorias[0],
		'Blanco',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881664605?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		8,
		'Polo blanco',
		34.9,
		marcas[2],
		categorias[0],
		'Blanco',
		4,
		'https://falabella.scene7.com/is/image/FalabellaPE/881664324?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		9,
		'Vestido negro',
		95.99,
		marcas[3],
		categorias[2],
		'Negro',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881493481?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		10,
		'Enterizo',
		39.9,
		marcas[0],
		categorias[2],
		'Rosa',
		2.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881634945?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		11,
		'Vestido fiesta',
		59.9,
		marcas[6],
		categorias[2],
		'Blanco',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881647417?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		12,
		'Vestido flona',
		69.9,
		marcas[0],
		categorias[2],
		'Negro',
		1,
		'https://falabella.scene7.com/is/image/FalabellaPE/16955022?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		13,
		'Polo gris',
		19.9,
		marcas[1],
		categorias[2],
		'Gris',
		1.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881638270?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		14,
		'Polo básico',
		95.99,
		marcas[5],
		categorias[2],
		'Negro',
		5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881490788?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		15,
		'Camisa con flores',
		49.9,
		marcas[4],
		categorias[2],
		'Roja',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881638930?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		16,
		'Polo universo',
		50.9,
		marcas[3],
		categorias[1],
		'Morado',
		5,
		'https://cdn.shopify.com/s/files/1/2165/0371/products/man_font_f9b672ee-a4b8-4876-aadc-df4711c21e10.png?v=1555562092'
	),
	new Producto(
		17,
		'Polo anime',
		124.9,
		marcas[6],
		categorias[1],
		'Blanco',
		5,
		'https://http2.mlstatic.com/polo-ahegao-D_NQ_NP_802843-MPE33019090291_112019-Q.jpg'
	),
	new Producto(
		18,
		'Polo de Fortnite',
		27.6,
		marcas[4],
		categorias[2],
		'Blanco',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881561526?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		19,
		'Polo degree',
		39.9,
		marcas[4],
		categorias[2],
		'Negro',
		4.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/16981464?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		20,
		'Polo Fortnite',
		27.6,
		marcas[0],
		categorias[2],
		'Morada',
		5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881561529?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		21,
		'Polo verde con flores',
		29.9,
		marcas[4],
		categorias[2],
		'Verde',
		5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881638709?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		22,
		'Camisa negra',
		35.6,
		marcas[3],
		categorias[2],
		'Negra',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881499185?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		23,
		'Polo celeste',
		31.4,
		marcas[4],
		categorias[0],
		'Celeste',
		4,
		'https://falabella.scene7.com/is/image/FalabellaPE/881575654?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		24,
		'Polo gris',
		21.99,
		marcas[3],
		categorias[0],
		'Gris',
		5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881664344?wid=423&hei=423&qlt=70&crop=0,0,0,0'
	),
	new Producto(
		25,
		'Polo blanco',
		37.9,
		marcas[4],
		categorias[0],
		'Blanco',
		3.5,
		'https://falabella.scene7.com/is/image/FalabellaPE/881664328?wid=423&hei=423&qlt=70&crop=0,0,0,0'
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
	if (nombre == ''.toUpperCase) {
		listarProductos(productos);
	} else {
		listarProductos(
			productos.filter(p =>
				p.nombre.toUpperCase().includes(nombre.toUpperCase())
			)
		);
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
