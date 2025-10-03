const sumarPares = (n) => {
  let sumaTotal = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sumaTotal += i;
    }
  }
  return sumaTotal;
};
console.log(sumarPares(5));

const tablaMultiplicar = function (n, tope) {
  for (let i = 1; i <= tope; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
};

tablaMultiplicar(
  Number(prompt("Dime un numero para multiplicar")),
  Number(prompt("Dime el tope de las multiplicaciones"))
);
