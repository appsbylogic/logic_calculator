
function calculate(){

	var x1 = parseFloat(document.getElementById("x1").value);
	var y1 = parseFloat(document.getElementById("y1").value);
	var x2 = parseFloat(document.getElementById("x2").value);
	var y2 = parseFloat(document.getElementById("y2").value);
	var slope_intercept = document.getElementById("slope-intercept");
	var intercept = document.getElementById("intercept");
	var standard = document.getElementById("standard");
	var point_slope = document.getElementById("point-slope");
	var slope_text = document.getElementById('slope');
	var slope = 0;
	var slope_x = x2-x1;
	var slope_y = y2-y1;
	var si_m;


	console.log(y2)



	slope =  (y2-y1)%(x2-x1);

	if(slope==0){

		slope=slope;

	}else{

		slope= (y2-y1) + '/' + (x2-x1);

	}

	console.log(slope)

	if(x2==0 && y2==0){

		point_slope.innerHTML = "Point-slope: y - " + y1 + " = " + slope + "(x  " + x1 + ")"; 

		slope_intercept.innerHTML = "Slope-intercept: y = " + slope + "x " + slope_y*x1 + '/' + slope_x;

	}else{

		x2= x2*-1;

		y2 = y2*-1;

		if(x2<0 && y2<0){

			point_slope.innerHTML = "Point-slope: y " + y2 + " = " + slope + "(x " + x2 + ")"; 


		}else{

			point_slope.innerHTML = "Point-slope: y + " + y2 + " = " + slope + "(x + " + x2 + ")"; 
		}

		

		if((slope_y*x2)%slope_x===0){

			slope_intercept.innerHTML = "Slope-intercept: y = " + slope + "x " + (slope_y*x2/slope_x + (y2*-1));



		}else

		slope_intercept.innerHTML = "Slope-intercept: y = " + slope + "x " + slope_y*x2 + '/' + slope_x;

		

	}

	

	slope_text.innerHTML = slope


}