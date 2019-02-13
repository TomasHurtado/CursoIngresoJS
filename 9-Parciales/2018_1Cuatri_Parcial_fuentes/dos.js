function mostrar()
{
  
	var precio;
	var recargo;
	var total;

	//no hay recio asi que puso uno random entre 1 y 10.000
	precio= alert(Math.floor((Math.random() * 10000) + 1));
	recargo=(precio*10)/100;

	total=precio+recargo;

	
	



	alert("el precio del producto en efectivo es:$ " + precio +"con tarjeta tiene un recargo del 10% que seria" + recargo+" de recargo, costandole final$ "+ total );

	

}
