const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
    ];

    console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");

    let a = true;


    for(let b = 0; b < books.length; b++){
        if(books[b].rented <= 0){
          a = false;
        }
    };

    console.log(a);


    console.log("Voici le livre le plus emprunté :");

    let = lePlusEmprunte = books.reduce(function(prev, current){
    if (+current.rented > +prev.rented){
        return current;
    } else {
        return prev;
    }
});
console.log(lePlusEmprunte.title);

// ______________________________

console.log("Voici le livre le moins emprunté :");

let = leMoinsEmprunte = books.reduce(function(prev, current){
if (+current.rented < +prev.rented){
    return current;
} else {
    return prev;
}
});
console.log(leMoinsEmprunte.title);

// ______________________________

console.log("Voici le livre portant l'id 873495 :");

function searchid(search) {
    return search.id === 873495
};

console.log(books.find(searchid).title)

// ________________________________

console.log("Voici la liste des livre sans celui portant l'id 133712");

supBook = books.filter(book => book.id !== 133712)

console.log(supBook);

// _______________________________

bookClass = books.sort((x,y) => x.title.localeCompare(y.title));

console.log("Et voici le classement des livres par ordre alphabetique (sans l'id 133712) :");
console.log(bookClass && supBook);
