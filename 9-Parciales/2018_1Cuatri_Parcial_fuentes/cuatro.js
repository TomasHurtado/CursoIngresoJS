/*function mostrar()
{
	var importeUno;
	var importeDos;
	var importeTres;
	var importeCuatro;
	var descuento;
	var mayor;
	var suma;

	importeUno=prompt("Ingrese valor 1");
	importeDos=prompt("Ingrese valor 2");
	importeTres=prompt("Ingrese valor 3");
	importeCuatro=prompt("Ingrese valor 4");

	if (importeUno>importeDos && importeUno>importeTres && importeUno>importeCuatro) 
	{
		mayor=importeUno;
	}
	 else
		{
			if (importeDos>importeUno && importeDos>importeTres && importeDos>importeCuatro) 
			{	
				mayor=importeDos;
			}
			else
			{
				if (importeTres>importeUno && importeTres>importeDos && importeTres>importeCuatro)
				{
					mayor=importeTres;
				}
				else
				{
					mayor=importeCuatro;
				}
			}
		}


	

}
*/

function mostrar()
{	var numerouno;
	var numerodos;
	var resta;
	var suma;



	numerouno=prompt("ingrese primer numero");
	numerodos=prompt("ingrese segundo numero");

	if (numerouno==numerodos) 
	{
		alert(numerouno+" "+numerodos);
	}
	else
	{
		if (numerouno>numerodos) 
		{
			resta=numerouno-numerodos;
			alert("la resta es "+resta);

		}
		else
		{
			if (numerouno<numerodos) 
			{
				suma=numerouno+numerodos;

				alert("la suma es"+suma);

				if (suma>10) 
				{
					alert("la suma es " + suma + "y supero los 10");
				}
			}
		}
	}
}

























































































































































































































































































































































































































































	/*function mostrar()
{
	var producto;
	var descuentouno;
	var recargo;
	var precio;
	var metododepago;
	var total;

	producto=(Math.floor((Math.random() * 5) + 1));
	precio=(Math.floor((Math.random() * 10000) + 1));
	metododepago=(Math.floor((Math.random() * 2) + 1));
	if (producto>2)
	 {
	 	if (precio>2000)
	 	 {
	 	 	if (metododepago==1) 
	 	 	{
				descuentouno=(precio*25)/100;
				var pago=precio-descuentouno;	
				alert("usted paga " +pago);
	 	 	}
	 	 	else
	 	 	{
	 	 		descuento=(producto*25)/100;	
	 	 		recargo=(producto*10)/100;
	 	 		total=producto+recargo;
	 	 		alert("usted paga " + total);
	 	 	}
	 	 	
	 	 }
		else
	 	 {
	 	   var descuentodos=(precio*15)/100;
	 	   var pagodos=precio-descuentodos;
	 	   alert("usted paga " + pagodos);
	 	 }
	 
	}
	else
	   {
	 	alert("Compro un producto y debe pagar" +precio);
	   }

	 

}
*/



/*
function mostrar()
{
	var producto;
	var descuentouno;
	var recargo;
	var precio;
	var metododepago;
	var total;

	producto=prompt("ingrese cantidad");
	precio=prompt("ingrese precio a pagar");
	metododepago=prompt("ingrese metodo de pago siendo 1 efectivo y 2 con tarjeta");

	producto=parseInt(producto);
	precio=parseInt(precio);
	metododepago=parseInt(metododepago);


	if (producto>2)
	 {
	 	if (precio>2000)
	 	 {
	 	 	if (metododepago==1) 
	 	 	{
				descuentouno=(precio*25)/100;
				var pago=precio-descuentouno;	
				alert("usted paga " +pago);
	 	 	}
	 	 	else
	 	 	{
	 	 		
	 	 		recargo=(precio*10)/100;
	 	 		total=precio+recargo;
	 	 		alert("usted paga con un recargo de " + total);
	 	 	}
	 	 	
	 	 }
		else
	 	 {
	 	   var descuentodos=(precio*15)/100;
	 	   var pagodos=precio-descuentodos;
	 	   alert("usted paga " + pagodos);
	 	 }
	 
	}
	 
	 else
	   {
	   	recargo=(precio*10)/100;
	   	total=precio+recargo;
	 	alert("Compro un producto y debe pagar" +total);
	   }
}
*/
