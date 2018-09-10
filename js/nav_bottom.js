var calc = document.getElementById("calc");

var form = document.getElementById("form");

var learn = document.getElementById("learn");

var early = document.getElementById("early");

calc.setAttribute("style", "border-bottom:2px solid #f78080;")

function cambiar_formularios(){

	document.getElementById("content").setAttribute("style", "display:none")

	document.getElementById("ayuda").setAttribute("style", "display:none")

	document.getElementById("aprender").setAttribute("style", "display:none")

	document.getElementById("formularios").setAttribute("style", "display:block")

	form.setAttribute("style", "border-bottom:2px solid #f78080;")

	calc.setAttribute("style", "border-bottom:none;")

	learn.setAttribute("style", "border-bottom:none;")

	early.setAttribute("style", "border-bottom:none;")

	learn.src = 'img/learn.png'

	calc.src= 'img/calcular.png'

	form.src = 'img/formulas_a.png'

	early.src = 'img/early.png'


}
function cambiar_aprender(){

	document.getElementById("content").setAttribute("style", "display:none")

	document.getElementById("ayuda").setAttribute("style", "display:none")

	document.getElementById("aprender").setAttribute("style", "display:block")

	document.getElementById("formularios").setAttribute("style", "display:none")

	form.setAttribute("style", "border-bottom:none")

	calc.setAttribute("style", "border-bottom:none;")

	learn.setAttribute("style", "border-bottom:2px solid #f78080;")

	learn.src = 'img/learn_a.png'

	calc.src= 'img/calcular.png'

	form.src = 'img/formulas.png'

	early.src = 'img/early.png'

	early.setAttribute("style", "border-bottom:none;");


}

function cambiar_ayuda(){

	document.getElementById("content").setAttribute("style", "display:none")

	document.getElementById("ayuda").setAttribute("style", "display:block")

	document.getElementById("aprender").setAttribute("style", "display:none")

	document.getElementById("formularios").setAttribute("style", "display:none")

	form.setAttribute("style", "border-bottom:none")

	calc.setAttribute("style", "border-bottom:none;")

	learn.setAttribute("style", "border-bottom:none")

	early.setAttribute("style", "border-bottom:2px solid #f78080;");

	learn.src = 'img/learn.png'

	calc.src= 'img/calcular.png'

	form.src = 'img/formulas.png'

	early.src = 'img/early_a.png'


}

function cambiar_calcular(){

	document.getElementById("content").setAttribute("style", "display:block")

	document.getElementById("ayuda").setAttribute("style", "display:none")

	document.getElementById("aprender").setAttribute("style", "display:none")

	document.getElementById("formularios").setAttribute("style", "display:none")

	form.setAttribute("style", "border-bottom:none")

	calc.setAttribute("style", "border-bottom:2px solid #f78080;")

	learn.setAttribute("style", "border-bottom:none")

	early.setAttribute("style", "border-bottom:none");

	learn.src = 'img/learn.png'

	calc.src= 'img/calcular_a.png'

	form.src = 'img/formulas.png'

	early.src = 'img/early.png'


}