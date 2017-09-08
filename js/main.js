/*aquí va tu código*/

function Usuarios (name,coment){
	this.name = name;
	this.coment = coment;
}

var arrayUsuarios = [];
var nombres;
var losComents; 

function guardarComentario(){
	localStorage.nombre = document.getElementById('clave').value;
	localStorage.comentario = document.getElementById('valor').value;
	var comentarios = new Usuarios(localStorage.nombre,localStorage.comentario);
	arrayUsuarios.push(comentarios);

	localStorage.setItem('nombre',localStorage.nombre);
	localStorage.setItem('comentario',localStorage.comentarios);
	muestraDatos();
}

function recuperarDatos(){
}

function muestraDatos(){

	  	for (var i = 0; i < arrayUsuarios.length; i++) {
	  		document.getElementById('ale').innerHTML =("La clave contiene el valor " + localStorage.getItem("nombre") + "<br />");  
	  		//document.getElementById('ale').innerHTML = arrayUsuarios[i].name + "jsdhksd" + arrayUsuarios[i].coment;
	  	}
	  //document.getElementById('ale').innerHTML+=("La clave " + clave + "contiene el valor " + localStorage.getItem(clave) + "<br />");  
	
}
muestraDatos();