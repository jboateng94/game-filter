function indexGame(req , res) {

  // data return so now we can render
  res.render("../views/index.ejs",{test:"it worked"});
}

module.exports = {
  index: indexGame
};