//Miranda Abigail

//Escribe un bucle for que recorra un arreglo de números e imprima cada número.
var arr1 = [8, 6, 7, 5, 3, 0, 9];

for(i=0 ; i< 7 ; i++){

    console.log(arr1[i]); 

}

//Escribe un ciclo for que recorra un arreglo de números e imprima la suma 
//del número y el índice del número en el arreglo

var arr2 = [4, 7, 13, 13, 19, 37, -2];
var suma=0;
for(i=0 ; i < 7 ; i++){

    suma= arr2[i]+i;
    console.log(suma); 

}

//Escribe un bucle for que recorra un arreglo de números e imprima SOLO los números mayores a 5.
/*BONUS NINJA: modifica tu solución para el #3 para que cualquier número en el arreglo que NO
 sea mayor que 5 se reemplace con una cadena de "No hay dados". Esta cadena NO debe imprimirse.*/var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(i=0 ; i< 7 ; i++){

    if(arr3[i]>5){
        console.log(arr3[i]);
    } else{
        console.log("No hay dados.")
    }

}
