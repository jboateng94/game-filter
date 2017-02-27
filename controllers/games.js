function indexGame(req , res) {

  res.render("../views/index.ejs",{
    title: "Home",
  });
}

module.exports = {
  index: indexGame
};