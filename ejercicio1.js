var distancia;

distancia = prompt('Ingresa el valor de la distancia:');


if (distancia < 0) {

    document.write('La distancia ingresada es: ' + distancia)
    document.write('<br>')
    document.write('Haz ingresado un valor de distancia no válido')

} else if (distancia >= 0 && distancia <= 1000) {

    document.write('La distancia ingresada es: ' + distancia)
    document.write('<br>')
    document.write('El medio más adecuado para viajar es: ' + 'a pie')

} else if (distancia > 1000 && distancia <= 10000) {

    document.write('La distancia ingresada es: ' + distancia)
    document.write('<br>')
    document.write('El medio más adecuado para viajar es: ' + 'en bicicleta')

} else if (distancia > 10000 && distancia <= 30000) {

    document.write('La distancia ingresada es: ' + distancia)
    document.write('<br>')
    document.write('El medio más adecuado para viajar es: ' + 'en colectivo')

} else if (distancia > 30000 && distancia < 100000) {

    document.write('La distancia ingresada es: ' + distancia)
    document.write('<br>')
    document.write('El medio más adecuado para viajar es: ' + 'en auto')

} else {

    document.write('La distancia ingresada es: ' + distancia)
    document.write('<br>')
    document.write('El medio más adecuado para viajar es: ' + 'en avión')

}

