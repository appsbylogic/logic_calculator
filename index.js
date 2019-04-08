document.addEventListener('deviceready', function(){
StatusBar.backgroundColorByHexString('#c62828');});

$('.dropdown-trigger').dropdown({ constrainWidth: false, alignment:'left' });



$("#floatBtn").on('click', function(){

    		

    		console.log()

    	})

$(document).ready(function(){
    $('.collapsible').collapsible();
		$('.tabs').tabs()
		$('select').formSelect();
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
		 	$("#formulas").css({"-webkit-transform":"translateX(-500vw)"},700)

		 	$("#floatBtn").addClass('scale-out')

		 	$("#floatBtn").removeClass('scale-in')


		 	window.setTimeout(function(){

		 		
		 		
				solves.setAttribute('style',' display:block')

		 		
				formula.setAttribute('style','display:none')

		 	},150)

		 	


		 }

		  function formule(){

		  	$("#solve").css({"-webkit-transform":"translate(-500vw,0)"},700)



		  	$("#floatBtn").toggleClass('scale-in')

		  	$("#floatBtn").removeClass('scale-out')
		  	
	
		  	window.setTimeout(function(){

				formula.setAttribute('style','display:block')

		 		solves.setAttribute('style',' display:none')



		 	},150)


		 	


	

		 		









		 }