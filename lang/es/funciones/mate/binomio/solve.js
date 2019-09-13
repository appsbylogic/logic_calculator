let preview = $('#preview');
let a = $("#a");
let b = $('#b');
let e = $('#e')


document.addEventListener('keyup', function(){

    preview.html("<b>(" + a.val() + " + " + b.val() + ")<sup>" + e.val() + "</sup></b>");

})

math.config({
    number: 'Fraction'
  })

function calcular(){

    

    $(".result_card").addClass("show");

    let exponente = eval(e.val())
    
    let exponente2;

    let coeficiente = ''

    let primerTermino = a.val();
    
    let segundoTermino;

    let parentesisA1 = '('

    let parentesisC1 = ')'

    let parentesisA2 = '('

    let parentesisC2 = ')'

    let fraction;

    let oldNumber;

    let result = [];

    for(var i = 0;i<=6;i++){
        
        
        if(i == 0){
            coeficiente = '';
            segundoTermino = ''
            parentesisA2 = ''
            parentesisC2 = ''
            exponente2 = ''
        }else{
            
            
           
            parentesisA2 = '('

             parentesisC2 = ')'
            segundoTermino = b.val();
            exponente2 = i == 1 ? '' : i;
          
        }
        
        
        if(isFloat(exponente)){
            console.log(isFloat(exponente))
            fraction =math.fraction(exponente);
           exponente =  math.fraction(exponente).n + '/' + math.fraction(exponente).d 

           console.log(exponente)
        }

        if(exponente == 1){
            exponente = ' '
        }

      
        
        result.push(coeficiente + parentesisA1 + primerTermino + parentesisC1 +"<sup>" + exponente+"</sup>" + parentesisA2 + segundoTermino + parentesisC2 + "<sup>" + exponente2+"</sup>")

        if(exponente==' '){
            exponente=1;
        }

        if(fraction != null){
            exponente = math.number(fraction)
        }

        
     
        if(i==0){
            coeficiente = 1;
        }
        console.log(i)
        coeficiente = (coeficiente * exponente)/(i+1)
        
        if(coeficiente ==1){
            coeficiente ='';
        }
        if(exponente == ''){
            i=6;
        }
        exponente--;
      
       

        if(exponente == 0){
            parentesisA1 = ''
            parentesisC1 = ''
            exponente=''
            primerTermino = ''
            
        }

        
       
    }

    

    $("#result").html(result.join(' + '));

}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}