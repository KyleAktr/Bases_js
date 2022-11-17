const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
    ];

const seventy = entrepreneurs.filter (entreSeven => (entreSeven.year >= 1970) && (entreSeven.year < 1980));

    console.log ("Les entrepreunneurs nés dans les années 70 sont :");
    console.log (seventy);

// _____________________________
let entreName = entrepreneurs.map
    (inventeur => {let firstOrLast = 
    {"first_name" : inventeur.first,
    "last_name" : inventeur.last};
    return firstOrLast;});

console.log("Voici la liste des prénoms et noms de nos entrepreneurs :");
console.log(entreName);

// ____________________________


let entreAge = entrepreneurs.map
    (inventeur => {let firstOrLast = 
    {"first_name" : inventeur.first,
    "last_name" : inventeur.last,
    "Age" : 2022 - inventeur.year};
    return firstOrLast;});

console.log("Voici l'âge de chaque inventeur aujourd'hui :");
console.log(entreAge);

// _________________________

// entrepreneurs.sort(function (a, b) {
//     if (a.nom < b.nom) {
//         return -1;
//     } else {
//         return 1;
//     };
// });

// entrepreneurs.forEach(function(v) {
//     console.log("Petit classement par orde alphabetique :");
//     console.log(v.nom);
// });


// const sortByAlpha = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
// const toLast = e => e.last;

// console.log([...entrepreneurs].sort(toLast));


entreClass = entrepreneurs.sort((x,y) => x.last.localeCompare(y.last));

console.log("Et voici le classement des entrepreneurs par ordre alphabetique :");
console.log(entreClass);



    