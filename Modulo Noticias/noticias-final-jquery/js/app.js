var misNoticias = (function(){

//ENTORNO PRIVADO

var noticias = [];
var noticias2 = [];

var tituloConFormato;
var parrafoConFormato;



function limpiarCampo(){
	$('#my-form').trigger('reset');
}


function agregarNoticia(){

	$("#mostrar-btn").prop('disabled', false);
	
	function Noticia() {
		this.titulo = "";
		this.cuerpo = "";
	}

	var noticia = new Noticia();

	noticia.titulo = $('#titulo').val();
	noticia.cuerpo = $('#cuerpo').val();

	if(noticia.titulo && noticia.cuerpo !== null) {
		noticias.push(noticia);
		noticias2.push(noticia);
		limpiarCampo();
		$("#ordenar-btn").prop('disabled', true);
		return true;
	} else {
		return false;
	}
}

function mostrarNoticia() {
	
	if (noticias2.length > 1) {
		$("#ordenar-btn").prop('disabled', false);
	}

	if (noticias.length > 0) {
		
		for (var i = 0; i < noticias.length; i++) {
			tituloConFormato = document.createElement('h2');
			parrafoConFormato = document.createElement('p');
			tituloConFormato.append(noticias[i].titulo);
			parrafoConFormato.append(noticias[i].cuerpo);
			$('#noticias').append(tituloConFormato);
			$('#noticias').append(parrafoConFormato);
		}
		
		noticias = [];
		return true;
	} else {
		return false;
	}
}


function eliminarNoticia() {

	if(noticias2.length > 0) {
		
		$("#noticias").empty();
		
		noticias2 = [];
		noticias = [];
		return true;
	} else {
		return false;
	}
}

function mostrarOrdenadas() {
	
	$("#mostrar-btn").prop('disabled', true);
	
	if(noticias2.length > 0) {

		$("#noticias").empty();

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
				tituloConFormato.append(noticias2[i].titulo);
				parrafoConFormato.append(noticias2[i].cuerpo);
				$('#noticias').append(tituloConFormato);
				$('#noticias').append(parrafoConFormato);
		}

		$("#ordenar-btn").prop('disabled', true);
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

$('#agregar-btn').click(misNoticias.agregar);
$('#mostrar-btn').click(misNoticias.mostrar);
$('#eliminar-btn').click(misNoticias.eliminar);
$('#ordenar-btn').click(misNoticias.ordenar);