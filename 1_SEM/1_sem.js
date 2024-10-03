console.log('HelLo bitches');

/*
Изменить тело функции counter() таким образом, чтобы код вывел максимальное
количество цифр за одну секунду, при этом выполнение скрипта не должно
завершаться переполнением стека, а должно завершиться сообщением “Скрипт
успешно завершен!”.
function counter(n) {
    console.log(n);
    counter(n + 1);
}

counter(0);

setTimeout(function () {
    console.log("script end succesfully");
}, 1000);

*/



function counter(n) {
    console.log(n);
    setTimeout(() => {
        counter(n + 1);
    }, 100);

}

//counter(0);

// setTimeout(function () {
//     console.log("script end succesfully");
//     process.exit();
// }, 1000);



const htttp = require('http');
const server = htttp.createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/html', 'charset = utf-8');
    console.log('request');
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html ; charset = utf - 8' });
        res.end(`<h1>Start Page</h1>
            <a href="/about">About</a>`);
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html ; charset = utf - 8' });
        res.end(`<h1>About</h1>
            <a href="/">Start page</a>`)

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html ; charset = utf - 8' });
        res.end(`<h1>Ooops...</h1>`)
    }

});

server.listen(3000);

