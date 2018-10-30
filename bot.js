var Discord = require('discord.io');
var request = require('request');

var bot = new Discord.Client({
	token: "ballsack69",
	autorun: true
});

bot.on('ready', function() {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

var cli = new Discord.Client({autoReconnect:true});

// Initializing the bot

bot.on('message', function (user, userID, channelID, message, evt){
	if (message === "!ping") {
		bot.sendMessage({
			to: channelID,
			message: "Pong!"
		});
	}

	if (message === "!coin") {
		bot.sendMessage({
			to: channelID,
			message: "To use, type !coin coinname"
		});
	}

    if (message === "!commands") {
    bot.sendMessage({
        to: channelID,
        message: "!coin, !ping, !collin"
    });
	}

	if (message === "!collin") {
		bot.sendMessage({
			to: channelID,
			message: "**Golly!**"
		});
	}

	if (message === "queenie") {
		bot.sendMessage({
			to: channelID,
			message: "https://i.imgur.com/nByG16x.png"
		});
	}

	if (message.includes("low t")) {
		bot.sendMessage({
			to: channelID,
			message: "https://i.imgur.com/RQ53Yjc.png"
		});
	}

	if (message.includes("high t")) {
		bot.sendMessage({
			to: channelID,
			message: "https://i.imgur.com/z04xTnr.png"
		});
	}

	if (message === '!eth') {
		var url = 'https://api.gdax.com/products/ETH-USD/ticker';
		var msg ='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (error, response, data) => {
			if (error) {
				console.log('Error:', error);
				msg='Error '+ error;
			} else if (response.statusCode !== 200) {
				msg = 'Error Status code : '+response.statusCode;
				console.log('Status:', response.statusCode);
			} else {
		      msg = data.price;
				msg = parseFloat(msg).toFixed(2);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("**CURRENT ETH-USD PRICE**: $" + msg)
		      });
		  }
		});
	}

	if (message === '!btc') {
		var url = 'https://api.gdax.com/products/BTC-USD/ticker';
		var msg ='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (error, response, data) => {
			if (error) {
				console.log('Error:', error);
				msg='Error '+ error;
			} else if (response.statusCode !== 200) {
				msg = 'Error Status code : '+response.statusCode;
				console.log('Status:', response.statusCode);
			} else {
		      msg = data.price;
				msg = parseFloat(msg).toFixed(2);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("**CURRENT BTC-USD PRICE**: $" + msg)
		      });
		  }
		});
	}

	if (message === '!ltc') {
		var url = 'https://api.gdax.com/products/LTC-USD/ticker';
		var msg ='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (error, response, data) => {
			if (error) {
				console.log('Error:', error);
				msg='Error '+ error;
			} else if (response.statusCode !== 200) {
				msg = 'Error Status code : '+response.statusCode;
				console.log('Status:', response.statusCode);
			} else {
		      msg = data.price;
				msg = parseFloat(msg).toFixed(2);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("**CURRENT LITcoin :fire: PRICE**: $" + msg)
		      });
		  }
		});
	}


	if (message === '!cap') {
		var url = 'https://api.coinmarketcap.com/v1/global/';
		var msg ='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (error, response, data) => {
			if (error) {
				console.log('Error:', error);
				msg='Error '+ error;
			} else if (response.statusCode !== 200) {
				msg = 'Error Status code : '+response.statusCode;
				console.log('Status:', response.statusCode);
			} else {
		      msg = data.total_market_cap_usd;
			  msg = parseFloat(msg).toLocaleString();
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("**CURRENT MARKETCAP**: $" + msg)
		      });
		  }
		});
	}