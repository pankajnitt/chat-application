var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
// function to send 404 if requested file is not available;
function send404(response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404 :  resource not found');
	response.end();
}
// function to send file if requested file is  availabe
funtion sendFile(response, filePath, fileContents) {
	response.writeHead(200, {'Content-type' : mime.lookup(path.basename(filePath)) });
	response.end(fileContents);
}
