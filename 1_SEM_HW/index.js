/*
Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
*/

const http = require('http');
const httpPort = 3000;
let homePageViewsCounter = 0;
let aboutPageViewsCounter = 0;

const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {

        homePageViewsCounter++;

        res.writeHead(200);
        res.end(`
            <html>
                <head><title>Home Page</title></head>
                <body>
                    <h1>Home Page</h1>
                    <p>Кол-во просмотров: ${homePageViewsCounter}</p>
                    <a href="/about">About</a>

                </body>
            </html>
        `);
    }
    else if (req.url === '/about') {

        aboutPageViewsCounter++;

        res.writeHead(200);
        res.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About</h1>
                    <p>Кол-во просмотров: ${aboutPageViewsCounter}</p>
                    <a href="/">Home page</a>
                </body>
            </html>
        `);
    }
    else {
        res.writeHead(404);
        res.end(`
            <html>
                <head><title>404</title></head>
                <body>
                    <h1>Ooops! Страница не найдена...</h1>
                    <a href="javascript:history.back()">Вернуться назад</a>
                </body>
            </html>
            `)
    }
});


httpServer.listen(httpPort, () => {
    console.log(`Сервер запущен на http://127.0.0.1:${httpPort}`);
    console.log('Для остановки сервера нажмите Q');
});

// для выхода
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (key) => {
    if (key === 'q' || key === 'Q') {
        process.exit(0);
    }
});

