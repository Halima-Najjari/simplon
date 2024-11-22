//excercice1
for(let num=1;num<=10;num++){
    console.log(+num);
}
//exercice2
for(let n=1;n<=5;n++){
    console.log(n*n)
}
//exercice3
let N=1
while(N<=5){
    console.log(N);
    N++;
}
//exercice4
let t= ["rouge", "vert", "bleu"]
for(let i=0;i<t.length;i++){
    console.log(t[i])
}
//exercice5

for(let i=1;i<=15;i++){
    if(i%2!==0){console.log(i)}    
}
//exercice6
for(let i=1;i<=5;i++){
    console.log(i*i-1)
}
//exercice7
let fruits=["pomme","banane", "cerise"]
fruits.forEach(function(fruits) {
    console.log(fruits.toUpperCase());
});
//exercice8
let personne={
    nom: "Alice",
    âge: 25
}
for (let cle in personne) {
    console.log(cle + " : " + personne[cle]);
}
//exercice9
let k=0
let n=1
console.log(k)
console.log(n)
for(let i=2;i<=10;i++){
    console.log((i-1)+(i-2))
}
length()