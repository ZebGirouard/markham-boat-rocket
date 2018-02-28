// content of server.js
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
var cmd=require('node-cmd');

app.use(express.static('public'));

app.post('/gameWon', function(req,res) {
	console.log("Game Won!!!");
	//cmd.run('./boatyMcBoatFace.sh');
	//cmd.run('./oneTest.sh');
	setTimeout(function() {
		//cmd.run('./boatyMcOffFace.sh');
		//cmd.run('./twoTest.sh');
	}, 5000);
	res.send("You did win, though!");
});

app.listen(port);