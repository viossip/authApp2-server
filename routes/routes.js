var credentials = {sudo : '1111', admin : '1234', user : "4321"};

var appRouter = function (app) {

    app.get("/", function(req, res) {

      var creds = req.query;
      var num = Math.floor((Math.random() * 3) + 1);

      if(creds.password && creds.username){
        if(credentials[creds.username]== creds.password){
          res.status(200).send("flip_" + num +"_times");
        } else {
          res.status(401).send('Unauthorized');
        }
      } else {
        res.status(400).send('Error');
      }
    });
  }

module.exports = appRouter;