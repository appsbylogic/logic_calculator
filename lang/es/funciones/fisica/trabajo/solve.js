let d = $("#d");
let f = $("#f");
let w = $("#w");

function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

    let resultado = 'Operación inválida (Recuerda dejar en blanco el valor a calcular)';

    if(d.val() == '' && w.val() == '' && f.val() == ''){

        $("#resultado").html(resultado);
        return;
    }

    if(w.val() == ''){

        resultado = d.val()*f.val();

        $("#resultado").html("<b>Trabajo</b> = " + resultado + " J");

    }
    
    if(f.val() == ''){

        
        resultado = v.val()/d.val();
        $("#resultado").html("<b>Fuerza</b> = " + resultado + "N");
    }

    if(d.val() == ''){
        
        resultado = v.val() / f.val(); 
        $("#resultado").html("<b>Distancia</b> = " + resultado + "m");
    }

   
    

}