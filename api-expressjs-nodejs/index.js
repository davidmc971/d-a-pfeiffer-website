const express = require('express');
const app = express();
const PORT = 80;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to my API"
    })
});