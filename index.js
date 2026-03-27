const mixnum=1
const maxnum=100

const answer=Math.floor(Math.random() * (maxnum-mixnum + 1))

let attempts=0
let guess
let running=true

while(running){

   guess= window.prompt(`guess a number between ${mixnum} - ${maxnum}`)
         guess=Number(guess)

         if(isNaN(guess)){

            window.alert("please enter a valid number")}
    else if (guess < mixnum || guess > maxnum){
              window.alert("please enter a valid number")
      
    }
    else{
        attempts++
        if(guess<answer){
            window.prompt("too low try again")}
              else if(guess>answer){
            window.prompt("too high! try again")}
           
       
       else{
        window.alert(`CORRECT! THE ANSWER IS ${answer}.It too you ${attempts}`  )
           running=false
       }
        }

    }
