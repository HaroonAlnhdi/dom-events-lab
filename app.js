/*-------------------------------- Constants --------------------------------*/
    const number = document.querySelectorAll('.number');
    //const operator = document.querySelectorAll('.operator');
   
    const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
    let numberdisplay;
    let displayperator;
    
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = 0;


document.addEventListener('click', function(event) {
    
    console.log(event.target.innerText);

        
    if (event.target.classList.contains('number')) {
        if (operator === null) {
            // Set the first number if no operator is selected yet
            firstNumber = event.target.innerText;
            display.innerHTML += firstNumber;
        } else {
            // Set the second number if the operator is already selected
            secondNumber = event.target.innerText;
            display.innerHTML += secondNumber;
        }
    }

    if (event.target.classList.contains('operator')) {
        operator = event.target.innerText;
        display.innerHTML += operator;
    }

        if (firstNumber !== null && secondNumber !== null && operator === '*') {
            result = multiplications(firstNumber, secondNumber);
            
            // Reset the state for next calculation
            firstNumber = null;
            secondNumber = null;
            operator = null;
            
        }

        else if (firstNumber !== null && secondNumber !== null && operator === '/') {
            result = divided(firstNumber, secondNumber);
           
           // Reset the state for next calculation
           firstNumber = null;
           secondNumber = null;
           operator = null;
           
       }

       else if  (firstNumber !== null && secondNumber !== null && operator === '-') {
        result = sub(firstNumber, secondNumber);
       
       // Reset the state for next calculation
       firstNumber = null;
       secondNumber = null;
       operator = null;
       
      }


      else if (firstNumber !== null && secondNumber !== null && operator === '+') {
        result = sum(firstNumber, secondNumber);
       
       // Reset the state for next calculation
       firstNumber = null;
       secondNumber = null;
       operator = null;
       
   }
    

    if (event.target.innerText === 'C') {
        display.innerHTML = " "
        firstNumber = null;
        secondNumber = null;
        operator = null;
      }

      if ( event.target.innerText === '=') {
      
        display.innerHTML = result;
        // Reset the state for next calculation
        firstNumber = null;
        secondNumber = null;
        operator = null;
    }


    });


/*-------------------------------- Functions --------------------------------*/



                function multiplications(num1, num2) {
                    return num1 * num2;
                }


                function divided(num1 ,num2){
                    
                    if(num2 === '0'){

                   result = " Error ";
                   return result;
                    }
                    else
                    return num1/num2;
                }

                function sub (num1,num2){

                    return num1 - num2 ;
                }

                function sum(num1,num2){
                    return num1 + num2 ;
                }