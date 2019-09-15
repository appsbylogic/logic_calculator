let d = $("#d");
let f = $("#f");
let w = $("#w");

function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
	$('.result_card').addClass('show')

    let resultado = 'Invalid operation (Remember to leave blank the value to calculate)';

    if(d.val() == '' && w.val() == '' && f.val() == ''){

        $("#resultado").html(resultado);
        return;
    }

    if(w.val() == ''){

        resultado = d.val()*f.val();

        $("#resultado").html("<b>Work</b> = " + resultado + " J");

    }
    
    if(f.val() == ''){

        
        resultado = v.val()/d.val();
        $("#resultado").html("<b>Force</b> = " + resultado + "N");
    }

    if(d.val() == ''){
        
        resultado = v.val() / f.val(); 
        $("#resultado").html("<b>Distance</b> = " + resultado + "m");
    }

   
    

}