const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type' : 'application/json'})

    let salida = {
        nombre: 'Felipe',
        edad: 29,
        url: request.url
    }

    response.write(JSON.stringify(salida));

    //response.write('Holitas! :D');
    response.end();

})
.listen(8080);

console.log('http://localhost:8080');