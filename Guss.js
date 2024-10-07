let gameresult=document.getElementById("gameResult");
let userinput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);

function checkGuess(){

    let gussNumber=parseInt(userinput.value);
    if (gussNumber>randomNumber){
        gameresult.textContent="To high! Try Again"
        // gameresult.style.backgroundColor="red"
        // gameresult.style.margin="100px,black"

    }
    else if(gussNumber<randomNumber){
        gameresult.textContent="To low! Try Again"
        // gameresult.style.backgroundColor="blue"
    }
    else if(gussNumber==randomNumber){
        gameresult.textContent="Congratulations ! you got it"
        // gameresult.style.backgroundColor="green"


    }
    else{
        // gameresult.textContent="Please provide valide user input"
        // gameresult.style.backgroundColor="grey"
        // gameresult.style.border=200
        alert("Please provide valide user input")
    }

};