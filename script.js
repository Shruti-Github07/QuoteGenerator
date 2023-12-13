fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
        const quoteElement = document.getElementById('txt');
        const authorElement = document.getElementById('author');
        let randomQuote;

        // Function to update quote and author elements
        const updateQuote = () => {
            const getRandomInt = (min, max) => {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };

            const randomIndex = getRandomInt(0, data.length - 1);
            randomQuote = data[randomIndex];

            quoteElement.textContent = randomQuote.text;
            authorElement.textContent = randomQuote.author;
        };

        // Initial quote display
        updateQuote();

        // Event listener for the button click
        const newQuoteButton = document.getElementById('btn_quote');
        newQuoteButton.addEventListener('click', updateQuote);
    })
    .catch(error => {
        console.error(error);
    });
