const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const filePath = path.join(process.cwd(), 'counters.json');
let counters = { home: 0, about: 0 };


const loadCounters = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        counters = JSON.parse(data);
    } catch (err) {
        console.log('Не удалось загрузить счётчики. Значения обнулены');
    }
};

const saveCounters = () => {
    fs.writeFileSync(filePath, JSON.stringify(counters, null, 2));
};

loadCounters();

app.get('/', (req, res) => {
    counters.home += 1;
    saveCounters();
    res.send(`<h1>Корневая страница</h1>
        <p>Просмотров: ${counters.home}</p>
        <a href ="/about">About</a>`);
});

app.get('/about', (req, res) => {
    counters.about += 1;
    saveCounters();
    res.send(`<h1>Страница about</h1>
        <p>Просмотров: ${counters.about}</p>
        <a href ="/">Корневая страница</a>`);
});


app.listen(port, () => {
    console.log(`Сервер запущен на http://127.0.0.1:${port}`);
    console.log('Для остановки сервера нажмите Q');
});



//выход
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (key) => {
    if (key === 'q' || key === 'Q') {
        process.exit(0);
    }
});