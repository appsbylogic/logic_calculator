var q = $('#ch')
var e = $('#field')
var r = $('#r')
var q_text = $('#ch_text')
var e_text = $('#field_text')
var r_text = $('#r_text')
var formula = $('select.formula')

var result_card = $('.result_card')

var result_text = $('#result')

var resVar;

var unidad;

formula.on('change', function(){

    
    

    $('#values').css('opacity','0')

    window.setTimeout(function(){

        $('#values').css('opacity','1')

        if(formula.val() == 1){

        
    
            r_text.html('F')
        
        }else{
        
    
        
            r_text.html('r')
        
        }

    },850)
    
   


});


function calcular(){

    $("html, body").animate({ scrollTop: $(document).height() }, 1000);

    result_card.addClass('show')

    var resultado

    if(formula.val() == 1){

        resultado = campo1(q.val(),e.val(),r.val())

    }else{

        resultado = campo2(q.val(),e.val(),r.val())

    }

    result_text.html(resVar + resultado + unidad)


}

function campo1(q,e,f){
    console.log(e)

    if(f=='' && e=='' && q==''){
        unidad =''
        resVar = ''
        var returnValue = lang == "en" ?  "No values added" : "No hay valores añadidos";
        return returnValue;
    }

    if(e == ''){
        unidad =' N/C'
        resVar = 'E = '
        return f/q;


    }else

    if(q == ''){
        unidad =' C'
        resVar = 'q = '
        return f/e;

    }else

    if(f == ''){
        unidad =' N'
        resVar = 'f = '
        return e*q;

    }else{
        unidad =''
        resVar = ''
        var returnValue = lang == 'en' ? 'Invalid operation (Remember to leave blank the value to calculate)' : 'Operación inválida (Recuerda dejar en blanco el valor a calcular)';
        return returnValue;
    }

}

function campo2(q, e, r){

    var k = 9e9;

    if(e == ''){
        unidad =' N/C'
        resVar = 'E = '
        return k*q / Math.pow(r,2);

    }

    if(q == ''){
        unidad =' C'
        resVar = 'q = '
        return e*Math.pow(r,2)/k;

    }

    if(r == ''){
        unidad =' m'
        resVar = 'r = '
        return Math.sqrt(k*q/e);

    }


}