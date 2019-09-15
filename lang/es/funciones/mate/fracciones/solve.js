let num1 = $("#a1");

let den1 = $("#b1");;

let num2 = $("#a2");;

let den2 = $("#b2");;

function changeOperation(val){

    $("#operationSymbol").html(val);

}


$(".option").on('change', function(){

    
    
    if($(".option").val() == 1){

        
    
        $('#firstOption').css('display','block')

        $('#reduce').css('display','none')
    
    }else{
    

        $('#firstOption').css('display','none')

        $('#reduce').css('display','block')
    
    }
    

   
   


});

function reduce(numerator,denominator){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator,denominator);
    return [numerator/gcd, denominator/gcd];
  }

function calcular(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $(".result_card").addClass("show");

    let resultado = "No se agregaron valores";

    if($(".option").val() == 1){

        console.log($("#operationSymbol").html())

        let fraction1 = num1.val() + '/' + den1.val()
        
        let fraction2 = num2.val() + '/' + den2.val()

        if(num1.val() == '' || num2.val() == '' || den1.val() == '' || den2.val() == ''){
            $("#resultado").html("<b>Resultado:</b> " +resultado);

            return

        }

        switch($("#operationSymbol").html()){

            case "+":
            resultado =  math.fraction(math.add(math.fraction(fraction1), math.fraction(fraction2)))
            break;

            case "-":
                resultado = math.fraction(math.subtract(math.fraction(fraction1), math.fraction(fraction2)))
            break;

            case "×":
                resultado = math.fraction(math.multiply(math.fraction(fraction1), math.fraction(fraction2)))
            break;

            case "÷":
                resultado = math.fraction(math.divide(math.fraction(fraction1), math.fraction(fraction2)))
            break;


        }

        console.log(resultado)

        $("#resultado").html("<b>Resultado:</b> " + resultado.n + "/" + resultado.d + " = " + resultado);

    }else{
        
        if($("#reduceNum").val() == '' || $("#reduceDen").val() == ''){
            $("#resultado").html("<b>Resultado:</b> " +resultado);

            return

        }

        resultado = reduce($("#reduceNum").val(), $("#reduceDen").val())


        $("#resultado").html("<b>Resultado:</b> " + resultado[0] + "/" + resultado[1]);

    }
}