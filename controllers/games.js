function indexGame(req , res) {

  res.render("../views/index.ejs",{
    title: "Home",
  });
}

function search (req, res) {
	var searchQuery = req.body.searchTerm
	// use 'request' module to query API, reply with and error or any games that are found.

	res.json({done: true})
}

module.exports = {
  index: indexGame,
  search: search
};