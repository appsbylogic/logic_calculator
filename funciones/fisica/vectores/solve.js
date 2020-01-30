var fuerzas_x = [];

var fuerzas_y = [];

var total_x = 0;

var total_y =0;

var result;

var angle_r;

var numberF = 0;

function anadir(){

	numberF = numberF < 2 ? numberF+=1 : 0

	if(numberF ==2){
		$('#calculate_button').removeClass('disabled')
		
	}

	



	$('.table_c').addClass('show')

	var magnitude = parseFloat(document.getElementById("vector").value);

	var angle = parseFloat(document.getElementById("angle").value);

	var table = document.getElementById("table");

	if(isNaN(magnitude)){

		magnitude= 0
	

	}


	if(isNaN(angle)){

		angle = 0
	

	}

    var row = table.insertRow(1);
    
    var cell1 = row.insertCell(0);
    
    var cell2 = row.insertCell(1);

    var cell3 = row.insertCell(2);

    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = magnitude;
    
    cell2.innerHTML = angle;

    cell3.innerHTML = (Math.cos(angle*Math.PI/180)*magnitude).toFixed(2);

    fuerzas_x.push(cell3.innerHTML);

    cell4.innerHTML = (Math.sin(angle*Math.PI/180)*magnitude).toFixed(2);

    fuerzas_y.push(cell4.innerHTML);

    document.getElementById("vector").value='';

    document.getElementById("angle").value='';

    console.log(fuerzas_x)




}

function calcular(){

	$("html, body").animate({ scrollTop: $(document).height() }, 750);

	$('.result').addClass('show')

	var resultado = document.getElementById("resultado");

	var r_angle = document.getElementById("r_angle");

	var x_forces = document.getElementById("x_forces");

	var y_forces = document.getElementById("y_forces");

	if(fuerzas_x.length >=2){

		for (var i = 0; i < fuerzas_x.length; i++) {
  			total_x += parseFloat(fuerzas_x[i])

  			total_y += parseFloat(fuerzas_y[i]);

		}

		result = total_x*total_x + total_y*total_y;

		var angulo = total_y/total_x

		console.log(angulo)

		angle_r = Math.atan(angulo);

		x_forces.innerHTML = "X forces = " + total_x;

		y_forces.innerHTML = "Y forces = " + total_y;

		resultado.innerHTML = "Resultant force = " + (Math.sqrt(result)).toFixed(2);

		r_angle.innerHTML = "Resultant angle = " + (angle_r * (180/Math.PI)).toFixed(2);

	}

}