/**
 * Basic static server
 * Authors: Yolanda Ribas & Jorge Rivera
*/
var app = require('connect')();
var staticServer = require('serve-static'); // Require static server middleware
var port = process.env.PORT || 8080;
var hostName = process.env.IP || 'localhost';
app.use(staticServer('public'));

app.listen(port, hostName);
console.log('Connect server is listening at port: %s in server: %s', port, hostName);

