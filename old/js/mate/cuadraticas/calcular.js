function calculate(){

	var text_a = parseFloat(document.getElementById("a").value);

	var text_b = parseFloat(document.getElementById("b").value);

	var text_c = parseFloat(document.getElementById("c").value);

	var preview = document.getElementById("preview");

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



	if(discriminante<0){
		document.getElementById('disc').innerHTML = discriminante;

	discriminante = Math.sqrt(Math.abs(discriminante));

	respuesta_pos = (-1*text_b)/(2*text_a) + ' + ' + discriminante.toFixed(2)/(2*text_a) + 'i';

	respuesta_neg = (-1*text_b) + ' - ' + discriminante.toFixed(2) + 'i';

	document.getElementById("resultado").innerHTML = "(" + respuesta_pos + ', ' + respuesta_neg + ')';
		

		
	}else{

		respuesta_pos = (-1*text_b+Math.sqrt(discriminante))/(2*text_a);

		respuesta_neg = (-1*text_b-Math.sqrt(discriminante))/(2*text_a)

		

		document.getElementById("resultado").innerHTML = "(" + respuesta_pos.toFixed(2) + ', ' + respuesta_neg.toFixed(2) + ')';


	}

	document.getElementById("discriminante").innerHTML = 'Discriminant = ' + discriminante;



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


	if(text_b<0){

		b = ' - ' + Math.abs(text_b) + 'x';

	}

	if(text_c<0){

		c = ' - ' + Math.abs(text_c);

	}

	if(text_a==1){

		a = ' ';

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

		preview.innerHTML = a + "x" + sup.sup() + b  + c + ' = 0';

	}else if(text_c == 0 && text_b != 0){

		preview.innerHTML = a + "x" + sup.sup() + b + ' = 0';


	}else if(text_c != 0 && text_b==0){

		preview.innerHTML = a + "x" + sup.sup() + c + ' = 0';


	}else if(text_c == 0 && text_b==0){

		preview.innerHTML = a + "x" + sup.sup() + ' = 0';


	}

	


	
	

	

	

})
