function indexGame(req , res) {

  // data return so now we can render
  res.render("../views/index.ejs",{
    title: "Home",
  });
}

module.exports = {
  index: indexGame
};