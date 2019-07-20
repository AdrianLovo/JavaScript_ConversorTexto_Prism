function procesar_selección_HTML(opcion) {	
	var texto =texto_HTML.value;
  	var inicio=texto_HTML.selectionStart;
  	var fin   =texto_HTML.selectionEnd;	
  	$("#texto_HTML").val(procesar_selección(texto, inicio, fin, opcion));
  	Resultado.innerHTML = procesar_selección(texto, inicio, fin, opcion);
}

function procesar_selección(texto, inicio_selección, fin_selección, opcion) {
  	var longitud=texto.length;
  	var inicio=texto.slice(0, inicio_selección);
  	var medio =texto.slice(inicio_selección, fin_selección);
  	var fin   =texto.slice(fin_selección, longitud);

  	switch (opcion){
  		case 1: 				
  			medio="<span class='token function'>"+medio+"</span>";
  			break;
	  	case 2: 				
	  		medio="<span class='token keyword'>"+medio+"</span>";
	  		break;
	  	case 3: 				
	  		medio="<span class='token string'>"+medio+"</span>";
	  		break;
		case 4: 				
	  		medio="<span class='token tag'>"+medio+"</span>";
	  		break;			  				
  	}

 	return inicio+medio+fin;
}


function SeleccionarLenguaje(){
	var opcion = $("#Lenguaje option:selected").val();
	var lenguaje = "";
	var inicio = "";
	var fin = "";

	switch(opcion){
		case "0": 
				alert("Selecciona una opcion");
				Borrar();
			break;
		case "1":
			lenguaje = "sql";
			break;
	}

	if(lenguaje == ""){
		inicio = "";
		fin = "";		
	}else{ 
		inicio = "<pre class='language-"+ lenguaje+"'> \n";
		fin =  "\n</pre>";	
	}

	$("#texto_HTML").val(inicio + $("#texto_HTML").val() + fin);	
}

function Borrar(){
	$("#texto_HTML").val("");
	Resultado.innerHTML = "";	
}
