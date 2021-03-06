var http = require('http');

const PORT = 5001;

function requestHandler(req, res) {
	res.end(`Hello welcome to the Docker world with ${process.platform}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, function(){
	console.log(`${process.env.NODE_ENV} server listening on port: ${PORT}. CTRL-C to exit.`);
});
