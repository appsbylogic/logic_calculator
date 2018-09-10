function calculate(){

var text_a = parseFloat(document.getElementById("a").value);


var text_b = parseFloat(document.getElementById("b").value);


var text_c = parseFloat(document.getElementById("c").value);


var respuesta_pos = 0;

var respuesta_neg = 0;

var discriminante = 0;



if(isNaN(text_a)){

	text_a= document.getElementById("a").value = 1;
	

}

if(isNaN(text_b)){

	text_b= document.getElementById("b").value = 0;
	

}

if(isNaN(text_c)){

	text_c= document.getElementById("c").value = 0;
	

}





//console.log(text_c)

discriminante = Math.pow(text_b,2)-(4*text_a*text_c)

console.log(discriminante)



if(discriminante<0){

	document.getElementById('disc').innerHTML = discriminante;

	discriminante = Math.sqrt(Math.abs(discriminante));

	respuesta_pos = (-1*text_b)/(2*text_a) + ' + ' + discriminante.toFixed(2)/(2*text_a) + 'i';

	respuesta_neg = (-1*text_b) + ' - ' + discriminante.toFixed(2) + 'i';

	var vertex = (-1*text_b)/(2*text_a)

	var ver_y = Math.pow(vertex,2) + (vertex*text_b) + text_c;

	document.getElementById("discriminante").innerHTML = "Vertex = " + vertex + ', ' + ver_y;

	document.getElementById("y-int").innerHTML = "Y-int = " + text_c; 

	

	document.getElementById("resultado").innerHTML = "X-int = (" + respuesta_pos + ', ' + respuesta_neg + ')';

	

	
}else{

	document.getElementById('disc').innerHTML = discriminante;

	respuesta_pos = (-1*text_b+Math.sqrt(discriminante))/(2*text_a);

	respuesta_neg = (-1*text_b-Math.sqrt(discriminante))/(2*text_a)

	var vertex = (-1*text_b)/(2*text_a)

	var ver_y = Math.pow(vertex,2) + (vertex*text_b) + text_c;

	document.getElementById("discriminante").innerHTML = "Vertex = " + vertex.toFixed(2) + ', ' + ver_y.toFixed(2);

	document.getElementById("y-int").innerHTML = "Y-int = " + text_c; 

	

	document.getElementById("resultado").innerHTML = "X-int = (" + respuesta_pos.toFixed(2) + ', ' + respuesta_neg.toFixed(2) + ')';


}










}


window.addEventListener('keyup', function(e){

	var text_a = parseFloat(document.getElementById("a").value);

	var text_b = parseFloat(document.getElementById("b").value);

	var text_c = parseFloat(document.getElementById("c").value);

	var preview = document.getElementById("preview");

	var a = text_a;

	var b = text_b;

	var c = text_c;

	var sup = '2';





	if(text_b>0){

		b = ' + ' + text_b + 'x';

	}

	if(text_c>0){

		c = ' + ' + text_c;

	}

	if(text_a==1){

		a = ' ';

	}

	if(text_b<0){

		b = ' - ' + Math.abs(text_b) + 'x';

	}

	if(text_c<0){

		c = ' - ' + Math.abs(text_c);

	}

	if(isNaN(text_c)){

		text_c=0;

	}

	if(isNaN(text_b)){

		text_b=0;

	}

	if(isNaN(text_a)){

		a= '';

	}



	if(text_c!=0 && text_b !=0){

		preview.innerHTML = a + "x" + sup.sup() + b  + c + ' = y';

	}else if(text_c == 0 && text_b != 0){

		preview.innerHTML = a + "x" + sup.sup() + b + ' = y';


	}else if(text_c != 0 && text_b==0){

		preview.innerHTML = a + "x" + sup.sup() + c + ' = y';


	}else if(text_c == 0 && text_b==0){

		preview.innerHTML = a + "x" + sup.sup() + ' = y';


	}

	


	
	

	

	

})

