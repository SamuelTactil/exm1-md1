// JavaScript 1: Suma de números pares

function sumarPares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    return suma;
} console.log(sumarPares(10))

// Javascript 2: Tabla de multiplicar

function tablaMultiplicar(n) {
    for (let i = n; i <= tope; i++) {
        return n * i;
    } console.log(tablaMultiplicar(5))
}
