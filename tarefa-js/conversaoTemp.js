let grausFahrenheit = 356;  // define uma temperatura em graus Fahrenheit aleatoria
let grausCelsius = ""
function conversao (){
    grausCelsius = ((grausFahrenheit -32)*5)/9 ; //converte Fahrenheit para Celsius
    return grausCelsius
}
grausCelsius = conversao()
console.log(grausCelsius)
