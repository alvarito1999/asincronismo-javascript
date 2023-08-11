// En JavaScript, un callback es una función que se pasa como argumento a otra función y se ejecuta en un momento posterior,
// generalmente cuando se completa una operación asincrónica o cuando ocurre un evento específico. Los callbacks son fundamentales
// para lograr la programación asincrónica y permiten controlar el flujo de ejecución en situaciones donde el tiempo de respuesta es variable.

//Callback

// Definición de una función llamada "sum" que toma dos parámetros: num1 y num2.
// Esta función simplemente devuelve la suma de los dos números.
function sum(num1, num2) {
  return num1 + num2;
}

// Definición de una función llamada "calc" que toma tres parámetros: num1, num2 y callback.
// Esta función ejecuta el callback proporcionado, pasándole num1 y num2 como argumentos, y retorna el resultado.
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

// Llamada a la función "calc" con los argumentos 2, 2 y la función "sum" como callback.
// Esto resultará en la ejecución de la función "sum(2, 2)", que devuelve 4.
// Por lo tanto, el resultado de la llamada a "calc" será 4.
console.log(calc(2, 2, sum));

// SetTimeout(function, time, args)
// Utilizando la función setTimeout para programar la ejecución de una función después de un cierto período de tiempo.
// En este caso, se ejecutará la función proporcionada después de 2000 milisegundos (2 segundos).
setTimeout(function () {
  // Una vez transcurrido el tiempo especificado, esta función anónima se ejecutará.
  console.log("Hello console"); // Imprime "Hello console" en la consola.
}, 3000);
