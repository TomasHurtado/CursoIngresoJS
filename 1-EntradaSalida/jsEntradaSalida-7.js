/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;
	var suma;



	numerouno=numeroUno.value;
	numerodos=numeroDos.value;

	
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	suma=numerouno+numerodos;

	

	alert("las suma es "+suma);
}

function restar()
{
	var numerouno;
	var numerodos;
	var suma;



	numerouno=numeroUno.value;
	numerodos=numeroDos.value;

	
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	suma=numerouno-numerodos;

	

	alert("las resta es "+suma);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var suma;



	numerouno=numeroUno.value;
	numerodos=numeroDos.value;

	
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	suma=numerouno*numerodos;

	

	alert("las multiplicacion es "+suma);
}

function dividir()
{
	var numerouno;
	var numerodos;
	var suma;



	numerouno=numeroUno.value;
	numerodos=numeroDos.value;

	
	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	suma=numerouno/numerodos;

	

	alert("las divicion es "+suma);
}

