
let unidadEntrada = metro;
let unidadSalida = sqrcm;
let temp = false;
$(".salida").val(convertirArea(1,unidadEntrada,unidadSalida));

function unidadE(unidad, abreviacion){
    $('.selectorEntrada').html(abreviacion);
    unidadEntrada = unidad;
    let entrada = $(".entrada").val();
    $(".salida").val(convertirArea(entrada,unidadEntrada,unidadSalida));
}

function unidadS(unidad, abreviacion){
    $('.selectorSalida').html(abreviacion);
    unidadSalida = unidad
    let entrada = $(".entrada").val();
    $(".salida").val(convertirArea(entrada,unidadEntrada,unidadSalida));
}

function unidadETemp(unidad,abreviacion){
    $('.selectorEntrada').html(abreviacion);
    unidadEntrada = unidad
    let entrada = $(".entrada").val();
    $(".salida").val(convertirTemperatura(entrada,unidadEntrada,unidadSalida));
}

function unidadSTemp(unidad,abreviacion){
    $('.selectorSalida').html(abreviacion);
    unidadSalida = unidad;
    let entrada = $(".entrada").val();
    $(".salida").val(convertirTemperatura(entrada,unidadEntrada,unidadSalida));
}

document.addEventListener('keyup', function(){

    
    let entrada = $(".entrada").val();
    let salida = $(".salida").val();
    if(temp){
        $(".salida").val(convertirTemperatura(entrada,unidadEntrada,unidadSalida));
    }else{
        $(".salida").val(convertirArea(entrada,unidadEntrada,unidadSalida) );
    }
    
})

function convertirArea(entrada, unidadEntrada, unidadSalida){

    return unidadEntrada/ unidadSalida * entrada;
    
}

function convertirTemperatura(entrada, unidadEntrada, unidadSalida){

    if(unidadEntrada == "Celsius"){

        if(unidadSalida == "Fahrenheit"){
            return entrada*9/5 + 32
        }

        if(unidadSalida == "Kelvin"){
           
            return parseInt(entrada) + 273.15;
        }

        if(unidadSalida == "Celsius"){
            
            return parseInt(entrada)
        }

    }

    if(unidadEntrada == "Fahrenheit"){

        if(unidadSalida == "Celsius"){
            return (entrada-32)*5/9
        }

        if(unidadSalida == "Kelvin"){
            return (entrada-32)*5/9 + 273.15
        }

        if(unidadSalida == "Fahrenheit"){
            
            return parseInt(entrada)
        }

    }

    if(unidadEntrada == "Kelvin"){

        if(unidadSalida == "Celsius"){
            return  entrada - 273.15
        }

        if(unidadSalida == "Fahrenheit"){
            return (entrada - 273.15)*9/5 + 32
        }

        if(unidadSalida == "Kelvin"){
            
            return parseInt(entrada)
        }

    }

}

function cambiarUnidades(value){

    switch(value){
        case "area":
            unidadE(metro,'m<sup>2</sup>')
            unidadS(sqrcm,'cm<sup>2</sup>')
            temp = false;
            console.log(value)
            $('#dropdownConversions').html(`
                <li><a class="topic black-text " href="#!" onclick="unidadE(acre, 'ac')">Acre (ac)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(area, 'a')">Area (a)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(hectarea, 'ha')">Hectare (ha)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(sqrcm, 'cm<sup>2</sup>')">Square Centimeter (cm<sup>2</sup>)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(sqrft, 'ft<sup>2</sup>')">Square feet (ft<sup>2</sup>)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(sqrin, 'in<sup>2</sup>')">Square inch (in<sup>2</sup>)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(metro, 'm<sup>2</sup>')">Square meter (m<sup>2</sup>)</a></li>
            
            `)
    
            $('#dropdownConversions2').html(`
                <li><a class="topic black-text " href="#!" onclick="unidadE(acre, 'ac')">Acre (ac)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(area, 'a')">Area (a)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(hectarea, 'ha')">Hectare (ha)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(sqrcm, 'cm<sup>2</sup>')">Square Centimeter (cm<sup>2</sup>)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(sqrft, 'ft<sup>2</sup>')">Square feet (ft<sup>2</sup>)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(sqrin, 'in<sup>2</sup>')">Square inch (in<sup>2</sup>)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(metro, 'm<sup>2</sup>')">Square meter (m<sup>2</sup>)</a></li>
            
            `)
            break;

        case "length":
            unidadE(metro,'m')
            unidadS(cm,'cm')
            temp = false;
            $('#dropdownConversions').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadE(mm, 'mm')">Milimetre (mm)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(cm, 'cm')">Centimetre (cm)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(metro, 'm')">Metre (m)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(km, 'km')">Kilometre (km)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(pulgada, 'in')">Inch (in)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(pie, 'ft')">Feet (ft)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(yd, 'yd')">Yard (yd)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(milla, 'mi')">Mile (mi)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(millaN, 'NM')">Nautical mile (NM)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(mil, 'mil')">Mil (mil)</a></li>
            
            `)
    
            $('#dropdownConversions2').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadS(mm, 'mm')">Milimetre (mm)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(cm, 'cm')">Centimetre (cm)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(metro, 'm')">Metre (m)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(km, 'km')">Kilometre (km)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(pulgada, 'in')">Inch (in)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(pie, 'ft')">Feet (ft)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(yd, 'yd')">Yard (yd)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(milla, 'mi')">Mile (mi)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(millaN, 'NM')">Nautical mile (NM)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(mil, 'mil')">Mil (mil)</a></li>
            
            `)
            break;

        case "volume":
            unidadE(metro,'m<sup>3</sup>')
            unidadS(cmCubico,'cm<sup>3</sup>')
            temp = false;
            $('#dropdownConversions').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadE(galUK, 'Gal (UK)')">Gallon (UK) (Gal)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(galUS, 'Gal (US)')">Gallon (US) (Gal)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(litro, 'l')">Liter (l)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(ml, 'ml')">Mililiter (ml)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(cmCubico, 'cm<sup>3</sup>')">Cubic centimetre (cm<sup>3</sup>)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(metro, 'm<sup>3</sup>')">Cubic metre (m<sup>3</sup>)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(inCubica, 'in<sup>3</sup>')">Cubic inch (in<sup>3</sup>)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(pieCubico, 'ft<sup>3</sup>')">Cubic feet (ft<sup>3</sup>)</a></li>
            
            
            `)
    
            $('#dropdownConversions2').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadS(galUK, 'Gal (UK)')">Gallon (UK) (Gal)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(galUS, 'Gal (US)')">Gallon (US) (Gal)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(litro, 'l')">Liter (l)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(ml, 'ml')">Mililiter (ml)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(cmCubico, 'cm<sup>3</sup>')">Cubic centimetre (cm<sup>3</sup>)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(metro, 'm<sup>3</sup>')">Cubic metre (m<sup>3</sup>)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(inCubica, 'in<sup>3</sup>')">Cubic inch (in<sup>3</sup>)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(pieCubico, 'ft<sup>3</sup>')">Cubic feet (ft<sup>3</sup>)</a></li>
            `)

                break;
        case"temperature":
            temp = true;
            unidadETemp('Celsius','°C')
            unidadSTemp('Fahrenheit','°F')
            $('#dropdownConversions').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadETemp('Celsius', '°C')">Celcius (°C)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadETemp('Fahrenheit', '°F')">Fahrenheit (°F))</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadETemp('Kelvin', '°K')">Kelvin (°K)</a></li>
            
            
            
            `)
    
            $('#dropdownConversions2').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadSTemp('Celsius', '°C')">Celcius (°C)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadSTemp('Fahrenheit', '°F')">Fahrenheit (°F))</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadSTemp('Kelvin', '°K')">Kelvin (°K)</a></li>
            `)

        break;

        case 'mass':
            unidadE(kg,'kg')
            unidadS(g,'g')
            temp = false;
            $('#dropdownConversions').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadE(t, 't')">Ton (t)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(tUK, 't')">Ton (UK) (t)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(tUS, 't')">Ton (US) (t)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(lb, 'lb')">Pound (lb)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(oz, 'oz')">Ounce (oz)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(kg, 'kg')">Kilogram (kg)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadE(g, 'g')">Gram (g)</a></li>
            
            
            
            `)
    
            $('#dropdownConversions2').html(`
            <li><a class="topic black-text " href="#!" onclick="unidadS(t, 't')">Ton (t)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(tUK, 't')">Ton (UK) (t)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(tUS, 't')">Ton (US) (t)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(lb, 'lb')">Pound (lb)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(oz, 'oz')">Ounce (oz)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(kg, 'kg')">Kilogram (kg)</a></li>
            <li><a class="topic black-text " href="#!" onclick="unidadS(g, 'g')">Gram (g)</a></li>
            `)

        break;
                

        case 'data':
                unidadE(mb,'mb')
                unidadS(gb,'gb')
                temp = false;
                $('#dropdownConversions').html(`
                <li><a class="topic black-text " href="#!" onclick="unidadE(bit, 'bit')">Bit (bit)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(byte, 'b')">Byte (B))</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(kb, 'kb')">Kilobyte (KB) (t)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(mb, 'mb')">Megabyte (MB)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(gb, 'gb')">Gigabyte (GB)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadE(tb, 'tb')">Terabyte (TB)</a></li>
                
                
                
                
                `)
        
                $('#dropdownConversions2').html(`
                <li><a class="topic black-text " href="#!" onclick="unidadS(bit, 'bit')">Bit (bit)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(byte, 'b')">Byte (B))</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(kb, 'kb')">Kilobyte (KB) (t)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(mb, 'mb')">Megabyte (MB)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(gb, 'gb')">Gigabyte (GB)</a></li>
                <li><a class="topic black-text " href="#!" onclick="unidadS(tb, 'tb')">Terabyte (TB)</a></li>
                `)
    
            break;
                    
    
    }

    

  

}