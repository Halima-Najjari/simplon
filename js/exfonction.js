//excercice1
function d(a) {
   
    return a; 
};
console.log(d("Bonjour, le Monde!"));
//excercice2
function ladition(a,b) {
   
    return a+ b; 
};
console.log(ladition(3,5));
//excercice3
function longueur(str) {
   
    return str.length ; 
};
console.log(longueur("halima")); 
//execercice4
function first(str) {
    let firstLeter=str.split(",")
    console.log(firstLeter)

    return firstLeter[0]  
}
console.log(first("ANASS,is a dev"))
function first(str) {
    let firstLeter=str.split("")
    console.log(firstLeter)

    return firstLeter[3]  
}
console.log(first("lina"))
//exercice5
function inverserChaine(chaine) {
    
    return chaine.split('').reverse().join('');
}


console.log( inverserChaine('halima'));



//exercice6
function uppercase(str){
    return str.toUpperCase()
}
console.log(uppercase("halima"))
//exercice7
function first(str) {
    let firstLeter=str.split(" ")
   return(firstLeter)      
}
console.log(first("ANASS is a dev"))
//exercice8
function typ(n){
    if(n%2==0){
        return "pair"
    }else{
        return" impair"
    }
}
console.log(typ(5))
//excercice9
function grand(n) {
   

    let max = n[0]; 
    for (let i = 1; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i]; 
        }
    }
    return max;
}


let t = [47, 93, 3, 96];
console.log(grand(t));
//ecercice10
function S(t){
    return t.length
}
console.log(S(["halima"]))
//excercice11
function compterVoyelles(chaine) {
    // Définir les voyelles
    const voyelles = "aeiouyAEIOUY";
    let compteur = 0;

    // Parcourir chaque caractère de la chaîne
    for (let char of chaine) {
        // Vérifier si le caractère est une voyelle
        if (voyelles.includes(char)) {
            compteur++;
        }
    }

    return compteur;
}

// Exemple d'utilisation
console.log(compterVoyelles("Bonjour tout le monde!")); // Output: 9
//exercice12
function prime(n) {
    if (n <= 1) return false; // Les nombres <= 1 ne sont pas premiers

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // Si divisible par un autre nombre que 1 et lui-même
        }
    }
    return true; // Si aucune division ne fonctionne, le nombre est premier
}

// Exemple d'utilisation
console.log(prime(4)); // Output: false (4 n'est pas un nombre premier)
console.log(prime(5)); // Output: true (5 est un nombre premier)
//exercice13
function prime(n) {
    if (n <= 1) return false; // Les nombres <= 1 ne sont pas premiers

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; // Si divisible par un autre nombre que 1 et lui-même
        }
    }
    return true; // Si aucune division ne fonctionne, le nombre est premier
}

// Exemple d'utilisation
console.log(prime(4)); // Output: false (4 n'est pas un nombre premier)
console.log(prime(5)); // Output: true (5 est un nombre premier)
//excercice 14
function inverserChaine(chaine) {
    
    return chaine.split('').reverse().join('');
}


console.log( inverserChaine('amilah'));
//exercice15
function inverserMots(chaine) {
    // Diviser la chaîne en mots
    let mots = chaine.split(" ");
    
    // Inverser chaque mot
    let motsInverses = mots.map(mot => mot.split("").reverse().join(""));
    
    // Rejoindre les mots inversés en une chaîne
    return motsInverses.join(" ");
}

// Exemple d'utilisation
console.log(inverserMots("Bonjour tout le monde")); // Output: "ruojnoB tuot el ednom"
console.log(inverserMots("Javascript est amusant")); // Output: "tpircsavaJ tse tnasuma"
//exercice15
let str=abcdcba
function palindrome(str){
    for (let lettre of str){
        console.log(lettre)
    }


}

