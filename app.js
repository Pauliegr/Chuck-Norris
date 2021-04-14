function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function randomQuotes(){
    let quote = document.querySelector("#quotes");
    let listQuote = listQuotes[getRandomInt(9)];
    quote.innerHTML = listQuote;
}
function randomColor(){
    let backGr = document.querySelector("body");
    let quoteBtn = document.querySelector("#btn");
    let color = `rgb (${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
    backGr.style.background = color;
    quoteBtn.style.background = backGr.style.background;
}

let quoteBtn = document.querySelector("#btn");
quoteBtn.addEventListener("click", randomQuotes, randomColor);

let listQuotes = [
    "What came first, the chicken or the egg? Chuck Norris came first.",
    "When Chuck Norris falls in water, Chuck Norris doesn't get wet. Water gets Chuck Norris.",
    "Chuck Norris is so fast, he can run around the world and punch himself in the back of the head.",
    "Chuck Norris sleeps with a night light. Not because Chuck Norris is afraid of the dark, but the dark is afraid of Chuck Norris.",
    "Chuck Norris doesn't wear a watch. He simply decides what time it is.",
    "Chuck Norris n'a pas de père. On ne nique pas la mère de Chuck Norris.",
    "Chuck Norris doesn't climb trees. He just pulls them down and walks on top of them.",
    "Chuck Norris once visited the Virgin Islands. They are now The Islands.",
    "Newton's Third Law is wrong: Although it states that for each action, there is an equal and opposite reaction, there is no force equal in reaction to a Chuck Norris roundhouse kick."
]






