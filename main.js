const button = document.getElementById('button');
const output = document.getElementById('output');
const quotes = [
    '"Be the change you wish to see in the world." - Mahatma Gandhi',
    '"You only live once, but if you do it right, once is enough." - Mae West',
    '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll',
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"In three words I can sum up everything I\'ve learned about life: it goes on." - Robert Frost',
    '"Happiness is not something ready made. It comes from your own actions." - Dalai Lama XIV',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"The best way to predict the future is to create it." - Abraham Lincoln',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"We don\'t see things as they are, we see them as we are." - Anaïs Nin',
]

button.addEventListener('click', function() {
    let chooseRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.textContent = chooseRandomQuote;
})