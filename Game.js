let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const  user = document.querySelector("#user-score");
const  comp = document.querySelector("#comp-score");


//Getting user choice
choices.forEach((slection) => {  

    slection.addEventListener("click", () => {
        const userChoice = slection.getAttribute("id");//geting id of choice selected from user
        // console.log("choice was Clicked",userChoice);//we can see the id for slected choice
        playGame(userChoice);//calling for comp choice
    })
})

//Geting Computer Choice
const GenCompChoice = () => {
    //rock,paper,scissors >
    const options = ["rock","paper","scissors"];//created arr so can select radomly using idx
    const randomidx = Math.floor(Math.random() * 3);//math.random -> select number(idx) randomly math.floor() to remove number after point 4.55 -> 4

    return options[randomidx];
}


//Comparing Userchoice and CompChoice
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer Choice

    const compChoice = GenCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp -> scissor,paper
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            //comp -> rock,scissor
            userWin = compChoice === "scissors" ? false :true ;
        }else{
            //comp -> rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin,compChoice,userChoice);

    }
}



const drawGame = () =>{
    console.log("Game was Draw.");
    msg.innerText = "Game Was Draw! Play Again";
    msg.style.backgroundColor = "black";
   
}

const showWinner = (userWin,compChoice, userChoice) =>{

    if(userWin){
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user.innerText = userScore;
    }else{
        console.log("You Loose!");
        msg.innerText = `You Lost! Your ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp.innerText = compScore;
    }

}



//  this is dark/light mode javascript
 
let btn1 = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode = "light";

btn1.addEventListener("click",() => {
    console.log("bton done")
    if(currmode === "light"){
        currmode = "dark"
        // body.style.backgroundColor = "black";
        body.classList.add("dark");//style throught class
        body.classList.remove("light");//remove old style

    }else{
        currmode = "light"
        // body.style.backgroundColor = "white"; //styleling throght JS
        body.classList.add("light");//style through class
        body.classList.remove("dark");//remove old style

    }

    console.log(currmode)
})













