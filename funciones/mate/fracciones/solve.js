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

    let resultado = "Missing values";

    if($(".option").val() == 1){

        console.log($("#operationSymbol").html())

        let fraction1 = num1.val() + '/' + den1.val()
        
        let fraction2 = num2.val() + '/' + den2.val()

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

        $("#resultado").html("<b>Result:</b> " + resultado.n + "/" + resultado.d + " = " + resultado);

    }else{
        

        resultado = reduce($("#reduceNum").val(), $("#reduceDen").val())

        $("#resultado").html("<b>Result:</b> " + resultado[0] + "/" + resultado[1]);

    }
}