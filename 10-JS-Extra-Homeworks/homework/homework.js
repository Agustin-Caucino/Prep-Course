// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array=[];
    for (element in objeto){
      array.push(Array.of(element, objeto[element]));
    }
    return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  let arrayString = string.split('');
  for(element in arrayString){
    let cont = 0;
    for(i=0; i<arrayString.length; i++){
      if (arrayString[i] === arrayString[element]) cont++;
    }
    objeto[arrayString[element]] = cont;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let capArray = [];
  let capToFontArray = [];
  let arrayString = s.split('');
  for(element in arrayString){
    if (arrayString[element] === arrayString[element].toUpperCase()){ 
      capArray.push(arrayString[element]);
      arrayString[element] = '';
    }
  }
  arrayString = arrayString.filter((item) => item !== '');
  capToFontArray = capArray.concat(arrayString);
  return capToFontArray.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let strArray = str.split('');
  strArray[strArray.length] = ' ';
  let newArray = [];
  for(element in strArray+1){
    newArray.push(strArray.splice(0, strArray.indexOf(' ')+1));
  }
  for(element in newArray){
    newArray[element] = newArray[element].filter((character) => character !== ' ');
  }
  for(element in newArray){
    newArray[element].reverse();
  }
 
  for(element in newArray){
    newArray[element] = newArray[element].join('');
  }
   for(element in newArray){
    newArray = newArray.filter((character) => character !== '');
  }
  return newArray.join(' ');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numAr = numero.toString().split('');
    let long = numero.toString().length;
    let arr1 = [];
    if ((numero.toString().length)%2 !== 0){
      arr1 = numAr.splice(((long)/2)+0.5);
      numAr.splice(long/2);
      arr1.reverse();
      if (arr1.join('') === numAr.join('')) return( "Es capicua");
      else return( "No es capicua");
    }
    else{
      arr1 = numAr.slice(long/2);
      numAr.splice(long/2);
      arr1.reverse();
      if(arr1.join('') === numAr.join('')) return "Es capicua";
      else return "No es capicua";
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadAr = cadena.split('');
  cadAr = cadAr.filter((char) => char!=='a' && char!=='b' && char !== 'c');
  return cadAr.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    return a.length - b.length;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let intersecArray=[];
  for(element in arreglo1){
    if(arreglo2.includes(arreglo1[element])) intersecArray.push(arreglo1[element]);
  }
  return intersecArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

