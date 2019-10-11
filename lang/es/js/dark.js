var dark = window.matchMedia('(prefers-color-scheme: dark)').matches

setSystem();

function setSystem(){
	if(localStorage.getItem('manual')){

		if(JSON.parse(localStorage.getItem('manual'))){
			
			$("#modeSelector").html("Manual")
		}

		if( JSON.parse(localStorage.getItem('manual')) && localStorage.getItem('dark')){
			dark = JSON.parse(localStorage.getItem('dark'))
			$("#modeSelector").html("Manual")
		}else{
			dark = window.matchMedia('(prefers-color-scheme: dark)').matches
			$("#modeSelector").html("Tema del sistema (Android 10)")
		}
	
	}else{
		$("#modeSelector").html("Tema del sistema (Android 10)")
	}
	addDark();	
}

var img = dark ? "img/logic_fondo_black.png" : "img/logic_no_fodno.png"

addDark()
function darkToggle(){



	dark = dark ? false: true;

	imgSrc = dark ? "img/logic_no_fodno.png" : "img/logic_fondo_black.png"
	

	$('#darkSwitch').prop('checked', dark)

	$('#darkSwitch_pc').prop('checked', dark)



	localStorage.setItem('dark',dark)

	$('#logo').attr("src",imgSrc)

	console.log(localStorage.getItem('dark'))

	$(".collapsible-header").toggleClass('grey darken-fg')

	$(".collapsible-header").toggleClass('border')

	$(".collapsible").toggleClass('border')

	$(".collapsible-body").toggleClass('border')

	$(".dropdown-content").toggleClass('grey darken-fg')

	$(".card").toggleClass('grey darken-fg')

	$(".card").toggleClass('white-text ')

	$("html").toggleClass('grey darken-bg')

	$(".content").toggleClass('grey darken-bg')

	$(".sidenav").toggleClass('grey darken-bg')

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

	$(".card").addClass('grey darken-fg')

	$(".dropdown-content").addClass('grey darken-fg')

	$(".modal").addClass('grey darken-fg')

	$(".modal-footer").addClass('grey darken-fg')

	$(".modal").addClass('white-text')

	$(".modal-cancel").addClass('white-text')


	$(".card").addClass('white-text ')

	$("html").addClass('grey darken-bg')

	$(".content").addClass('grey darken-bg')

	$(".sidenav").addClass('grey darken-bg')

	$(".collapsible-header").addClass('grey darken-fg')

	$(".collapsible-header").addClass('border')

	$(".collapsible").addClass('border')

	$(".collapsible-body").addClass('border')

	$(".material-icons").addClass('white-text')

	$(".topic").addClass('white-text')

	

	$("#head").addClass('white-text')

	$('.btnEditText').removeClass('white-text')




}else{


	$('#darkSwitch').prop('checked', false)

	$('#logo').attr("src","img/logic_fondo_black.png")

	$('#darkSwitch_pc').prop('checked', false)

	$(".card").removeClass('grey darken-fg')

	$(".dropdown-content").removeClass('grey darken-fg')

	$(".modal").removeClass('grey darken-fg')

	$(".modal-footer").removeClass('grey darken-fg')

	$(".modal").removeClass('white-text')

	$(".modal-cancel").removeClass('white-text')


	$(".card").removeClass('white-text ')

	$("html").removeClass('grey darken-bg')

	$(".content").removeClass('grey darken-bg')

	$(".sidenav").removeClass('grey darken-bg')

	$(".collapsible-header").removeClass('grey darken-fg')

	$(".collapsible-header").removeClass('border')

	$(".collapsible").removeClass('border')

	$(".collapsible-body").removeClass('border')

	$(".material-icons").removeClass('white-text')

	$(".topic").removeClass('white-text')

	

	$("#head").removeClass('white-text')

	$('.btnEditText').removeClass('white-text')


}

}