//exenple1
function ladition(a,b) {
 
    return a+ b; 
}
let resultat = ladition(3, 5); 
console.log(resultat); 
//exemple2
function ladition(a,b) {
   
    return a+b; 
}
console.log(ladition(3,5)); 
//exemple3
const multiplication = (Texte) => {
    return Texte.toUpperCase();
}
console.log(multiplication("nour"))
//exemple4
function saluer (nom){
    return"bonjur"+nom+"!";
}
console.log(saluer("anas"))
//exemple5
var affichercouleur=function(couleur){
    return"la couleur choisie est: "+couleur

};
console.log(affichercouleur("rouge"))
//exemple6
const afficheranimal=(animal)=>{
    return"l'animal choisie est:"+animal;
}
console.log(afficheranimal("chate"))
//expemle7
const typeofnember=(nember)=>{
    if(nember%2==0){
        return"pair"
    }else{
        return"impair"
    }


}
console.log(typeofnember(7))
//exemple8
const typeofnembe=(nembe)=>{
        return  nembe%2===0?"pair":"impair"
};
console.log(typeofnember(7))