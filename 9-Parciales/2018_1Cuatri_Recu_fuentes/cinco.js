function mostrar()
{
	var metodo;
	var descuento;
	var paquete;

	metodo=prompt("como va a pagar: 1visa, 2paypal, 3mercadopago o 4efectivo u 5otro ingrese el numero correspondiente");
	metodo=parseInt(metodo);
	paquete=prompt("ingrese si elige el paquete todo incluido con 1 o el paquete solo desayunos con 2");
	paquete=parseInt(paquete);



	switch(metodo)
	{
		case 1: //visa
		
		descuento=0.90;

		break;
		case 2://paypal
		
		descuento=0.85;
		switch(paquete)
		{
			case 1:
			descuento=0.75;
			break;
			
		}
		break;
		case 3://mercado
		
		descuento=0.90;
		break;
		case 4://efectivo
		
		descuento=0.80
		switch(paquete)
		{
			case 1:
			descuento=0.70;
			break;
			default:
			descuento=0.65;
			
		}
		break;
		case 5://otro
		
		descuento=0.95;
		break;
		default:

	}

	
}
