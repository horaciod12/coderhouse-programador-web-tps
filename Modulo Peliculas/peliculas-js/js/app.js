var misPeliculas = (function() {

//ENTORNO PRIVADO
var catalogo = [];

var btnAgregar = document.getElementById('agregar-btn');
btnAgregar.onclick = agregar;

var btnEliminar = document.getElementById('eliminar-btn');
btnEliminar.onclick = eliminar;

var btnOrdenar = document.getElementById('ordenar-btn');
btnOrdenar.onclick = ordenar;



	function limpiarCampo() {
		var form = document.getElementById('my-form');
		var nombre = document.getElementById('nombre');
		form.reset();
		nombre.focus();
	}

	

	
	function agregar() {
		
		var container = document.getElementById('peliculas');

		var nombre = document.getElementById('nombre').value.trim();
		var nombre = nombre.toLowerCase();
		

		if(nombre.length > 0) {

			if(duplicados(nombre) === true) {
				alert('La película ya existe');
				limpiarCampo();
			} else {
				catalogo.push(nombre);
				
				var list = document.createElement('li');
				var input = document.createElement('input');
				var label = document.createElement('span');

				input.type = 'checkbox';
				input.className = 'box';
				input.addEventListener('click', onCheck);

				label.textContent = nombre.charAt(0).toUpperCase() + nombre.substring(1).toLowerCase();
		
				container.appendChild(list);
				list.appendChild(input);
				list.appendChild(label);

				limpiarCampo();
			}
			
		
		} else {
			alert('Debe ingresar un nombre');
			limpiarCampo();
		}

	}

	function duplicados(nombre) {
		for (var i = 0; i < catalogo.length; i++) {
			if (catalogo[i] == nombre) {
				return true;
			} 
		}
	}




	var onCheck = function(event) {
		var chequear = event.target;
		if(chequear.checked) {
			chequear.setAttribute('checked', 'checked');
		} else {
			chequear.removeAttribute('checked');
		}
	}




	function eliminar() {

		var element = document.getElementById("peliculas");
		
		while (element.firstChild) {
		  element.removeChild(element.firstChild);
		}

		catalogo = [];
		limpiarCampo();

	}

	


	function ordenar() {
		
		var element = document.getElementById("peliculas");
		
		while (element.firstChild) {
		  element.removeChild(element.firstChild);
		}


		catalogo.sort(function(nombre1, nombre2) {
	      var nameA = nombre1.toUpperCase();
	      var nameB = nombre2.toUpperCase();
	      if (nameA < nameB) {
	        return -1;
	      }
	      if (nameA > nameB) {
	        return 1;
	      }
	      return 0;
	    });


		
		for (var i = 0; i < catalogo.length; i++) {
			
			var list = document.createElement('li');
			var input = document.createElement('input');
			var label = document.createElement('span');

			input.type = 'checkbox';
			input.className = 'box';
			input.addEventListener('click', onCheck);
			

			label.textContent = catalogo[i].charAt(0).toUpperCase() + catalogo[i].substring(1).toLowerCase();

			element.appendChild(list);
			list.appendChild(input);
			list.appendChild(label);
			
		}

		limpiarCampo();

	}



	



})();

// VARIABLES GLOBALES
