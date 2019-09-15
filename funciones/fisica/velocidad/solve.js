let d = $("#d");
let t = $("#t");
let v = $("#v");

function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

    let resultado = 'Invalid operation (Remember to leave blank the value to calculate)';

    if(d.val() == '' && v.val() == '' && t.val() == ''){

        $("#resultado").html(resultado);
        return;
    }

    if(v.val() == ''){

        resultado = d.val()/t.val();

        $("#resultado").html("<b>Velocity</b> = " + resultado + " m/s");

    }
    
    if(t.val() == ''){

        
        resultado = d.val()/v.val();
        $("#resultado").html("<b>Time</b> = " + resultado + "s");
    }

    if(d.val() == ''){
        
        resultado = t.val() * v.val();
        $("#resultado").html("<b>Distance</b> = " + resultado + "m");
    }

   
    

}