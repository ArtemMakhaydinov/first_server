const http = require('http');
const port = 8080;
const fs = require('fs');

const server = http
    .createServer((req, res) => {
        let path = './views/';

        switch (req.url) {
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
            case '/about-me':
                res.statusCode = 301;
                res.setHeader('Location', 'about');
                res.end();
                break;
            case '/contact-me':
                path += 'contact-me.html';
                res.statusCode = 200;
                break;
            default:
                path += '404.html';
                res.statusCode = 404;
                break;
        }

        fs.readFile(path, (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.end(data);
            }
        });
    })
    .listen(port);
