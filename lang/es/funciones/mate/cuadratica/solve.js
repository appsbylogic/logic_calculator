var a
var b
var c
var preview = $("#preview")

var result_card = $('.result_card')

function calcular(){

	$("html, body").animate({ scrollTop: $(document).height() }, 1000);

	result_card.addClass('show')

	a = $('#a').val() != '' ? $('#a').val() : 1;
	b = $('#b').val() != '' ? $('#b').val() : 0;
	c = $('#c').val() != '' ? $('#c').val() : 0;

	var disc = discrimante(a,b,c)

	var solucion = disc >= 0 ? soluciones(a,b,c,disc) : solImaginaria(a,b,c,disc)

	var solText = disc >= 0 ? 'X values = ( '+solucion.x1.toFixed(2) + ', ' + solucion.x2.toFixed(2) + ' )' : 'valores de X = ( '+solucion.x1 + 'i, ' + solucion.x2 + 'i )' 

	$('#discriminante').html('Discriminante = ' + disc.toFixed(2))

	$('#resultado').html(solText)



}


function discrimante(a,b,c){

	return Math.pow(b,2)-(4*a*c)

}

function soluciones(a,b,c,disc){

	var x1 = (-b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a) 

	var x2 = (-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a)



	return{
		
		x1:x1,
		x2:x2
	
	};


}


function solImaginaria(a,b,c,disc){

	disc = Math.abs(disc)

	var x1 = (-b/(2*a)).toFixed(2)+ '+' + (Math.sqrt(disc)/(2*a)).toFixed(2)

	var x2 = (-b/(2*a)).toFixed(2) + '-' + (Math.sqrt(disc)/(2*a)).toFixed(2)



	return{
		
		x1:x1,
		x2:x2
	
	};


}

window.addEventListener('keyup', function(){

	a = $('#a').val() == 1 ? '':$('#a').val();
	b = $('#b').val() != '' ? $('#b').val() : 0;
	c = $('#c').val() != '' ? $('#c').val() : 0;

	b_text = b >= 0 ? ' + ' + Math.abs(b) : ' - ' + Math.abs(b)

	c_text = c >= 0 ? ' + ' + Math.abs(c) : ' - ' + Math.abs(c)

	if(c != '' && b != ''){

		preview.html('<b>' + a + "x" + '2'.sup() + b_text + 'x' + c_text + ' = 0' + '</b>');

	}else if(c == '' && b != ''){

		preview.html('<b>' + a + "x" + '2'.sup() + b_text + 'x' + ' = 0'+ '</b>');


	}else if(c != '' && b==''){

		preview.html('<b>' + a + "x" + '2'.sup() + + c + ' = 0'+ '</b>');


	}else if(c == '' && b==''){

		preview.html('<b>' + a + "x" + '2'.sup() + ' = 0'+ '</b>');


	}

	


})