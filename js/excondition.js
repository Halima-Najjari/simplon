//Exercice1
let number=15
if (number>0){
    console.log("Positif")
}
//Exercice2
let num=7
if(num/2==0){
    console.log( "Pair" )
}else{
    console.log( "Impair")
}
//Exercice3
let a=6
let b=5
if(a>b) {
    console.log(a)
}else{
    console.log(b)
}
//exercice4
let temp=35
if(temp>30){
    console.log("Chaud")
}else if(temp>=15 &&temp<=30){
    console.log("Tiède")
}else{
    console.log( "Froid")
}
//exercice5
let passwor="halima"
if(passwor=="letmein"){
    console.log( "Accès Accordé")
}else{
   console.log(  "Accès Refusé")
}
//exercice6
let day="Sunday"
switch(day){
    case "Monday":
        console.log(1)
        break;
    case "Tuesday":
        console.log(2)
        break; 
    case "Wednesday":
        console.log(3)
        break;
    case "Thursday":
        console.log(4)
        break;
    case "Friday.":
        console.log(5)
        break;
    case "Saturday":
        console.log(6)
        break;
    default :
        console.log(7)
        break; 
}
//exercice7
let age=26
if(age<13){
    console.log("Enfant")
}else if(age>13 && age<17){
    console.log("Adolescent")
}else{
    console.log("Adulte")
}
//exercice8
let light= 'jaune'
switch(light){
    case'rouge':
        console.log( "Arrêtez")
        break;
    case 'jaune':
        console.log(  "Ralentissez")
        break;
    case'vert':
        console.log( "Allez")
        break;
}
//exercice9
let  year=2000
if(year/4==0){
    console.log("année bissextile")
}else if(year/400==0){
    console.log("année bissextile")
}
//exercice10
let ages=7 
if (ages>18){
    console.log(" you cen drive")
} else{
    console.log("you can't drive")
}
//excercice11
let grade="B"
switch(grade){
    case"A":
        console.log("bien")
        break;
    default:
        console.log("Passable")
        break;
}
//exercice12
let nomber=45
if(nomber>=1 && nomber<=100){
    console.log( "Out of range")
}
//exercice13
let météo = 'pluvieux';

if (météo === 'pluvieux') {
    console.log("N'oubliez pas votre parapluie !");
} else if (météo === 'ensoleillé') {
    console.log("C'est une belle journée ensoleillée !");
} else if (météo === 'nuageux') {
    console.log("Le ciel est couvert aujourd'hui.");
} else {
    console.log("Météo inconnue, préparez-vous pour toute éventualité !");
}
//exxercice14
let marks=55
if(marks<50){
    console.log("Réussi")
}else{
    console.log( "Échoué")
}
//exercice15
let total=108
if(total>100){
    console.log(total-(total*0.1))
}else{
    console.log(total)
}
//exercice16
let rôle = 'éditeur';

rôle === 'admin'?
    console.log("Permissions : accès complet, modification et gestion des utilisateurs.")
 :rôle === 'éditeur'?
    console.log("Permissions : modification de contenu, mais pas de gestion des utilisateurs.")
:rôle === 'spectateur'?
    console.log("Permissions : consultation de contenu uniquement.")
 :
    console.log("Rôle inconnu, aucune permission définie.")

//ecercice17
let  score=15
let  bonus=true
if(score>80){console.log( "Score élevé")}
//exercice18 
let hour=5
if(hour>=0 && hour<=23){ 
    console.log("Day")
}else if (hour>=6 && hour<=18){
    console.log("Day")
}
//ecercice19
let carttotal=108
if(total>100){
    console.log(carttotal-(carttotal*0.2))
}else{
    console.log(carttotal)
}
//exercice20
