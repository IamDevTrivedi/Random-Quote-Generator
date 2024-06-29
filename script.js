const quoteText = document.querySelector('#quote');
const authorName = document.querySelector('#author');

const body = document.querySelector('body');
const quoteBox = document.querySelector('#quote-box');

const btn = document.querySelector('button');

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const quote = await response.json();
        return quote;
    } catch (error) {
        console.error("Error fetching quote: ", error);
    }
}

async function displayRandomQuote() {
    const quote = await fetchQuote();
    if (quote) {
        quoteText.textContent = `"${quote.content}"`;
        authorName.textContent = `- ${quote.author || 'Unknown'}`;
    }

    // let r = Math.floor(Math.random() * 256);
    // let g = Math.floor(Math.random() * 256);
    // let b = Math.floor(Math.random() * 256);
    // let color1 = `rgb(${r},${g},${b})`;
    // let color2 = `rgba(${r},${g},${b},0.25)`;

    body.style.backgroundColor = color2;
    quoteBox.style.backgroundColor = color1;
}

btn.addEventListener("click", displayRandomQuote);

btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        displayRandomQuote();
        setTimeout(() => {
        }, 250);
    }
});

displayRandomQuote();
