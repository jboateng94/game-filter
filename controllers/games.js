var request = require('request');
var req_options = {
	headers: {'user-agent': 'Mozilla/5.0'}
}
function indexGame(req , res) {
  // REe
  res.render("../views/index.ejs");
}

function search (req, res) {
	var searchQuery = req.params.searchTerm
	// console.log(process.env.GBAPIK)
	// use 'request' module to query API, reply with an error or any games that are found.
	request('http://www.giantbomb.com/api/search/?api_key='+process.env.GBAPIK+'&format=json&query="'+searchQuery+'"&resources=game', 
		req_options,
		function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	// console.log('success') 
			res.json(body)
			}else{
		  	// console.log('error')
		  	// console.log(body);
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
		  	// console.log('success')
		    console.log('IT WORKED: '+body) // Show the JSON of the search query. 
			res.json(body)
			}else{
		  	// console.log('error')
		  	// console.log(body);
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