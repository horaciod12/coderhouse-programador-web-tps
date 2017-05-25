var misNoticias = (function(){

//ENTORNO PRIVADO

var noticias = [];
var noticias2 = [];
var containerNoticias;
var tituloConFormato;
var parrafoConFormato;

function limpiarCampo(){
	var form = document.getElementById("my-form");
	form.reset();
}

function agregarNoticia(){

	document.getElementById("mostrar-btn").disabled = false;
	
	function Noticia() {
		this.titulo = "";
		this.cuerpo = "";
	}

	var noticia = new Noticia();

	noticia.titulo = document.getElementById('titulo').value;
	noticia.cuerpo = document.getElementById('cuerpo').value;

	if(noticia.titulo && noticia.cuerpo !== null) {
		noticias.push(noticia);
		noticias2.push(noticia);
		limpiarCampo();
		document.getElementById("ordenar-btn").disabled = true;
		return true;
	} else {
		return false;
	}
}

function mostrarNoticia() {
	
	if (noticias2.length > 1) {
		document.getElementById("ordenar-btn").disabled = false;
	}

	if (noticias.length > 0) {
		containerNoticias = document.getElementById('noticias');

		for (var i = 0; i < noticias.length; i++) {
			tituloConFormato = document.createElement('h2');
			parrafoConFormato = document.createElement('p');
			tituloConFormato.innerHTML = noticias[i].titulo;
			parrafoConFormato.innerHTML = noticias[i].cuerpo;
			containerNoticias.appendChild(tituloConFormato);
			containerNoticias.appendChild(parrafoConFormato);
		}
		
		noticias = [];
		return true;
	} else {
		return false;
	}
}


function eliminarNoticia() {

	if(noticias2.length > 0) {
		
		var element = document.getElementById("noticias");
		while (element.firstChild) {
		  element.removeChild(element.firstChild);
		}

		noticias2 = [];
		noticias = [];
		return true;
	} else {
		return false;
	}
}

function mostrarOrdenadas() {
	
	document.getElementById("mostrar-btn").disabled = true;
	
	if(noticias2.length > 0) {

		var element = document.getElementById("noticias");
		while (element.firstChild) {
		  element.removeChild(element.firstChild);
		}

		noticias2.sort(function(a, b) {
	      var nameA = a.titulo.toUpperCase();
	      var nameB = b.titulo.toUpperCase();
	      if (nameA < nameB) {
	        return -1;
	      }
	      if (nameA > nameB) {
	        return 1;
	      }
	      return 0;
	    });
	
		for (var i = 0; i < noticias2.length; i++) {
				tituloConFormato = document.createElement('h2');
				parrafoConFormato = document.createElement('p');
				tituloConFormato.innerHTML = noticias2[i].titulo;
				parrafoConFormato.innerHTML = noticias2[i].cuerpo;
				containerNoticias.appendChild(tituloConFormato);
				containerNoticias.appendChild(parrafoConFormato);
		}

		document.getElementById("ordenar-btn").disabled = true;
		return true;

	} else {
		return false;
	}
}


//ENTORNO PUBLICO

	return {
		agregar: function() {
			if (agregarNoticia()) {
				console.log('Se ha ingresado correctamente la noticia');
			} else {
				alert('No se ha ingresado ninguna noticia nueva');
			}
		},
		mostrar: function(){
			if (mostrarNoticia()) {
				console.log('Cargando noticias en la página....');
			} else {
				alert('Debe agregar al menos una noticia nueva');
			}
		},
		eliminar: function(){
			if (eliminarNoticia()) {
				console.log('Se han eliminado las noticias....');
			} else {
				alert('No hay noticias para eliminar');
			}
		},
		ordenar: function(){
			if (mostrarOrdenadas()) {
				console.log('Se han ordenado las noticias');
			} else {
				alert('No hay nuevas noticias para ordenar');
			}
		}
	};

})();

// Variables globales
var btnAdd = document.getElementById('agregar-btn');
btnAdd.onclick = misNoticias.agregar;

var btnShow = document.getElementById('mostrar-btn');
btnShow.onclick = misNoticias.mostrar;

var btnDelete = document.getElementById('eliminar-btn');
btnDelete.onclick = misNoticias.eliminar;

var btnSort = document.getElementById('ordenar-btn');
btnSort.onclick = misNoticias.ordenar;