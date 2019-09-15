var operacion = []
var ans = 0
var inv = false

function invertir(){

   
        $('.invTrue').toggleClass('show')
        $('.invFalse').toggleClass('hide')
        $('.inv').toggleClass('invPress')
        console.log('asdasdasd')

    
}

function insertar(char){
    operacion.push(char)
    $('.blink').html('')
    $('.blink').append(operacion)
    var left = $(document).outerWidth() - $(window).width();
    $('.scrollRight').scrollLeft(10000);

}

function eliminar(){
    operacion.pop()
    $('.blink').html('')
    $('.blink').append(operacion)

}

function eliminarTodo(){
    operacion = []
    $('.blink').html('')
    $('.blink').append(operacion)

}


function solve(){

    for(var i = 0; i < operacion.length; i++){

        if(operacion[i] == '!'){
            
            for(var a = operacion[i-1]-1;a>1;a--){
               
                operacion[i-1] = a * operacion[i-1] 
               
            }
            operacion.splice(i,1)

            i-=1
                
    
        }else if (operacion[i]=='×'){

            operacion[i] = '*'
    
        }else if(operacion[i] == '÷'){
    
            operacion[i] = '/'
    
        }else if(operacion[i] == 'sin('){
    
            operacion[i] = 'MathD.tan('
    
        }else if(operacion[i] == 'cos('){
    
            operacion[i] = 'MathD.cos('
    
        }else if(operacion[i] == 'tan('){
    
            operacion[i] = 'MathD.tan('
    
        }
        else if(operacion[i] == 'π'){
    
            

            if(Number.isInteger(operacion[i-1])){

                operacion[i] = '*(' + Math.PI + ')'

            }else{

                operacion[i] = '(' + Math.PI + ')'

            }
    
        }else if(operacion[i] == '√('){

            operacion[i] = 'Math.sqrt('

        }else if(operacion[i] == '<sup>3</sup>√('){

            operacion[i] = 'Math.cbrt('

        }else if(operacion[i] == '%'){

            operacion[i] = '/100'

        }else if(operacion[i] == 'log('){

            operacion[i] = 'Math.log10('

        }
        else if(operacion[i] == 'ln('){

            operacion[i] = 'Math.log('

        }else if(operacion[i] == '^2'){

            operacion[i] = '**2'

        }else if(operacion[i] == '^3'){

            operacion[i] = '**3'

        }else if(operacion[i] == '^'){

            operacion[i] = '**'

        }else if(operacion[i] == 'tan<sup>-1</sup>('){
    
            operacion[i] = 'MathD.atan('
    
        }else if(operacion[i] == 'cos<sup>-1</sup>('){
    
            operacion[i] = 'MathD.acos('
    
        }else if(operacion[i] == 'sin<sup>-1</sup>('){
    
            operacion[i] = 'MathD.asin('
    
        }else if(operacion[i] == '10^'){
    
            operacion[i] = '10**'
    
        }


    }

    var resolver = operacion.join().replace(/,/g,'')
    console.log(resolver)
    $('.scrollRight').scrollLeft(10000);
    try {
        $('.blink').html(eval(resolver))
         operacion = []
         operacion.push(eval(resolver))
        
        ans = eval(resolver)
    } catch (error) {
        
        if(error.message == "Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence"){
            let storeNum = []
            let storeExp = []
            let addP1 = false;
            let addP2 = false;
            for(var i = operacion.length;i>=0;i--){

                if(addP1){
                    operacion.splice(i+2,0,")")
                    addP1 = false;
                }
                
                

                if(operacion[i] == "**" || operacion[i] == "**2" || operacion[i] == "**3"){
                    addP1 = true
                }
                if(operacion[i] == "-"){
                    addP2 = true
                }

                if(addP2){
                    operacion.splice(i+1,0,"(")
                    addP2 = false;
                    i=-1;
                }
                
                

            }

            console.log(operacion)
            resolver = operacion.join().replace(/,/g,'')
            $('.blink').html(eval(resolver))
            operacion = []
            operacion.push(eval(resolver))

            return;

        }

        if(error.message == "Unexpected end of input" || "missing ) after argument list"){
            
            $('.blink').html(eval(resolver+")"))
            operacion = []
            operacion.push(eval(resolver+")"))
        }else{
            $('.blink').html('Syntax Error')
        operacion = []
  
        }
        
        
    }
    

}

function tanDeg(angle){
    return Math.tan(angle * (Math.PI/180));
}

function atanDeg(angle){
    return Math.atan(angle )*(180/Math.PI);
}
var toDegree = function (radians) {
    return radians * (180 / Math.PI);
}

var toRadians = function (degree) {
    return degree * (Math.PI / 180);
};


var roundNumber = function(number, decimals) {
    decimals = decimals || 5;
    return number
}
var MathD = {
    sin: function(number){
        return roundNumber(Math.sin(toRadians(number)));
    },
    cos: function(number){
        return roundNumber(Math.cos(toRadians(number)));
    },
    tan: function(number){
        return roundNumber(Math.tan(toRadians(number)));
    },
    asin: function(number){
        return roundNumber(toDegree(Math.asin(number)));
    },
    acos: function(number){
       return roundNumber(toDegree(Math.acos(number)));
   },
   atan: function(number){
       return roundNumber(toDegree(Math.atan(number)));
   }
};


document.addEventListener('keydown', function(e){
    console.log(e.key)
    if(parseInt(e.key)){

        insertar(e.key)

    }
    
    if(e.key == '-' || e.key=='+' || e.key=='!' || e.key=='^' || e.key=='(' || e.key==')' || e.key=='%'){

        insertar(e.key)

    }

    if(e.key=='Backspace'){

        eliminar()

    }

    if(e.key=='Enter'){

        solve()

    }

    if(e.key=='*'){

        insertar('×')

    }

    if(e.key=='/'){

        insertar('÷')

    }

})

var conversion = document.getElementById('conversiones')

var keyboard= document.getElementById('keyboard')
var calc = document.getElementById('calculadora')

function conversiones(){

    $(".calculadora").css({"-webkit-transform":"translateX(-500vw)"},700)

    $(".keyboard").css({"-webkit-transform":"translateX(-500vw)"},700)
    window.setTimeout(function(){

		conversion.setAttribute('style','display:block')

        calc.setAttribute('style',' display:none')
        
        keyboard.setAttribute('style',' display:none')

	},150)

}

function calculadora(){

    $(".conversiones").css({"-webkit-transform":"translateX(-500vw)"},700)	

    window.setTimeout(function(){

        calc.setAttribute('style','display:block')
        
        keyboard.setAttribute('style','display:block')

		conversion.setAttribute('style',' display:none')

	},150)

}