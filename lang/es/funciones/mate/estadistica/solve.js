var data = []
var values = $(".values")
var input = $("#input")
var promedio;
var lastItem;
function add(){

    var number = parseInt(input.val())

   

    console.log(number)

    if(!isNaN(number)){

        $(".array_card").addClass('show')

        $(".clearBtn").removeClass("disBtn")

        lastItem = number

        data.push(number);

        $('.btn-large').removeClass('disabled')

    }
    
    data.sort(function(a,b){return a-b});

    
    values.html("<b>Values: </b>"+ data + ' ')

}

function remove(){
    var index = data.indexOf(lastItem)

   

    data.splice(index,1)



    input.val('')

    if(data.length == 0){

        $(".array_card").removeClass('show')

        $(".clearBtn").addClass("disBtn")

    }

    values.html("<b>Values: </b>"+ data + ' ')

}

function removeAll(){

    data = []
    input.val('')
    values.html("<b>Values: </b>"+ data + ' ')
    $(".clearBtn").addClass("disBtn")
    $(".array_card").removeClass('show')

}

function calcular(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);

    $(".result_card").addClass('show')

    promedio = data.reduce(getSum)/data.length

    $(".promedio").html("<b>Media: </b>" + promedio)
    
    $(".mediana").html("<b>Mediana: </b>" + mediana())

    $(".moda").html("<b>Moda: </b>" + moda(data))

    $(".varianza").html("<b>Varianza: </b>" + varianza())

    $(".desviacionM").html("<b>Desviación media: </b>" + desviacionMedia())

    $(".desviacionS").html("<b>Desviación estándar: </b>" + Math.sqrt(varianza()).toFixed(2))
}

function getSum(total, num) {
    return total + num;
  }

function mediana(){

    var mitad;

   
    if(data.length > 1){

        mitad = data.length/2

        if(Number.isInteger(mitad)){

            return (data[mitad-1] + data[mitad])/2

        }
        
        mitad = Math.ceil(mitad)

        console.log(mitad)

        console.log(data)

        return data[mitad-1]
        


    }

    return data[0]

}

function moda(array) {
    var frequency = {}; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];
  
    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
  
      if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
      }
    }
  
    for (var k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
  
    return modes;
  }

function varianza(){
    var suma = 0

    for(var i =0; i < data.length; i++){

        suma += Math.pow((data[i]-promedio),2)

       

    }

    return  (suma/(data.length-1)).toFixed(2)

}

function desviacionMedia(){
    var suma = 0

    for(var i =0; i < data.length; i++){

        suma += Math.abs((data[i]-promedio))

        console.log(suma)

    }

    return  (suma/(data.length)).toFixed(2)


}