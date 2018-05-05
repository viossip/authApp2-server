var permitted = { sudo : '1111', admin : '1234', username : "password" };

var clients = { 000000000000000 : "1234:2" ,
                359457078472619 : "1111:3" } ; // etc.

var appRouter = function (app) {

    app.get("/", function(req, res) {

      var requestData = req.query;
      var num = Math.floor((Math.random() * 3) + 1);

      if(requestData.password && requestData.username && requestData.id){
        if(permitted[requestData.username] == requestData.password && clients[requestData.id]){
            var pass = clients[requestData.id].split(':');
            res.status(200).send(requestData.id + ":" + pass[0] + ":" + pass[1]);
        } else {
          res.status(401).send('Unauthorized');
        }
      } else {
        res.status(400).send('Data miss');
      }
    });
  }

module.exports = appRouter;