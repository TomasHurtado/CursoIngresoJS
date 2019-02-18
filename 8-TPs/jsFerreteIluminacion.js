/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//alert(Marca.value);
 	var cantidad;
 	var descuento;
 	var precio;
 	var marca;
 	var PrecioDescuento;
 	var impuesto;
 	var IngresosBrutos;


 	cantidad=Cantidad.value;
 	cantidad=parseInt(cantidad);

 	if (cantidad>=6) 
 	{
 		precio=cantidad*35;
 		descuento=(precio*50)/100;
 		PrecioDescuento=precio-descuento;
 		precioDescuento.value=PrecioDescuento;

 		if (PrecioDescuento>120) 
 		{
 			impuesto=(PrecioDescuento*10)/100;
 			IngresosBrutos=PrecioDescuento+impuesto;
 			alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 		}
 	}
 	 else
 		{
 			if (cantidad==5) 
 			{
 				marca=Marca.value;

 				if (marca=="ArgentinaLuz") 
 				{
 					precio=cantidad*35;
 					descuento=(precio*40)/100;
 					PrecioDescuento=precio-descuento;
 					precioDescuento.value=PrecioDescuento;

 						if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		
 				}
 				else
 				{
 					precio=cantidad*35;
 					descuento=(precio*30)/100;
 					PrecioDescuento=precio-descuento;
 					precioDescuento.value=PrecioDescuento;

 						if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		
 				}
 			}

 			if (cantidad==4) 
 			{
 				marca=Marca.value;
 				if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") 
 				{
 					precio=cantidad*35;
 					descuento=(precio*25)/100;
 					PrecioDescuento=precio-descuento;
 					precioDescuento.value=PrecioDescuento;

 					if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		
 				}
 				else
 				{
 					precio=cantidad*35;
 					descuento=(precio*20)/100;
 					PrecioDescuento=precio-descuento;
 					precioDescuento.value=PrecioDescuento;

 					if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		
 				}
 			}
 			if (cantidad==3) 
 			{
 				marca=Marca.value;
 				if (marca=="ArgentinaLuz") 
 				{
 					precio=cantidad*35;
 					descuento=(precio*15)/100;
 					PrecioDescuento=precio-descuento;
 					precioDescuento.value=PrecioDescuento;

 					if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		
 				}
 				else
 				{
 					if (marca=="FelipeLamparas") 
 					{
 						precio=cantidad*35;
 						descuento=(precio*10)/100;
 						PrecioDescuento=precio-descuento;
 						precioDescuento.value=PrecioDescuento;

 						if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		
 					}
 					else
 					{
 						precio=cantidad*35;
 						descuento=(precio*5)/100;
 						PrecioDescuento=precio-descuento;
 						precioDescuento.value=PrecioDescuento;

 						if (PrecioDescuento>120) 
 						{
 							impuesto=(PrecioDescuento*10)/100;
 							IngresosBrutos=PrecioDescuento+impuesto;
 							alert("IIBB Usted pago " + IngresosBrutos + ", siendo " + impuesto +"el impuesto que se pago");
 						}		

 					}	
 				}
 			}
 		}
}