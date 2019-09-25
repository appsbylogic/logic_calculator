

function calcular(){


	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

	var leg_1 = parseInt(document.getElementById("a").value);

	var leg_2 = parseInt(document.getElementById("b").value);

	var hypotenuse = parseInt(document.getElementById("c").value);

	var resul = document.getElementById("resultado");

	
	var fuerzas_x = document.getElementById("perimetro");

	var fuerzas_y = document.getElementById("area");


	var resultado;

	var angulo;

	var x_forces;

	var y_forces;

	if(isNaN(leg_1)){

	leg_1= 0;
	

}

if(isNaN(leg_2)){

	leg_2=  0;
	

}

if(isNaN(hypotenuse)){

	hypotenuse=  0;
	

}

	if(hypotenuse==0 && leg_1==0&&leg_2==0){

		resul.innerHTML = 'Invalid operation (Remember to leave blank the value to calculate)';

		fuerzas_x.innerHTML = ""

		fuerzas_y.innerHTML = "";
		return

	}

	if(hypotenuse===0){

		resultado = leg_1**2 + (leg_2)**2;

		angulo = (Math.atan(leg_1/leg_2))*180/Math.PI;

		x_forces = (Math.cos(angulo*Math.PI/180))*leg_1 + (Math.cos(angulo*Math.PI/180))*leg_2;

		y_forces = (Math.sin(angulo*Math.PI/180))*leg_1 + (Math.sin(angulo*Math.PI/180))*leg_2;

		console.log(x_forces)

		resultado = Math.sqrt(resultado);

		console.log(resultado)
		
		resul.innerHTML = "Hypotenuse = " + resultado;

		fuerzas_x.innerHTML = "Perimeter = " + (resultado+leg_1+leg_2)

		fuerzas_y.innerHTML = "Area = " + (leg_1*leg_2/2);

	

		
	}else

	if(leg_1===0){

		resultado = hypotenuse*hypotenuse - (leg_2)**2;

		resultado = Math.sqrt(resultado);

		angulo = (Math.acos(leg_2/hypotenuse))*180/Math.PI;

		x_forces = (Math.cos(angulo*Math.PI/180))*hypotenuse + (Math.cos(angulo*Math.PI/180))*leg_2;

		y_forces = (Math.sin(angulo*Math.PI/180))*hypotenuse + (Math.sin(angulo*Math.PI/180))*leg_2;

		console.log(x_forces)

		

		console.log(resultado)
		
		resul.innerHTML = "a = " + resultado;

		fuerzas_x.innerHTML = "Perimeter = " + (resultado+hypotenuse+leg_2)

		fuerzas_y.innerHTML = "Area = " + (resultado*leg_2/2);

	

		
	}else

	if(leg_2===0){

		resultado = hypotenuse*hypotenuse - (leg_1)**2;

		resultado = Math.sqrt(resultado);

		angulo = (Math.asin(leg_1/hypotenuse))*180/Math.PI;

		x_forces = (Math.cos(angulo*Math.PI/180))*hypotenuse + (Math.cos(angulo*Math.PI/180))*leg_1;

		y_forces = (Math.sin(angulo*Math.PI/180))*hypotenuse + (Math.sin(angulo*Math.PI/180))*leg_1;

		console.log(x_forces)

		

		console.log(resultado)
		
		resul.innerHTML = "b = " + resultado;


		fuerzas_x.innerHTML = "Perimeter = " + (resultado+leg_1+hypotenuse)

		fuerzas_y.innerHTML = "Area = " + (leg_1*resultado/2);



		
	}else{

		resul.innerHTML = 'No values added';

		fuerzas_x.innerHTML = ""

		fuerzas_y.innerHTML = "";

	}
}

