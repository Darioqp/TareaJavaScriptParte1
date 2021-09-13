var num1, num2, num3, num4, num5;

num1 = prompt('Ingresa el primer número:');
num2 = prompt('Ingresa el segundo número:');
num3 = prompt('Ingresa el tercer número:');
num4 = prompt('Ingresa el cuarto número:');
num5 = prompt('Ingresa el quinto número:');

let array = [num1, num2, num3, num4, num5];

var i;

for (i = 0; i <= 4; i++) {
    document.write(array[i])
    document.write('<br>')
}