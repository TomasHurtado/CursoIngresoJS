/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldos;
	var aumento;

	sueldos=sueldo.value;


	sueldos=parseInt(sueldos);

	aumento=(sueldos*10)/100;

	resultado.value=aumento+sueldos;
	alert(aumento+sueldos);
}
