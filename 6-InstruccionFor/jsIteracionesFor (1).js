function mostrar() 
{
 var palabra;
 var palabraSola="";
 var palabraAlreves="";

 palabra=prompt("ingrese palabra");
 console.log(palabra.length);

 for(i=0; i<palabra.length;i++)
 {
 	console.log(palabra[i]);

 	if (palabra[i]=="") 
 	{
 		continue;
 	}

 	palabraSola=palabraSola+palabra[i]
 }

 for(i=0;i<palabraSola.length;i++)
 {
 	palabraAlreves=palabraSola[i]+palabraAlreves;

 }

 console.log(palabraSola);
 console.log(palabraAlreves);

 if (palabraAlreves==palabraSola) 
 {
 	alert("es palindromo");
 }
 else
 {
 	alert("fracasaste");
 }
}































/*function mostrar()
{
	var random;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;
	
	for (i=1; i<10000;i++)
	{
		random=Math.floor((Math.random() * 10) + 1);
		console.log(random)
		//alert(i);

		switch(random)
		{	case 1:
			contador1=contador1+1;
			break;
			case 2:
			contador2=contador2+1;
			break;
			case 3:
			contador3=contador3+1;
			break;
			case 4:
			contador4=contador4+1;
			break;
			case 5:
			contador5=contador5+1;
			break;
			case 6:
			contador6=contador6+1;
			break;
			case 7:
			contador7=contador7+1;
			break;
			case 8:
			contador8=contador8+1;
			break;
			case 9:
			contador9=contador9+1;
			break;
			case 10:
			contador10=contador10+1;
			break;
			
		}
	}

	console.log("el uno salio: " +contador1+"<br/>"+ contador1*100/i + "porciento");
	console.log("el dos salio: " +contador2+"<br/>"+ contador2*100/i+ "porciento");
	console.log("el tres salio: " +contador3+"<br/>"+ contador3*100/i+ "porciento");
	console.log("el cuatro salio: " +contador4+"<br/>"+ contador4*100/i+ "porciento");
	console.log("el cinco salio: " +contador5+"<br/>"+ contador5*100/i+ "porciento");
	console.log("el seis salio: " +contador6+"<br/>"+ contador6*100/i+ "porciento");
	console.log("el siete salio: " +contador7+"<br/>"+ contador7*100/i+ "porciento");
	console.log("el ocho salio: " +contador8+"<br/>"+ contador8*100/i+ "porciento");
	console.log("el nueve salio: " +contador9+"<br/>"+ contador9*100/i+ "porciento");
	console.log("el diez salio: " +contador10+"<br/>"+ contador10*100/i+ "porciento");
}*/