var contadorContactos = 0;
/*funcion donde se cargan los eventos y las funciones*/
var cargarPagina = function(){
	/*inicializacion de modal*/
	$('.modal').modal();
	/*funcionalidad barra mobile*/
	$(".button-collapse").sideNav();
	/*agregar nuevo contacto*/
	$("#form-contact").submit(agregarContacto);
	/*validar contacto*/
	$("#icon_prefix").keyup(validarContacto);
	/*validadar numero de contacto*/
	$("#icon_telephone").keyup(validarContacto);
};
/*funcion para agregar nuevo contacto*/
var agregarContacto = function (e){
	e.preventDefault();
	var $listaContactos = $("#contact-list");/*espacio vacio donde pondremos los contactos*/
	var $nombreContacto = $("#icon_prefix").val();/*valor de entrada del input nombre*/
	var $telefonoContacto = $("#icon_telephone").val();/*valor de entrada input numero*/
	var $agregarContacto = $("#add-contact");/* boton para agregar contacto*/

	/*crear nuevos elementos para la lista de contactos*/
	var $nuevoContacto = $("<article />", {"class": "card-panel hoverable"});
	var $nuevoNombre = $("<h4 />");
	var $eliminarContacto = $("<button type='button' />");
	var $iconoEliminar = $("<i />", {"class": "material-icons"});
	var $nuevoNumero = $("<p />");
/*asignando los valores de entrada*/
	$nuevoNombre.text($nombreContacto);
	$nuevoNumero.text($telefonoContacto);
	
	
	$eliminarContacto.addClass("btn right");
	$iconoEliminar.text("delete");
	/*evento para eliminar contacto*/
	$eliminarContacto.click(eliminarContacto);
	
	/*agregando elementos*/
	$eliminarContacto.append($iconoEliminar);
	$nuevoContacto.append($nuevoNombre);
	$nuevoContacto.append($eliminarContacto);
	$nuevoContacto.append($nuevoNumero);
	
	/*asignando en primer lugar el nuevo contacto*/
	$listaContactos.prepend($nuevoContacto);
	/*limpiando inputs*/
	$("#icon_prefix").val("");
	$("#icon_telephone").val("");
	/*contador de contactos*/
	contadorContactos++;
	$("#number-contacts").text(contadorContactos);
};
	/*funcion para no ingresar datos vacios*/
	var validarContacto = function () {
		var $addButton = $("#add-contact");
	
		if($(this).val().trim().length > 0) {
			$addButton.removeAttr("disabled");
		} else {
			$addButton.attr("disabled", true);
		}
	};
/*funcion para eliminar contactos*/
var eliminarContacto= function () {
		$(this).parent().remove();
		contadorContactos--;
		$("#number-contacts").text(contadorContactos);
	};

$(document).ready(cargarPagina);