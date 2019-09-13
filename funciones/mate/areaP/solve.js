let figura = 'square';
let resultado;
let area
let perimetro
function calcular(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    $(".result_card").addClass("show");
    switch(figura){

        case "square":
            resultado = cuadrado();
           
        break;

        case "rectangle":
            resultado = rectangulo();

        break;
        case "triangle":
            resultado = triangulo();

        break;
        case "circle":
            resultado = circulo();

        break;
        case "rhombus":
            resultado = rombo();

        break;

        case "trapeze":
            resultado = trapecio();

        break;

        case "polygon":
            resultado = poligono();

        break;

    }

    area = resultado[0]
    perimetro = resultado[1];

    $("#area").html("<b>Area:</b> " + area);
    $("#perimetro").html("<b>Perimetro:</b> " + perimetro)
    console.log(area + ' ' + perimetro)

}

function cuadrado(){

    return [ $("#lado").val()**2,$("#lado").val()*4]

}

function rectangulo(){

    return [$("#lado1").val()*2 + $("#lado2").val()*2, $("#lado1").val()*$("#lado2").val()]

}

function triangulo(){

    return [$("#base").val()*$("#base").val()/2, $("#base").val()*3]

}

function circulo(){

    return [Math.PI * $("#radio").val()**2, Math.PI * $("#radio").val() * 2]

}

function rombo(){
    return [$("#mayor").val() * $("#menor").val() / 2, 4 * (Math.sqrt(($("#mayor").val()**2 + $("#menor").val()**2)))];
}

function trapecio(){

    return [ ( $("#mayor").val() + $("#menor").val() ) * $("#altura") / 2 , $("#mayor").val() + $("#menor").val() + ($("#lado").val()*2)] ;

}

function poligono(){

    let perimetro = $("#nLados").val() * $("#lado").val();

    let area = perimetro * $("#apotema").val() / 2

    return [ area,perimetro] ;

}

function changeInput(figure){

    figura = figure;

    switch(figure){

        case "square":
            $(".figureName").html("Square")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Side</label> 

                </div>

            </div>
            
            `)

        break;

        case "rectangle":
                $(".figureName").html("Rectangle")
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
            
            `)

        break;

        case "triangle":
                $(".figureName").html("Equilateral Triangle")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="base" type="number" >
                    <label for="base">Base</label> 

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

        case "circle":
                $(".figureName").html("Circle")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="radio" type="number" >
                    <label for="radio">Radius</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "rhombus":
                $(".figureName").html("Rhombus")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="mayor" type="number" >
                    <label for="mayor">Diagonal one</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="menor" type="number" >
                    <label for="menor">Diagonal two</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "trapeze":
                $(".figureName").html("Trapeze")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="mayor" type="number" >
                    <label for="mayor">Base one</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="menor" type="number" >
                    <label for="menor">Base two</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Side</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="altura" type="number" >
                    <label for="altura">Height</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "polygon":
                $(".figureName").html("Polygon")
            $(".inputs").html(`

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="nLados" type="number" >
                    <label for="nLados">Side Number</label> 

                </div>

            </div>
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Side</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="apotema" type="number" >
                    <label for="apotema">Apothem</label> 

                </div>

            </div>

           
            
            `)

        break;

    }

}