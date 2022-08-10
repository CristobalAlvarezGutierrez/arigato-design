/**
 * Clase que contiene los metodos que dan funcionalidad a la interfaz
 *
 * @package CGR
 * @author Cristobal Alvarez
 * @copyright CGR
 * @link https://gitlab.com/GrullaAgency/cgr.git
 * @since 09-21-2018
 * @version 1.0
*/
var i_Index = (function($, window, document, undefined)
{
	'use strict';
	/**
	 * Constructor de la clase.
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Arreglo de variables de configuracion de clase.
	 *
	 * @return void
	*/
	function Index(data)
	{
    }

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.AOSinit = function(data)
	{
		AOS.init();
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.eventoClickEnviarConsultas = function(data)
	{
		var _this = this;
		$("#btnEnviarConsulta").on('click', function(){
			_this.enviarConsultas();
		})
	}

	/**
	 * Evento que gatilla la funcion de enviar una consulta
	 *
	 * @author Cristobal Alvarez
	 * @since 09-21-2018
	 * @version 1.0
	 * @param data: Paquete de inyeccion de datos y metadatos.
	 *
	 * @return
	*/
	Index.prototype.enviarConsultas = function()
	{
		var dataSend = {
			nombre : $("#txtNombre").val(),
			correo : $("#txtCorreo").val(),
			telefono : $("#txtTelefono").val(),
			mensaje : $("#txtMensaje").val()
        }
        
		$.ajax({
			url: "Correo.php",
			method: "POST",
			dataType: "JSON",
			data: dataSend,
			success: function(data)
			{
				if(data.Success)
				{
					// $("#txtNombre").val("");
					// $("#txtApellido").val("");
					// $("#txtCorreoElectronico").val("");
					// $("#txtTelefono").val("");
					// $("#txtConsulta").val("");

					// $.notify({
					// 	// options
					// 	title: '<b>Gracias '+data.data.nombre+' !</b>',
					// 	message: 'tu consulta ha sido enviada',
					// },{
					// 	// settings
					// 	element: 'body',
					// 	position: null,
					// 	type: "success",
					// 	allow_dismiss: true,
					// 	newest_on_top: false,
					// 	showProgressbar: false,
					// 	placement: {
					// 		from: "top",
					// 		align: "center"
					// 	},
					// 	offset: 20,
					// 	spacing: 10,
					// 	z_index: 1031,
					// 	delay: 5000,
					// 	timer: 1000,
					// 	url_target: '_blank',
					// 	mouse_over: null,
					// 	animate: {
					// 		enter: 'animated fadeInDown',
					// 		exit: 'animated fadeOutUp'
					// 	},
					// 	onShow: null,
					// 	onShown: null,
					// 	onClose: null,
					// 	onClosed: null,
					// 	icon_type: 'class',
					// 	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
					// 		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
					// 		'<span data-notify="icon"></span> ' +
					// 		'<span data-notify="title">{1}</span> ' +
					// 		'<span data-notify="message">{2}</span>' +
					// 		'<div class="progress" data-notify="progressbar">' +
					// 			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
					// 		'</div>' +
					// 		'<a href="{3}" target="{4}" data-notify="url"></a>' +
					// 	'</div>'
					// });
				}
				else
				{
					// $.notify({
					// 	// options
					// 	title: '<b>Ups!</b>',
					// 	message: data.mensaje,
					// },{
					// 	// settings
					// 	element: 'body',
					// 	position: null,
					// 	type: "danger",
					// 	allow_dismiss: true,
					// 	newest_on_top: false,
					// 	showProgressbar: false,
					// 	placement: {
					// 		from: "top",
					// 		align: "center"
					// 	},
					// 	offset: 20,
					// 	spacing: 10,
					// 	z_index: 1031,
					// 	delay: 5000,
					// 	timer: 1000,
					// 	url_target: '_blank',
					// 	mouse_over: null,
					// 	animate: {
					// 		enter: 'animated fadeInDown',
					// 		exit: 'animated fadeOutUp'
					// 	},
					// 	onShow: null,
					// 	onShown: null,
					// 	onClose: null,
					// 	onClosed: null,
					// 	icon_type: 'class',
					// 	template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
					// 		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
					// 		'<span data-notify="icon"></span> ' +
					// 		'<span data-notify="title">{1}</span> ' +
					// 		'<span data-notify="message">{2}</span>' +
					// 		'<div class="progress" data-notify="progressbar">' +
					// 			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
					// 		'</div>' +
					// 		'<a href="{3}" target="{4}" data-notify="url"></a>' +
					// 	'</div>'
					// });
				}
			}
		});
	}

	return(Index);
})(jQuery, window, document);

var index;
var hilosNavegacion;

jQuery(function(){

///////////////////////////////////////////////////////////

	var index = new i_Index({instancia:'index'});
	// Pasar la intancia de la clase a la raiz del navegador para que sea visible desde el DOM, y asi poder utilizarla desde cualquier parte, por ejemplo desde un <a href="nomClase.nomMetodo()"></a>
	window.index = index;
	// Inscripcion de eventos de interfaz, aqui van las asignaciones de los eventos a componente como el click, change, carga de data via ajax, etc. todo esto previa creacion de un metodo que implemente dicho jQuery
	index.eventoClickEnviarConsultas();
	index.AOSinit();
});