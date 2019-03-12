function calculate(){

	var array_check = [

	angulo_a = document.getElementById('angulo_a'),

	masa_a = document.getElementById("masa_a"),

	fuerza_a = document.getElementById("fuerza_a"),

	fuerza_f_a = document.getElementById("fuerza_f_a"),

	coeficiente_a = document.getElementById("coeficiente_a"),

	aceleracion_a = document.getElementById("aceleracion_a")

	]

	var things_activated = [];

	var angulo = parseFloat(document.getElementById('angulo').value)

	 

	var masa = parseFloat(document.getElementById("masa").value);

	

	var masa_peso = document.getElementById('masa_peso')

	var selec = masa_peso.options[masa_peso.selectedIndex].text

	var fuerza = parseFloat(document.getElementById("fuerza").value);

	

	var fuerza_f = parseFloat(document.getElementById("fuerza_f").value);

	

	var coeficiente = parseFloat(document.getElementById("coeficiente").value);

	

	var aceleracion = parseFloat(document.getElementById("aceleracion").value);

	

	var ac = aceleracion;

	var fr = fuerza_f;

	var f = fuerza;

	var co = coeficiente;

	var m = masa;

	var n = 0;

	const g = 9.81;

	

	for (var i = 0; i < array_check.length; i++) {

		console.log('asdasd')

		if(array_check[i].checked){

			things_activated.push(array_check[i]);

			console.log(things_activated)

		}

	}

	


	if(angulo_a.checked===false){

		if(selec==='Mass' && masa_a.checked){

			n = m*g;

		}else{

			n = m
		}

		if(masa_a.checked && fuerza_a.checked && fuerza_f_a.checked && selec==='Mass'){


			ac = (f-fr)/m;

			co = fr/n;

			console.log(co)

		}

		if(masa_a.checked && fuerza_a.checked && fuerza_f_a.checked && selec==='Weight'){

			m = m/g

			ac = (f-fr)/m;

			co = fr/n;

			console.log(co)

		}

		if(masa_a.checked && fuerza_a.checked && coeficiente_a.checked && selec==='Weight'){

			m = m/g

			fr = co*n;

			ac = (f-fr)/m;

			co = fr/n;

			console.log(co)

		}

		if(masa_a.checked && fuerza_a.checked && coeficiente_a.checked && selec==='Mass'){


			fr = co*n;

			ac = (f-fr)/m;

			co = fr/n;

			console.log(co)

		}

		if(fuerza_a.checked && fuerza_f_a.checked && aceleracion_a.checked){

			m = (f-fr)*a;

			w = m * g;

			n = w;

			co = fr/n;
			

		}

		if(coeficiente_a.checked && fuerza_f_a.checked && aceleracion_a.checked){

			n = fr/co;

			w = n;

			m = w/g;

			f = 

		}





	
	}
	

}