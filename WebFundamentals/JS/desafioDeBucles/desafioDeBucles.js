//1. Imprimir impares 1-20
for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}

//2. Disminuir múltiplos de 3
for(let i=100;i>=1;i--){
    if(i%3==0){
        console.log(i)
    }
}

//3. Imprime la secuencia
for(let i=4;i>=-3.5;i-= 1.5){
    console.log(i)
}

//4. Sigma
addition = '';
sum = 0;
for(let i=1;i<=100;i++){
    if(i!=100){
        addition += i + " + ";
    }else{
        addition += i
    }
    sum += i;
}
console.log(addition)
console.log(sum)

//5. Factorial
multiplication = '';
sum = 1;
for(let i=1;i<=12;i++){
    if(i!=12){
        multiplication += i + " * ";
    }else{
        multiplication += i
    }
    sum *= i;
}
console.log(multiplication)
console.log(sum)