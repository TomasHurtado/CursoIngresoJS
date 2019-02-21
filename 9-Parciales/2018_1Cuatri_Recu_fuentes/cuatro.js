function mostrar()
{
	var importeUno;
	var importeDos;
	var importeTres;
	var importeCuatro;
	var descuento;
	var mayor;
	var suma;
	var final;

	importeUno=prompt("Ingrese valor 1");
	importeUno=parseInt(importeUno);
	importeDos=prompt("Ingrese valor 2");
	importeDos=parseInt(importeDos);
	importeTres=prompt("Ingrese valor 3");
	importeTres=parseInt(importeTres);
	importeCuatro=prompt("Ingrese valor 4");
	importeCuatro=parseInt(importeCuatro);

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

	suma=importeUno+importeDos+importeTres+importeCuatro;

	if (suma>100) 
	{
		descuento=0.90;
	}
	 else
	 {
	 	if (suma>50 || suma<100) 
	 	{
	 		descuento=0.95;

	 	}
	 	else
	 	{
	 		descuento=1.15
	 	}
	 }

	 final=suma*descuento;
	 
	 

	 alert("El numero mayor es: " + mayor + " su precio final es: "+final);

}
