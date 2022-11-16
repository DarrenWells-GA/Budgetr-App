const express = require('express');
const budgets = require('./budgetr/budgets');


// Creating my Express App
const app = express();



// Index Route
app.get('/budgetr/', (req, res) => {
    res.render(
        'index.ejs',
        {
            allBudgets:budgets
        }
    );
});

// The Server Listener
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
});