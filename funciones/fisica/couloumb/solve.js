var q1 = $('#ch1')
var q2 = $('#ch1')
var r = $('#distance')
var f = $('#force')
var result = $('#result')
var result_card = $('.result_card')


function calcular(){

	$("html, body").animate({ scrollTop: $(document).height() }, 1000);

	result_card.addClass('show')

	console.log(f.val())

	var finalR = 0

	if(q1.val() == ''){

		finalR = 'q1 = ' + calcularQ(q2.val(),r.val(),f.val());

		console.log(finalR)
	}

	if(q2.val() == ''){

		finalR = 'q2 = ' + calcularQ(q1.val(),r.val(),f.val());

		console.log(finalR)
	}

	if(q1.val() == '' && q2.val() == ''){

		finalR = 'q = ' + calcularQE(r.val(),f.val());

		
	}

	if(f.val() == ''){

		finalR = 'F = ' + calcularF(q1.val(),q1.val(),r.val());

		console.log(finalR)
	}

	if(r.val() == ''){

		finalR = 'r = ' + calcularR(q1.val(),q1.val(),f.val());

		console.log(finalR)
	}

	if(q1.val() == '' && q2.val() == '' && r.val() == '' && f.val() == ''){


		finalR = "No values added"

	}

	result.html(finalR)
}

function calcularQ(q,r,f){

	var resultado = (f*Math.pow(r,2))/(q*9e9)

	return resultado

}

function calcularQE(r,f){

	var resultado = Math.sqrt((f*Math.pow(r,2))/9e9)

	return resultado

}

function calcularF(q1,q1,r){

	var resultado = (9e9*q1*q2)/Math.pow(r,2)

	return resultado

}

function calcularR(q1,q1,f){

	var resultado = Math.sqrt((9e9*q1*q2)/f)

	return resultado

}