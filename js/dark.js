var dark = JSON.parse(localStorage.getItem('dark')) ? localStorage.getItem('dark') : false

var img = dark ? "img/logic_no_fodno.png" : "img/logic_fondo_black.png"

addDark()

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

	$(".content").toggleClass('grey darken-5')

	$(".sidenav").toggleClass('grey darken-5')

	$(".material-icons").toggleClass('white-text')

	$(".topic").toggleClass('white-text')

	$("#head").toggleClass('white-text')

	$('.btnEditText').removeClass('white-text')



}

function addDark(){

	  
if(dark){

	$('#darkSwitch').prop('checked', true)

	$('#logo').attr("src","img/logic_no_fodno.png")

	$('#darkSwitch_pc').prop('checked', true)

	$(".card").addClass('grey darken-4')

	$(".dropdown-content").addClass('grey darken-4')

	$(".modal").addClass('grey darken-4')

	$(".modal-footer").addClass('grey darken-4')

	$(".modal").addClass('white-text')

	$(".modal-cancel").addClass('white-text')


	$(".card").addClass('white-text ')

	$("html").addClass('grey darken-5')

	$(".content").addClass('grey darken-5')

	$(".sidenav").addClass('grey darken-5')

	$(".collapsible-header").addClass('grey darken-4')

	$(".collapsible-header").addClass('border')

	$(".collapsible").addClass('border')

	$(".collapsible-body").addClass('border')

	$(".material-icons").addClass('white-text')

	$(".topic").addClass('white-text')

	

	$("#head").addClass('white-text')

	$('.btnEditText').removeClass('white-text')




}else{


	$('#darkSwitch').prop('checked', false)

	$('#logo').attr("src","img/logic_no_fodno.png")

	$('#darkSwitch_pc').prop('checked', false)

	$(".card").removeClass('grey darken-4')

	$(".dropdown-content").removeClass('grey darken-4')

	$(".modal").removeClass('grey darken-4')

	$(".modal-footer").removeClass('grey darken-4')

	$(".modal").removeClass('white-text')

	$(".modal-cancel").removeClass('white-text')


	$(".card").removeClass('white-text ')

	$("html").removeClass('grey darken-5')

	$(".content").removeClass('grey darken-5')

	$(".sidenav").removeClass('grey darken-5')

	$(".collapsible-header").removeClass('grey darken-4')

	$(".collapsible-header").removeClass('border')

	$(".collapsible").removeClass('border')

	$(".collapsible-body").removeClass('border')

	$(".material-icons").removeClass('white-text')

	$(".topic").removeClass('white-text')

	

	$("#head").removeClass('white-text')

	$('.btnEditText').removeClass('white-text')


}

}