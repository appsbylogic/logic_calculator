var bases = []

var terminos = []

function insert(c){
    $('#preview').append('<span class="appendText">'+c+'</span>')



    if(typeof c !== 'string'){

        bases.push(c)

    }else{

        bases.join()
        
        terminos.push(bases.join(''))
        
        bases = []

        

    }

    
}

function eliminar(){
    $('.appendText').last().remove()

}

function borrarTodo(){

    $('.appendText').remove();

}

