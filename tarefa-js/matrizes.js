var arrMatriz1 = [[2,4,6],[0,6,8]] // matriz 1 criada 2x3
var arrMatriz2 = [[1,3],[5,7],[3,9]] // matriz 2 criada 3x2
var arrMatriz3 = [["",""],[" ",""]] // matriz resultant 2x2
// como a quantidade de linhas da matriz 1 é igual a quantidade de colunas da matriz 2 (ambas = 2) podemos realizar a multiplicação

for(i =0 ;i < 2; i++ ) {                                            // percorre o tamanho das linhas de matriz 1
    for(j =0;j < 2; j++ ) {                                         // percorre o tamanho das colunas de matriz 2
        var soma = 0;                                               // reinicia a variavel soma 
        for(k =0;k < 3; k++) {                                      // percorre o tamanho das colunas de matriz 1
             soma =  soma +  arrMatriz1[i][k]*arrMatriz2[k][j];     // regra de multiplicxação de matriz
             arrMatriz3[i][j] = soma;                               // define elemento da matriz resultante

        }
    }
}

console.log(arrMatriz3)
