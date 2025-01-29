let listOfNumbers = [];
let maxTries = 15  ;
let secretNumber = randomNumberGenerator();
let tryGot = 1;

function showTextOnDisplay(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
}

function startMessage(){
showTextOnDisplay('h1', 'The secret number game');
showTextOnDisplay('p', `Guess the secret number between 1 and ${maxTries}`);
}

startMessage();

function checkKick(){
    let kick = document.querySelector('input').value;     // Recebe o valor da entrada do usuário
    console.log('secretNumber', secretNumber);
    console.log('kick', kick);
    console.log(kick == secretNumber);


    if (kick == secretNumber) {
        let trytext = tryGot == 1 ? 'try' : 'tries';
        let message = `You got it right in ${tryGot} ${trytext}`;
        showTextOnDisplay('h1', 'You got it right');
        showTextOnDisplay('p', message);
        document.getElementById('reiniciar').removeAttribute('disabled');
 
    } else {
        if (kick > secretNumber) {
            showTextOnDisplay('h1', 'You missed');
            showTextOnDisplay('p', 'The secret number is smaller');
        } else {
                showTextOnDisplay('h1', 'You missed');
                showTextOnDisplay('p', 'The secret number is bigger');
        }
    }
    tryGot++;
    clearField();
}

function randomNumberGenerator(){
    let chosenNumber = parseInt(Math.random() * maxTries + 1);
    let countOfNumbers = listOfNumbers.length;

    if (countOfNumbers == maxTries){
        listOfNumbers = [];
    }

    if (listOfNumbers.includes(chosenNumber)){
        return randomNumberGenerator(); 
    } else{
        listOfNumbers.push(chosenNumber);
        console.log(listOfNumbers);
        return chosenNumber;
    }
}

function clearField(){
    document.querySelector('input').value = '';
}

function restartGame(){
    secretNumber = randomNumberGenerator();
    clearField();
    tryGot = 1;
    startMessage(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}