// content of server.js
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var cmd=require('node-cmd');

app.use(express.static('public'));

app.post('/gameWon', function(req,res) {
	console.log("Game Won!!!");
	cmd.run('particle call porkchop-sandwiches digitalwrite D7,HIGH');
	setTimeout(function() {
		cmd.run('particle call porkchop-sandwiches digitalwrite D7,LOW');
	}, 500);
	res.send("You did win, though!");
});

app.listen(port);