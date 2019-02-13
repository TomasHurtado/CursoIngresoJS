function mostrar()
{

	var precio;
	var descuento;
	var porcentaje;

	precio= prompt("Ingrese el precio");
	descuento= prompt("Ingrese el descuento sin el signo %");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	
	porcentaje=(precio*descuento)/100;

	elPrecioFinal.value=precio-porcentaje;





}
