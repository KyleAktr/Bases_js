console.log("coucou depuis la console");

let maVariableSuperCool = "KamelCase"
var unTexte = "Voici un texte"



alert("Merci d'accepter les cookies pour rentrer sur notre site")

console.log(maVariableSuperCool)
console.log(unTexte);

// "var" ne s'utilise plus, il faut maintenant utiliser "const" si la variable n'est pas amenée a être modifiée, ou "let" si nous la modifierons plus tard.

const prenom = "Justine"
// prenom = "Julien" provoquera une erreure

let unPrenom = "Evan"
unPrenom = "Bjorn"

console.log(prenom);
console.log(unPrenom);

let leChiffre = 47;
let nouvelleChaine = 'le chiffre attendu est : ' + leChiffre + ' degrés';

console.log(nouvelleChaine);

let autreChose = 87;
let encoreAutreChose = `Nous attendons le chiffre ${autreChose} dans cette variable`;

console.log(encoreAutreChose);

let total = 2;
total *= 5;
console.log(total);


let x = 7;
let y = 5;

if (x < y) {
    console.log("x est inferieur à y");
} else {
    console.log("x est supérieur à y");
}

let a = 4;
let b = 5;

if (a === b || a > 3) {
    console.log("true !");
} else {
    console.log("false !");
}

// ________________________________________________

const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"


let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
};

console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);
console.log(THPSessionNum2.cities[0]);

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);

THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir
 
let attributName = "successRate";
console.log(THPSessionNum2[attributName]);
 

weekNum = 5; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");

  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}

for(var count = 0; count <=5; count++){
    console.log(`on va compter jusqu'à 5 : ${count}`);
  }


  console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
  //passe count en var pour tester ce que ça donne

  let answer = "";
  while(answer !== "oui") {
    console.log("alors ?")
    answer = prompt("Tu kiffes THP ?");
  } 

  console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

  let word = "";
let letter;

while (true) {
    letter = prompt('Tape UNE lettre ou un mot stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);

// ________________________________________

//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}

console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});

// _____________________________________

function sayHello() {
    console.log("Bonjour toi !");
  }
  
  sayHello();
  
// _____________________________________

  function multiply(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  console.log(multiply(2, multiply(2,3)));

// _____________________________________

// const multiply = function(inputNumber1, inputNumber2) {
//     let outputNumber = inputNumber1 * inputNumber2;
//     return outputNumber;
//   }
  
//   console.log(multiply(2, 3));
  
//   const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
//   console.log(otherMultiply(2, 3));
  


  
