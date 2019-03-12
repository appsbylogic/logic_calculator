function calcular(){

	var leg_1 = parseInt(document.getElementById("leg_1").value);

	var leg_2 = parseInt(document.getElementById("leg_2").value);

	var hypotenuse = parseInt(document.getElementById("hypotenuse").value);

	var resul = document.getElementById("resultado");

	var angle = document.getElementById("angulo");

	var angle_b = document.getElementById("angulo_b");

	var angle_c = document.getElementById("angulo_c");

	var fuerzas_x = document.getElementById("fuerzas_x");

	var fuerzas_y = document.getElementById("fuerzas_y");


	var resultado;

	var angulo;

	var x_forces;

	var y_forces;

	if(isNaN(leg_1)){

	leg_1= document.getElementById("leg_1").value = 0;
	

}

if(isNaN(leg_2)){

	leg_2= document.getElementById("leg_2").value = 0;
	

}

if(isNaN(hypotenuse)){

	hypotenuse= document.getElementById("hypotenuse").value = 0;
	

}

	

	if(hypotenuse===0){

		resultado = leg_1*leg_1 + leg_2*leg_2;

		angulo = (Math.atan(leg_1/leg_2))*180/Math.PI;

		x_forces = (Math.cos(angulo*Math.PI/180))*leg_1 + (Math.cos(angulo*Math.PI/180))*leg_2;

		y_forces = (Math.sin(angulo*Math.PI/180))*leg_1 + (Math.sin(angulo*Math.PI/180))*leg_2;

		console.log(x_forces)

		resultado = Math.sqrt(resultado);

		console.log(resultado)
		
		resul.innerHTML = "Hypotenuse = " + resultado;

		fuerzas_x.innerHTML = "Perimeter = " + (resultado+leg_1+leg_2)

		fuerzas_y.innerHTML = "Area = " + (leg_1*leg_2/2);

		angle.innerHTML = "Angle A = " + angulo + "°";

		angle_b.innerHTML = "Angle B = " + (180-(angulo+90)) + "°";

		angle_c.innerHTML = "Angle C = 90°";

		
	}

	if(leg_1===0){

		resultado = hypotenuse*hypotenuse - leg_2*leg_2;

		resultado = Math.sqrt(resultado);

		angulo = (Math.acos(leg_2/hypotenuse))*180/Math.PI;

		x_forces = (Math.cos(angulo*Math.PI/180))*hypotenuse + (Math.cos(angulo*Math.PI/180))*leg_2;

		y_forces = (Math.sin(angulo*Math.PI/180))*hypotenuse + (Math.sin(angulo*Math.PI/180))*leg_2;

		console.log(x_forces)

		

		console.log(resultado)
		
		resul.innerHTML = "Leg a = " + resultado;

		fuerzas_x.innerHTML = "Perimeter = " + (resultado+hypotenuse+leg_2)

		fuerzas_y.innerHTML = "Area = " + (resultado*leg_2/2);

		angle.innerHTML = "Angle A = " + angulo + "°";

		angle_b.innerHTML = "Angle B = " + (180-(angulo+90)) + "°";

		angle_c.innerHTML = "Angle C = 90°";

		
	}

	if(leg_2===0){

		resultado = hypotenuse*hypotenuse - leg_1*leg_1;

		resultado = Math.sqrt(resultado);

		angulo = (Math.asin(leg_1/hypotenuse))*180/Math.PI;

		x_forces = (Math.cos(angulo*Math.PI/180))*hypotenuse + (Math.cos(angulo*Math.PI/180))*leg_1;

		y_forces = (Math.sin(angulo*Math.PI/180))*hypotenuse + (Math.sin(angulo*Math.PI/180))*leg_1;

		console.log(x_forces)

		

		console.log(resultado)
		
		resul.innerHTML = "Leg b = " + resultado;


		fuerzas_x.innerHTML = "Perimeter = " + (resultado+leg_1+hypotenuse)

		fuerzas_y.innerHTML = "Area = " + (leg_1*resultado/2);

		angle_b.innerHTML = "Angle B = " + angulo + "°";

		angle.innerHTML = "Angle A = " + (180-(angulo+90)) + "°";

		angle_c.innerHTML = "Angle C = 90°";

		
	}
}

