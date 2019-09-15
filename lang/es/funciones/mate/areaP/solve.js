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

    $("#area").html("<b>Área:</b> " + area);
    $("#perimetro").html("<b>Perímetro:</b> " + perimetro)
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
            $(".figureName").html("Cuadrado")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Lado</label> 

                </div>

            </div>
            
            `)

        break;

        case "rectangle":
                $(".figureName").html("Rectángulo")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado1" type="number" >
                    <label for="lado1">Lado a</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado2" type="number" >
                    <label for="lado2">Lado b</label> 

                </div>

            </div>
            
            `)

        break;

        case "triangle":
                $(".figureName").html("Triángulo Equilátero")
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
                    <label for="height">Altura</label> 

                </div>

            </div>
            
            `)

        break;

        case "circle":
                $(".figureName").html("Círculo")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="radio" type="number" >
                    <label for="radio">Radio</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "rhombus":
                $(".figureName").html("Rombo")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="mayor" type="number" >
                    <label for="mayor">Diagonal mayor</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="menor" type="number" >
                    <label for="menor">Diagonal menor</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "trapeze":
                $(".figureName").html("Trapecio")
            $(".inputs").html(`
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="mayor" type="number" >
                    <label for="mayor">Base mayo</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="menor" type="number" >
                    <label for="menor">Base menor</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Lado</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="altura" type="number" >
                    <label for="altura">Altura</label> 

                </div>

            </div>

           
            
            `)

        break;

        case "polygon":
                $(".figureName").html("Polígono")
            $(".inputs").html(`

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="nLados" type="number" >
                    <label for="nLados">Número de lados</label> 

                </div>

            </div>
            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="lado" type="number" >
                    <label for="lado">Lado</label> 

                </div>

            </div>

            <div class="row">

                <div class="input-field col s12 m6">

                    <input id="apotema" type="number" >
                    <label for="apotema">Apotema</label> 

                </div>

            </div>

           
            
            `)

        break;

    }

}