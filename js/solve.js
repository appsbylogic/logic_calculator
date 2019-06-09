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
    
            operacion[i] = 'Math.sin('
    
        }else if(operacion[i] == 'cos('){
    
            operacion[i] = 'Math.cos('
    
        }else if(operacion[i] == 'tan('){
    
            operacion[i] = 'Math.tan('
    
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
    
            operacion[i] = 'Math.atan('
    
        }else if(operacion[i] == 'cos<sup>-1</sup>('){
    
            operacion[i] = 'Math.acos('
    
        }else if(operacion[i] == 'sin<sup>-1</sup>('){
    
            operacion[i] = 'Math.asin('
    
        }else if(operacion[i] == '10^'){
    
            operacion[i] = '10**'
    
        }


    }

    var resolver = operacion.join().replace(/,/g,'')
    console.log(resolver)
   
    try {
        $('.blink').html(eval(resolver))
         operacion = []
        
        ans = eval(resolver)
    } catch (error) {

        $('.blink').html('Syntax Error')
        operacion = []
  
        
    }
    

}

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