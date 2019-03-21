document.addEventListener('deviceready', function(){
StatusBar.backgroundColorByHexString('#c62828');});

$('.dropdown-trigger').dropdown({ constrainWidth: false, alignment:'left' });



$("#floatBtn").on('click', function(){

  
    		

    		

    		console.log()

    	})

$(document).ready(function(){
    $('.collapsible').collapsible();
  });
		
		document.addEventListener('DOMContentLoaded', function() {
   		var elems = document.querySelectorAll('.sidenav');
    	var instances = M.Sidenav.init(elems);

    	var elems = document.querySelectorAll('.fixed-action-btn');
    		var instances = M.FloatingActionButton.init(elems);

  		});

		 var formula = document.getElementById('formulas')

		 var solves = document.getElementById('solve')

		 var title = document.getElementById('head')

		 function solve(){

		 	$("#floatBtn").addClass('scale-out')

		 	$("#floatBtn").removeClass('scale-in')

		 	formula.setAttribute('style','opacity:0')

		 	

		 	title.style.opacity = 0;

		 	window.setTimeout(function(){

		 		formula.setAttribute('style','display:none ')

		 		solves.setAttribute('style',' opacity:1; display:block')

		 		title.innerHTML = 'Solve'

		 		title.style.opacity = 1;

		 	},200)

		 	


		 }

		  function formule(){

		  	$("#floatBtn").toggleClass('scale-in')

		  	$("#floatBtn").removeClass('scale-out')

		  	title.style.opacity = 0;

		  	solves.setAttribute('style','opacity:0')

		 	

		 	

		 	window.setTimeout(function(){

		 		

		 		solves.setAttribute('style','display:none')

		 		formula.setAttribute('style','display:block;opacity:1')

		 		title.innerHTML = 'Formulas and Equations'

		 		title.style.opacity = 1;
		 	

		 	},200)


		 }