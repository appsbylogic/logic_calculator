let figura = 'cube';
let resultado;
let area
let perimetro
function calcular(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $(".result_card").addClass("show");
    switch(figura){

        case "cube":
            resultado = cubo();
           
        break;

        case "cuboid":
            resultado = cuboide();

        break;
        case "cone":
            resultado = cono();

        break;
        case "cylinder":
            resultado = cilindro();

        break;
        case "sphere":
            resultado = esfera();

        break;


    }

   

    $("#area").html("<b>Volume:</b> " + resultado);


}

function cubo(){

    return [ $("#lado").val()**3]

}

function cuboide(){

    return [$("#lado1").val()*$("#lado2").val() * $("#height").val()]

}

function cono(){

    return [ (Math.PI * $("#radio").val()**2 * $("#height").val())/3 ]

}

function cilindro(){

    return [Math.PI * $("#radio").val()**2 * $("#height").val()]

}

function esfera(){
    return [ (4/3 * Math.PI * ($("#radio").val()**3 ) ) ];
}



function changeInput(figure){

    figura = figure;

    switch(figure){

        case "cube":
            $(".figureName").html("Cube")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Side</label> 

                </div>

            </div>
            
            `)

        break;

        case "cuboid":
                $(".figureName").html("Cuboid")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado1" type="number" >
                    <label for="lado1">Side a</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado2" type="number" >
                    <label for="lado2">Side b</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="height" type="number" >
                    <label for="height">Height</label> 

                </div>

            </div>
            
            `)

        break;

        case "cone":
                $(".figureName").html("Cone")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="radio" type="number" >
                    <label for="radio">Radius</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="height" type="number" >
                    <label for="height">Height</label> 

                </div>

            </div>
            
            `)

        break;

        case "cylinder":
                $(".figureName").html("Cylinder")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="radio" type="number" >
                    <label for="radio">Radius</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="height" type="number" >
                    <label for="height">Height</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "sphere":
                $(".figureName").html("Sphere")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="radio" type="number" >
                    <label for="radio">Radius</label> 

                </div>

            </div>

           

           
            
            `)

        break;

       

    }

}