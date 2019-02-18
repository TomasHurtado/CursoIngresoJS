function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje="";

	switch(mesDelAño) 
	{
	  case "Enero":
	   //alert("que comiences bien el año!!!.");
	   mensaje="que comiences bien el año!!!.";
	    break;
	  case "Marzo":
	    //alert("a clases!!!.");
	    mensaje="a clases!!!.";
	    break;

	    case "Julio":
	    //alert("se vienen las vacaciones!!!.");
	     mensaje="se vienen las vacaciones!!!.";
	    break;
	    case "Diciembre":
	    //alert("Felices fiesta!!!.");
	     mensaje="Felices fiesta!!!.";
	    break;
	  default:

	}

	if (mensaje!="") 
	{
		alert(mensaje);
	}
	
   

}//FIN DE LA FUNCIÓN