var dark = JSON.parse(localStorage.getItem('dark')) ? localStorage.getItem('dark') : false

var img = dark ? "img/logic_no_fodno.png" : "img/logic_fondo_black.png"
$(document).ready(function(){
   
  
if(dark){

	$('#darkSwitch').prop('checked', true)

	$('#logo').attr("src","img/logic_no_fodno.png")

	$('#darkSwitch_pc').prop('checked', true)

	$(".card").toggleClass('grey darken-4')

	$(".dropdown-content").addClass('grey darken-4')


	$(".card").toggleClass('white-text ')

	$("html").toggleClass('grey darken-5')

	$(".sidenav").toggleClass('grey darken-5')

	$(".collapsible-header").toggleClass('grey darken-4')

	$(".collapsible-header").toggleClass('border')

	$(".collapsible").toggleClass('border')

	$(".collapsible-body").toggleClass('border')

	$(".material-icons").toggleClass('white-text')

	$(".topic").toggleClass('white-text')

	

	$("#head").toggleClass('white-text')



}

});
function darkToggle(){



	dark = dark ? false: true;

	imgSrc = dark ? "img/logic_no_fodno.png" : "img/logic_fondo_black.png"
	

	$('#darkSwitch').prop('checked', dark)

	$('#darkSwitch_pc').prop('checked', dark)

	

	localStorage.setItem('dark',dark)

	$('#logo').attr("src",imgSrc)

	console.log(localStorage.getItem('dark'))

	$(".collapsible-header").toggleClass('grey darken-4')

	$(".collapsible-header").toggleClass('border')

	$(".collapsible").toggleClass('border')

	$(".collapsible-body").toggleClass('border')

	$(".dropdown-content").toggleClass('grey darken-4')

	$(".card").toggleClass('grey darken-4')

	$(".card").toggleClass('white-text ')

	$("html").toggleClass('grey darken-5')

	$(".sidenav").toggleClass('grey darken-5')

	$(".material-icons").toggleClass('white-text')

	$(".topic").toggleClass('white-text')

	$("#head").toggleClass('white-text')
}