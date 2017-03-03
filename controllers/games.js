var request = require('request');
var req_options = {
	headers: {'user-agent': 'Mozilla/5.0'}
}
var market = require('steam-market-pricing');


function indexGame(req , res) {
  // REe
  res.render("../views/index.ejs");
}

function search (req, res) {
	var searchQuery = req.params.searchTerm
	// use 'request' module to query API, reply with an error or any games that are found.
	request('http://www.giantbomb.com/api/search/?api_key='+process.env.GBAPIK+'&format=json&query="'+searchQuery+'"&resources=game', 
		req_options,
		function (error, response, body) {
		  if (!error && response.statusCode == 200) {
			res.json(body)

		  }else{
		  	res.status(500).json(error)
		  }
		}
	)
}

function showGame (req, res) {
	var name = req.params.name
	console.log(name);
	// use 'request' module to query API, reply with an error or any games that are found.
	request('http://www.giantbomb.com/api/search/?api_key='+process.env.GBAPIK+'&format=json&query="'+name+'"&resources=game', 
		req_options,
		function (error, response, body) {
		  if (!error && response.statusCode == 200) {
			res.json(body)
			console.log('RESULTS: '+ res.json(body).results);
			// market.getItemPrice(730,self.data.name , function(err, data) {
			//     if(!err) {
			//         console.log(data);
			//     }
			// });
		  }else{
		  	res.status(500).json(error)
		  }
		}
	)
}

module.exports = {
  index: indexGame,
  search: search,
  show: showGame
};