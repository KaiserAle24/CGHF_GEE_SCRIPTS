// For Loops. 

// Se genera una lista del 1 al 10 

var myList = ee.List.sequence(1,6);

print (myList);


// La map() operacion toma una función que aplica en cada elemento de forma independiente 
// y devuelve un valor. Y se define una funcion que  puede ser aplicada al input.

var computeSquares = function(number) {
  // Se define la operacion que utilizara la ee API.
  return ee.Number(number).pow(3);
};

// Aplica nuestra funcion a cada item en la lista mediante el uso de map() function
var squares = myList.map(computeSquares);

// [1, 4, 9, 16, 25, 36, 49, 64, 81 y 100]
print(squares);  
