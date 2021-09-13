var num1, num2, num3, num4, num5;

num1 = prompt('Ingresa el primer número:');
num2 = prompt('Ingresa el segundo número:');
num3 = prompt('Ingresa el tercer número:');
num4 = prompt('Ingresa el cuarto número:');
num5 = prompt('Ingresa el quinto número:');

let array = [num1, num2, num3, num4, num5];

document.write('Los números ingresados son: ' + array);
document.write('<br>');

var i;
var mayorNum = 0;

for (i = 0; i < array.length; i++) {

    if (array[i] > mayorNum) {

        mayorNum = array[i];
    }
}

document.write('El mayor número es: ' + mayorNum);