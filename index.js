var storage = $('.card-formulas')

var fisica = true;


document.addEventListener('deviceready', function(){
	StatusBar.backgroundColorByHexString('#e53935 ');
	admob.banner.show({
		id: {
		  // replace with your ad unit IDs
		  android: 'ca-app-pub-4382391968703736/1926946762',
		  ios: 'ca-app-pub-xxx/zzz',
		  
		},
	  })
});



$('.dropdown-trigger').dropdown({ constrainWidth: false, alignment:'left' });


var modal


var modal2

$(document).ready(function(){
	
	
	
  $('.collapsible').collapsible();
	$('.tabs').tabs()
	$('select').formSelect();
	$('.modal').modal();
	var elem = document.querySelector('.modal');
	modal = M.Modal.getInstance(elem);
	var elem2 = document.querySelector('.groupModal');
	modal2 = M.Modal.getInstance(elem2);
	if(localStorage.getItem('formulas-fisica') && fisica){

		storage.html(localStorage.getItem('formulas-fisica'))

	}

	if(localStorage.getItem('formulas-mate') && !fisica){

		storage.html(localStorage.getItem('formulas-mate'))

	}

	instance.close()
	editMode = false;

	addDark();

		$('head').append('<style>.groupBodyB:before{animation: spinBack .2s forwards;}</style>')

		$('head').append('<style>.groupBodyB:after{animation: spinBackL .2s forwards;}</style>')

		$('.groupBodyB').addClass('animReturn')

		$('.btnIcon').addClass('btnAnim')

		$('.btnIcon').html('mode_edit')

		$('.btnDelGroup').removeClass('scale-in')
		$('.btnDelGroup').addClass('scale-out')

		$('.btnFormula').removeClass('scale-in')
		$('.btnFormula').addClass('scale-out')

		$('.btnIcon').removeClass('btnAnim')

		$('.btnDelGroup').removeClass('showBtn')

		$('.btnFormula').removeClass('showBtn')

		$('.groupBody').removeClass('groupBodyA')

		$('.groupBody').removeClass('groupBodyB')
		
		$('.groupTitle').removeClass('grey-text')

		$('.formTxt').removeClass('grey-text text-lighten-1')

		$('.groupTitle').removeAttr('contenteditable')

		$('.formTxt').removeAttr('contenteditable')

  });

var instance	

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelector('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems,{

		direction: 'left',
		hoverEnabled:false

	});

	instance = M.FloatingActionButton.getInstance(elems);

	

});

var formula = document.getElementById('formulas')

var solves = document.getElementById('solve')
var aprender = document.getElementById('learn')

var title = document.getElementById('head')

var currentPage = 'solve'

var floatBtn = M.FloatingActionButton.getInstance(document.querySelectorAll('.fixed-action-btn'))

function solve(){

	if(currentPage=='formulas'){

		console.log('asdasdasd')
		currentPage = 'solve'
	instance.close()

	$("#formulas").css({"-webkit-transform":"translateX(-500vw)"},700)

	$("#floatBtn").addClass('scale-out')

	$("#floatBtn").removeClass('scale-in')


	window.setTimeout(function(){	 		

		$("#floatBtn").css('display','none')

		solves.setAttribute('style',' display:block')

		 		
		formula.setAttribute('style','display:none')

	},150)	
	
	}else{
		
		$("#learn").css({"-webkit-transform":"translateX(-500vw)"},700)

		window.setTimeout(function(){	 		

			
	
			solves.setAttribute('style',' display:block')
	
					 
			aprender.setAttribute('style','display:none')
	
		},150)
	}


}

function formule(){
	
	if(currentPage == "solve"){

	
	$("#floatBtn").css('display','block')

	$("#solve").css({"-webkit-transform":"translate(-500vw,0)"},700)		  	
		  
	window.setTimeout(function(){

		$("#floatBtn").toggleClass('scale-in')

		$("#floatBtn").removeClass('scale-out')

		formula.setAttribute('style','display:block')

		solves.setAttribute('style',' display:none')

	},150)

	}else{
		$("#floatBtn").css('display','block')
		$("#learn").css({"-webkit-transform":"translateX(-500vw)"},700)

		window.setTimeout(function(){	 		

			$("#floatBtn").toggleClass('scale-in')

			$("#floatBtn").removeClass('scale-out')
	
			formula.setAttribute('style',' display:block')
	
					 
			aprender.setAttribute('style','display:none')
	
		},150)
	}

	currentPage = 'formulas';
}

function learn(){
				
	
	if(currentPage=="solve"){
	
		$("#solve").css({"-webkit-transform":"translate(-500vw,0)"},700)		  	
			
		window.setTimeout(function(){

			aprender.setAttribute('style','display:block')

			solves.setAttribute('style',' display:none')

		},150)

	}else{

		

		$("#formulas").css({"-webkit-transform":"translate(-500vw,0)"},700)	
		
		$("#floatBtn").addClass('scale-out')

		$("#floatBtn").removeClass('scale-in')
			
		window.setTimeout(function(){
			$("#floatBtn").css('display','none')

			aprender.setAttribute('style','display:block')

			formula.setAttribute('style',' display:none')

		},150)

	}

	currentPage = 'learn'
}


function addGroup(){

	console.log($('.card-formulas'))

	$("html, body").animate({ scrollTop: $(document).height() }, 1000);

	if(dark){

		$(".card-formulas").append('<div class="row">\
	<div class="col s12">\
		<div class="card white-text grey darken-4">\
			<div class="card-content">\
					<a class="btnDelGroup showBtn btn-floating btn-small right waves-effect waves-light grey lighten-3 scale-transition scale-in"><i class="btnEditText material-icons grey-text">close</i></a>\
					<a class="btnFormula showBtn btn-floating btn-small right waves-effect waves-light grey lighten-3 scale-transition scale-in" style="right: 10px;"><i class="btnEditText material-icons grey-text">add</i></a>\
				<ul>\
					<h5 class="groupTitle new grey-text" contenteditable onfocus="selectAll(this)">Insert title</h5>\
					<hr>\
					<li><blockquote class="groupBody groupBodyA groupBodyB"><i class="formTxt new grey-text text-lighten-1" contenteditable onfocus="selectAll(this)">Insert formula</i></blockquote></li>\
				</ul>\
			</div>\
		</div>\
	</div></div>')


	}else{

	$(".card-formulas").append('<div class="row">\
	<div class="col s12">\
		<div class="card">\
			<div class="card-content">\
					<a class="btnDelGroup showBtn btn-floating btn-small right waves-effect waves-light grey lighten-3 scale-transition scale-in"><i class="btnEditText material-icons grey-text">close</i></a>\
					<a class="btnFormula showBtn btn-floating btn-small right waves-effect waves-light grey lighten-3 scale-transition scale-in" style="right: 10px;"><i class="btnEditText material-icons grey-text">add</i></a>\
				<ul>\
					<h5 class="groupTitle new grey-text" contenteditable onfocus="selectAll(this)">Insert title</h5>\
					<hr>\
					<li><blockquote class="groupBody groupBodyA groupBodyB"><i class="formTxt new grey-text text-lighten-1" contenteditable onfocus="selectAll(this)">Insert formula</i></blockquote></li>\
				</ul>\
			</div>\
		</div>\
	</div></div>')
	}

}

var editMode = false;

function editGroups(){

	
	
	$('.groupBody').addClass('groupBodyA')

	console.log('asdasd')

	

	if($('.groupTitle').attr('contenteditable')){

		instance.close()
		
		editMode = false;

		$('head').append('<style>.groupBodyB:before{animation: spinBack .2s forwards;}</style>')

		$('head').append('<style>.groupBodyB:after{animation: spinBackL .2s forwards;}</style>')

		$('.groupBodyB').addClass('animReturn')

		$('.btnIcon').addClass('btnAnim')

		$('.btnIcon').html('mode_edit')

		$('.btnDelGroup').removeClass('scale-in')
		$('.btnDelGroup').addClass('scale-out')

		$('.btnFormula').removeClass('scale-in')
		$('.btnFormula').addClass('scale-out')

		window.setTimeout(function(){

			$('.btnIcon').removeClass('btnAnim')

		},300)

		window.setTimeout(function(){

			$('.btnDelGroup').removeClass('showBtn')

			$('.btnFormula').removeClass('showBtn')

			$('.groupBody').removeClass('groupBodyA')

			$('.groupBody').removeClass('groupBodyB')

		},250)

		
		$('.groupTitle').removeClass('grey-text')

		$('.formTxt').removeClass('grey-text text-lighten-1')

		$('.groupTitle').removeAttr('contenteditable')

		$('.formTxt').removeAttr('contenteditable')

	}else{

		$('.groupTitle').addClass('grey-text ')

		$('.formTxt').addClass('grey-text text-lighten-1')

		editMode = true;
		instance.open()
		
		$('.btnDelGroup').addClass('showBtn')

		$('.btnFormula').addClass('showBtn')

		$('.groupBody').addClass('groupBodyA')

		$('.groupBody').addClass('groupBodyB')

		$('head').append('<style>.groupBodyB:before{animation: spin .2s forwards;}</style>')

		$('head').append('<style>.groupBodyB:after{animation: spinL .2s forwards;}</style>')

		$('.btnIcon').addClass('btnAnim')

		$('.btnIcon').html('done')

		window.setTimeout(function(){

		

			$('.btnIcon').removeClass('btnAnim')

		},300)

		window.setTimeout(function(){

			$('.btnDelGroup').addClass('scale-in')

			$('.btnFormula').addClass('scale-in')


		},150)

		



		$('.formTxt').attr('contenteditable', 'true')

		$('.groupTitle').attr('contenteditable', 'true')

	}

	if(fisica){
		localStorage.setItem('formulas-fisica', storage.html())

	}else{


		localStorage.setItem('formulas-mate', storage.html())
	}

	

}

var toastHTML = '<span>Formula deleted</span><button class="btn-flat toast-action" onclick="undo()">Undo</button>';

var lastParent;

var last;
var lastGroup;

$(document).on('click','.groupBody',function(e){
	

	if(e.offsetX < 5 && editMode){
		
		modal.open()

		last = e.target;

    }

})

$(document).on('click','.btnDelGroup',function(e){
	

		
	modal2.open()

	lastGroup = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;



})

function deleteFinalGroup(){

	$(lastGroup).addClass('scale-transition')
	
	$(lastGroup).addClass('scale-out')

	window.setTimeout(function(){
		$(lastGroup).remove()

	},400)
	


}

function deleteFinal(){



		$(last).remove()
}


$(document).on('click', '.btnFormula', function(e){


	$(e.target.parentNode.parentNode.lastElementChild).append('<li><blockquote  class="groupBody groupBodyA groupBodyB"><i class="formTxt new grey-text text-lighten-1" contenteditable="true" onfocus="selectAll(this)">Insert Formula</blockquote></li>')

})

function selectAll(e){


	if($(e).hasClass('new')){

		$(e).removeClass('new')

	var cell = e;
	// select all text in contenteditable
	// see http://stackoverflow.com/a/6150060/145346
	var range, selection;
	if (document.body.createTextRange) {
	  range = document.body.createTextRange();
	  range.moveToElementText(cell);
	  range.select();
	} else if (window.getSelection) {
	  selection = window.getSelection();
	  range = document.createRange();
	  range.selectNodeContents(cell);
	  selection.removeAllRanges();
	  selection.addRange(range);
	}

}
}