var contador = 0;
var cargarPagina = function(){
	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
	$(".button-collapse").sideNav();
	$("#form-contact").submit(agregarContacto);
	
};
var agregarContacto = function (e){
	e.preventDefault();
	var $listaContactos = $("#contact-list");
	var $nombreContacto = $("#icon_prefix").val();
	var $telefonoContacto = $("#icon_telephone").val();
	var $agregarContacto = $("#add-contact");

	/*crear elemento*/
	var $nuevoContacto = $("<article />", {"class": "card-panel hoverable"});
	var $nuevoNombre = $("<h4 />");
	var $eliminarContacto = $("<button type='button' />");
	var $iconoEliminar = $("<i />", {"class": "material-icons"});
	var $nuevoNumero = $("<p />");

	$eliminarContacto.addClass("btn right")
	$nuevoNombre.text($nombreContacto);
	$nuevoNumero.text($telefonoContacto);
	$iconoEliminar.text("delete");
	$eliminarContacto.append($iconoEliminar);
	$nuevoContacto.append($nuevoNombre);
	$nuevoContacto.append($eliminarContacto);
	$nuevoContacto.append($nuevoNumero);

	$listaContactos.prepend($nuevoContacto);
	$("#icon_prefix").val("");
	$("#icon_telephone").val("");
	contador++;
	$("#number-contacts").text(contador);
};


$(document).ready(cargarPagina);

