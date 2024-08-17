import input from "@inquirer/input";

//1
let tarifa = 2.50;

const idade = await input({message: 'Insira a idade do usuário: '});

if (idade < 6){
    tarifa = 0
}
else if (idade < 18){
    tarifa -= (tarifa * .1);
}
else if (idade >= 60){
    tarifa -= (tarifa * .3);
}

console.log("o valor da tarifa foi de R$" + tarifa);

//2
let result=1;
const num = await input({message: 'Insira o número inteiro: '});
for(let i = num;i>0;i--){
    result = result * i;
}
console.log(result);

//3
let primos = [];
const N = await input({message: 'Insira um número inteiro de 1 a 1000 😈: '});

for(let i=N;i>0;i--){
    if ((i == 2)||(i==3)|(i==5)||(i==7)){
        primos.unshift(i)
    }
    else if ((i%2!=0)&&(i%3!=0)&&(i%5!=0)&&(i%7!=0)&&(i!=1)){
        primos.unshift(i)
    }
}

console.log("os números primos menores que " + N + " são: " + primos);


