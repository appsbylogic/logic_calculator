let w = $("#w");
let t = $("#t");
let p = $("#p");

function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

    let resultado = 'Invalid operation (Remember to leave blank the value to calculate)';

    if(w.val() == '' && p.val() == '' && t.val() == ''){

        $("#resultado").html(resultado);
        return;
    }

    if(p.val() == ''){

        resultado = w.val()/t.val();

        $("#resultado").html("<b>Power</b> = " + resultado + " W");

    }
    
    if(t.val() == ''){

        
        resultado = w.val()/p.val();
        $("#resultado").html("<b>Time</b> = " + resultado + "s");
    }

    if(w.val() == ''){
        
        resultado = p.val() * t.val();
        $("#resultado").html("<b>Work</b> = " + resultado + "J");
    }

   
    

}