
function mostrar()
{
	var nombreuno;
	var nombredos;
	var edaduno;
	var edaddos;
	var suma;



	nombreuno = prompt("Por favor ingrese nombre de la primera persona");
	edaduno = prompt("Por favor ingrese su edad");
	nombredos = prompt("Por favor ingrese el nombre de la segunda persona");
	edaddos = prompt("Por favor ingrese su edad");


	edaduno=parseInt(edaduno);
	edaddos=parseInt(edaddos);

	suma=edaduno+edaddos;



	alert("Ustedes son: " + nombreuno "y " + nombredos + ", usus edades son: " + edaduno + ", y edaddos y la suma de sus edades es" + suma );
	





}
