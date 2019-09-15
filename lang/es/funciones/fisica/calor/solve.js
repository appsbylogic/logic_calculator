let m = $("#m");
let c = $("#c");
let t = $("#t");
let q = $("#q");

function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

    let resultado = 'Operación inválida (Recuerda dejar en blanco el valor a calcular)';

    if(m.val() == '' && c.val() == '' && t.val() == '' && q.val() == ''){

        $("#resultado").html(resultado);
        return;
    }

    if(q.val() == ''){

        resultado = m.val()*c.val()*t.val();

        $("#resultado").html("<b>Transferencia de Calor (Q) = </b> = " + resultado + " J");

    }
    
    if(m.val() == ''){

        
        resultado = q.val()/(c.val()*t.val());
        $("#resultado").html("<b>Masa/b> = " + resultado + "kg");
    }

    if(c.val() == ''){
        
        resultado = q.val()/(m.val()*t.val());
        $("#resultado").html("<b>Calor</b> = " + resultado + "J/(kg * C)");
    }

    if(t.val() == ''){
        
        resultado = q.val()/(m.val()*c.val());
        $("#resultado").html("<b>ΔT</b> = " + resultado + "°C");
    }
   
    

}