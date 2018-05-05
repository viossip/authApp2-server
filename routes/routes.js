//var creds = { username : "username", password : "pass"}
var username = 'username';
var password = 'pass';

var appRouter = function (app) {
    app.get("/", function(req, res) {
      var creds = req.query;
      console.log("------------- " + JSON.stringify(creds.id));
      if (username == creds.username && password == creds.password)
        res.status(200).send("blabla");
      else
        res.status(401).send('');
    });
  }

module.exports = appRouter;