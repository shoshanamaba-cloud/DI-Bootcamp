const quotes = [
    {id : 0 , author : "Bruce Lee", quote : "The successful warrior is the average man, with laser-like focus"},
    {id : 1 , author : "Ralph Waldo Emerson", quote : "A great man is always willing to be little."},
    {id : 2 , author : "Mark Twain", quote : "Whenever you find yourself on the side of the majority, it is time to pause and reflect"},
    {id : 3 , author : "Michael Jordan", quote : "I've failed over and over and over again in my life and that is why I succeed"},
    {id : 4 , author : "Lao Tzu", quote : "The journey of a thousand miles begins with one step"},
    {id : 5 , author : "Oscar Wilde", quote : "Be yourself; everyone else is already taken"},
    {id : 6 , author : "Thomas A. Edison", quote : "Genius is one percent inspiration, ninety-nine percent perspiration"},
    {id : 7 , author : "Wayne Gretzky", quote : "You miss 100 percent of the shots you never take"},
    {id : 8 , author : "Mark Twain", quote : "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great."},
    {id : 9 , author : "Mark Twain", quote : "Do something every day that you don't want to do. This is the golden rule for acquiring the habit of doing your duty without pain."},
    {id : 10 , author : "Mark Twain", quote : "Don’t wait. The time will never be just right."}
]


const quoteDisplay = document.getElementById("quote");
const generateButton = document.getElementById("generate");

const withSpaceButton = document.getElementById("numberWithSpace");
const noSpaceButton = document.getElementById("numberNoSpace");
const wordsButton = document.getElementById("numberWords");
const likesButton = document.getElementById("likes");

const likeDisplay = document.getElementById("button3");

let lastIndex = -1;
let currentQuote;

quotes.forEach(function(obj) {
    obj.likes = 0;
});

// GENERATE QUOTE

generateButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    while (randomIndex === lastIndex) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    lastIndex = randomIndex;
    currentQuote = quotes[randomIndex];
    quoteDisplay.textContent = currentQuote.quote + " — " + currentQuote.author;
    likeDisplay.textContent = currentQuote.likes;
});

/*part 2*/
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData);

    dataObject.id = quotes.length;
    dataObject.likes = 0;

    quotes.push(dataObject);
    form.reset();
});

/*characters with space */
withSpaceButton.addEventListener("click", function() {

    if (!currentQuote) return;
    
    document.getElementById("button1").textContent =
        currentQuote.quote.length;
});

/*characterswithout spaces*/
noSpaceButton.addEventListener("click", function() {

    if (!currentQuote) return;

    document.getElementById("button2").textContent =
        currentQuote.quote.replaceAll(" ", "").length;
});

// NUMBER OF WORDS

wordsButton.addEventListener("click", function() {

    if (!currentQuote) return;

    document.getElementById("wordDisplay").textContent =
        currentQuote.quote.trim().split(/\s+/).length;
});

/*likes*/
likesButton.addEventListener("click", function() {
    if (!currentQuote) return;
    currentQuote.likes++;
    likeDisplay.textContent = currentQuote.likes;
});

