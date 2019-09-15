let w = $("#w");
let t = $("#t");
let p = $("#p");

function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

    let resultado = 'Operación inválida (Recuerda dejar en blanco el valor a calcular)';

    if(w.val() == '' && p.val() == '' && t.val() == ''){

        $("#resultado").html(resultado);
        return;
    }

    if(p.val() == ''){

        resultado = w.val()/t.val();

        $("#resultado").html("<b>Potencia</b> = " + resultado + " W");

    }
    
    if(t.val() == ''){

        
        resultado = w.val()/p.val();
        $("#resultado").html("<b>Tiempo</b> = " + resultado + "s");
    }

    if(w.val() == ''){
        
        resultado = p.val() * t.val();
        $("#resultado").html("<b>Trabajo</b> = " + resultado + "J");
    }

   
    

}