/* crear un app primos */

function esPrimo(numero) {
    /* estructura repetitiva para.. */
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            /* si hay division exacta, no es primo */
            return false;
        }
    }

/* en caso no es division exacta */
    return true;

}

for (let c = 1; c <= 100; c++) {
    document.write("<p>Numero " + c + " " + (esPrimo(c) ? "Es Primo" : "No es Primo") + "</p>")
}