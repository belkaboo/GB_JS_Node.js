const express = require('express');
const app = express();


// app.get('/', (req, res) => {
//     res.send(`<h1>Welcome</h1>
//         <a href = "/about">About</a>`
//     )
// });

// app.get('/about', (req, res) => {
//     res.send(`<h1>About</h1>
//         <a href = "/">Home</a>`
//     )
// })


app.use(express.static('static'));

app.listen(3000, () => {
    console.log('server started');
})
