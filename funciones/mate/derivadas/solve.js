var bases = []

var terminos = []

function insert(c){
    $('#preview').append('<span class="appendText">'+c+'</span>')

    console.log($('span').last().text())

    if(typeof c !== 'string'){

        bases.push(c)

    }else{

        bases.join()
        
        terminos.push(bases.join(''))
        console.log(terminos)
        bases = []

        

    }

    
}

function eliminar(){
    $('span').last().remove()

}

function borrarTodo(){

    $('span').remove();

}

