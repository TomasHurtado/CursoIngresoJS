/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre = prompt("Por favor ingrese nombre");
	//elNombre.value=nombre; anda
	//var nomb = document.getElementById("elNombre").value; no anda
	document.getElementById('elNombre').value=nombre

}

