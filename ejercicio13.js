/* 
Ej. 13: Tenemos un array que es usa sucesión de unos y ceros, por ejemplo:
[0,1,1,1,0,0,1,0]. Cada uno de los elementos del array resultante será un XOR
de el elemento correspondiente con el anterior (el primer elemento queda
igual).
Por ejemplo, para el segundo elemento, el valor resultante será XOR(0,1)=1.
Para el tercer elemento: XOR(1,1)=0. El resultado final sería:
[0,1,0,0,1,0,1,1].
*/
let array = [0,1,1,1,0,0,1,0];
let numeros = array.map((elem,index,array) => {//ternaria index == 0 ? elem : element ^array[index-1]
    if(index == 0){
        return elem;
    }else{
        return elem ^ array[index-1];
    }
});
console.log(numeros);
    
