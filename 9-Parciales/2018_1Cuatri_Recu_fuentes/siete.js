function mostrar()
{
	var notas;
	var sexo;
	var promedio;
	var notabaja;

	
			
		for(c=0;c<5;c++)
		{
		while(notas<0 || notas>9) 
            {
            	notas=prompt("ingrese nota otra vez");
            	c=c--;
               
               sexo = prompt("ingrese f ó m .");


				while(sexo!= "f" && sexo!="m")
				{
				sexo=prompt("intente otra vez");	
				c=c--;
				}
				notas=prompt("ingrese nota");
            }
        }    

}
 