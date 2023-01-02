function fizzBuzz(n){
    if (n % 3 == 0 && n % 5 == 0){
        return (n + " " + "FizzBuzz");
    }else if(n % 5 == 0 && n % 3 != 0){
        return (n + " " + "Buzz");
    }else if(n % 3 == 0 && n % 5 != 0){
        return (n + " " + "Fizz");
    }else{
        return " ";
    }
}

function num(){
   return Math.floor(Math.random()*100)
}

var i =1;

while(i <= 5){
    console.log(fizzBuzz(num()));
i++
}