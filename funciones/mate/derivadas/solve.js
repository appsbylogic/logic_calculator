var bases = []

var derivada = []

var activar

var numero = 0;

var lastIsExp = false

var lastWasExp = false;

var terminos = []

var addExp = false;

function insert(c){

    lastWasExp = lastIsExp

    
    
    if(!addExp){

       

 
    
    if(c=='×'){
        $('#preview').append('<span class="appendText">'+ c +'</span>')

        derivada.push('*')

    }else if (c=='+'){
        $('#preview').append('<span class="appendText">'+' + '+'</span>')

        derivada.push(c)
    }else if(c=='-'){

        $('#preview').append('<span class="appendText">'+' - '+'</span>')

        derivada.push(c)

    }else if(c=='÷'){

        $('#preview').append('<span class="appendText">'+' ÷ '+'</span>')

        derivada.push('/')

    }else if(c=='('  && lastIsExp){

        activar = true

        $('#preview').append('<span class="appendText">'+'<sup>' + c + '</sup>' + '</span>')

        derivada.push(c)

    }else{

        $('#preview').append('<span class="appendText">'+c+'</span>')

        derivada.push(c)

    }

    activar = false

    }

    lastIsExp = false

    

}

function insertSup(c,activar){

    console.log(activar)

   if(c=='<sup>/</sup>' && !lastIsExp){

    console.log('add an exponent')

   }else{

    this.activar = activar

    $('#preview').append('<span class="appendText">'+c+'</span>')

    derivada.push(c.replace(/<sup>|<\/sup>/g, '') + 'true')

    console.log(derivada)


   }

    


}

function eliminar(){

if(!addExp){
    
    $('.appendText').last().remove()

    derivada.pop()

    
    if(lastWasExp){

        lastIsExp = true
        

    }

    if(derivada[derivada.length-1] == '^'){

        derivada.pop()

        lastWasExp = false

        lastIsExp = false

        

    }

    if(derivada[derivada.length-1].includes('true')){

        lastWasExp = true

        lastIsExp = true

        

    }


    console.log(derivada)

    }

}

function borrarTodo(){

if(!addExp){

    derivada = []

    $('.appendText').remove();
}
}

function calcular(){

    $('.resultadoDerivada').remove();

   var arrayJoin = derivada.join().replace(/\,|true/g, '')

    var derivadas = []

    console.log(arrayJoin)

    var result = math.derivative(arrayJoin, 'x').toString();

    derivadas.push(result)

    console.log(result.toString())

    $('.result_card').addClass('show')

    var result1 = result.toString().replace(/\*|\ /g, '')

  

    $('.cardResult').append("<blockquote class='resultadoDerivada'><i><b>f '(x)</b></i> = "+  result1 + "</blockquote>")
    
    var counter = 0

  while(result != 0 || result == 0){

        counter++
      

        result = math.derivative(result, 'x').toString();

        derivadas.push(result.replace(/\*|\ /g, ' '))

        if(result == 0 || counter==6) {

            break

        }


    }

    var func = ["f '"]

    for(var i=1;i < derivadas.length;i++){

        func.push("'")

        $('.cardResult').append('<blockquote class="resultadoDerivada"><i><b>' + func.join('').replace(',', '') + '(x)' + '</i></b> = ' + derivadas[i] + '</blockquote>')

    }
    

}

function addArray(){

    addExp = true;

    lastWasExp = lastIsExp

    console.log(lastIsExp)

    if(!lastIsExp){

        derivada.push('^')

        console.log(derivada)

        lastIsExp = true

    }

    

    

}

var elems1 = document.querySelector('.dropdown-trigger1');
var instances = M.Dropdown.init(elems1);
var instance = M.Dropdown.getInstance(elems1);

$('.dropdown-trigger1').dropdown({

    

    onCloseStart: function(){

        console.log(derivada)
        if(!activar && lastIsExp && lastWasExp){
            lastWasExp = false
            lastIsExp = false
            derivada.pop()

            console.log(derivada)

            

        }

    },

    onCloseEnd: function(){

        

        
        addExp = false;
      

    }

})


function hideKey(){

    if($('.keyboard').hasClass('showKeyboard')){

        $('.keyboard').removeClass('showKeyboard')

        $('.keyboard').addClass('hideKeyboard')

        $('.arrowUp').addClass('spinSignBack')

        $('.arrowUp').removeClass('spinSign')

    }else{

        $('.keyboard').addClass('showKeyboard')

        $('.keyboard').removeClass('hideKeyboard')

        $('.arrowUp').removeClass('spinSignBack')

        $('.arrowUp').addClass('spinSign')


    }

}
