var potencial = document.getElementById('potencial');

var cinetica = document.getElementById('cinetica');

var mecanica = document.getElementById('mecanica');

var seleccion = document.getElementById('select');

var selec;

var masa = parseFloat(document.getElementById('masa').value);

var altura = parseFloat(document.getElementById('altura').value);

var velocidad = parseFloat(document.getElementById('velocidad').value);

var energia_p = 0;

var energia_c = 0;

var energia_e = 0;

function checar (){

	requestAnimationFrame(checar);



	selec = seleccion.options[seleccion.selectedIndex].text

	if(selec == 'Potential'){

		potencial.setAttribute('style', 'display:block');
	}else{

		potencial.setAttribute('style', 'display:none');


	}

	if(selec == 'Cinetic'){

		cinetica.setAttribute('style', 'display:block');
	}else{

		cinetica.setAttribute('style', 'display:none');


	}


if(selec == 'Mechanic'){

		mecanica.setAttribute('style', 'display:block');
	}else{

		mecanica.setAttribute('style', 'display:none');


	}


}

checar();

function calcular(){

	if(selec == 'Potential'){

		

	}

}

