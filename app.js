 
        /*-------------------------------- Constants --------------------------------*/
        const numberButtons = document.querySelectorAll('.number');
        const operatorButtons = document.querySelectorAll('.operator');
        const display = document.querySelector('.display');
        const equalButton = document.querySelector('.equals');

        /*-------------------------------- Variables --------------------------------*/
        let firstNumber = '';
        let secondNumber = '';
        let operator = null;
        let result = 0;

        /*----------------------------- Event Listeners -----------------------------*/
        numberButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                handleNumber(event.target.innerText);
            });
        });

        operatorButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                handleOperator(event.target.innerText);
            });
        });


       // clearButton.addEventListener('click', clearDisplay);
        equalButton.addEventListener('click', calculateResult);

        calculator.addEventListener('click', (event) => {
            
            console.log(event.target.innerText);
          
        
            // Example
            if (event.target.innerText === 'C') {
             clearDisplay();
            }
          });

        /*-------------------------------- Functions --------------------------------*/
        function handleNumber(number) {
            if (operator === null) {
                firstNumber += number;
                display.innerHTML = firstNumber;
            } else {
                secondNumber += number;
                display.innerHTML = firstNumber + operator + secondNumber;
            }
        }

        function handleOperator(op) {
            if (firstNumber !== '') {
                operator = op;
                display.innerHTML = firstNumber + operator;
            }
        }

        function clearDisplay() {
            display.innerHTML = '';
            firstNumber = '';
            secondNumber = '';
            operator = null;
            result = 0;
        }

        function calculateResult() {
            if (firstNumber !== '' && secondNumber !== '' && operator !== null) {
                let num1 = parseFloat(firstNumber);
                let num2 = parseFloat(secondNumber);
                
                if (operator === '+') {
                    result = sum(num1, num2);
                } else if (operator === '-') {
                    result = sub(num1, num2);
                } else if (operator === '*') {
                    result = multiplications(num1, num2);
                } else if (operator === '/') {
                    result = divided(num1, num2);
                }
                
                display.innerHTML = result;
                firstNumber = result.toString();
                secondNumber = '';
                operator = null;
            }
        }

        function multiplications(num1, num2) {
            return num1 * num2;
        }

        function divided(num1, num2) {
            if (num2 === 0) {
                return "Error";
            } else {
                return num1 / num2;
            }
        }

        function sub(num1, num2) {
            return num1 - num2;
        }

        function sum(num1, num2) {
            return num1 + num2;
        }