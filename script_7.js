let userAnswer = prompt("Racontes ta vie :");

if (userAnswer.charAt(userAnswer.length - 1) == "?"){
    console.log("Ouais ouais...");
} else if (userAnswer.includes("fortnite")){
    console.log("On s'fait une partie soum-soum ?");
} else if (userAnswer.length == 0) {
    console.log("T'es en PLS ?");
} else {
    console.log("Ballek");
}