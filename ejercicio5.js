/* 
Ej. 5: Utiliza map para convertir un array de temperaturas expresadas en
Celsius un array de las mismas tempreraturas expresadas en grados
Fahrenheit.
Nota: si multiplicamos una temperatura expresada en grados Celsius por 9/5
y luego le sumamos 32 , tendremos la temperatura expresada en grados
Fahrenhei
*/
let temperatura = [14,15,23];
let grados = temperatura.map(temperatura => temperatura*(9/5)+32+"º");
console.log(temperatura);
console.log(grados);
