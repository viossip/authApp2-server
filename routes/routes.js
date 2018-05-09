var permitted = { sudo : '1111', admin : '1234', username : "password" };

var clients = { 000000000000000 : "1234:2" ,
                359457078472619 : "1111:3" ,
                356421070399199 : "1212:3" } ; // etc.

var appRouter = function (app) {

    app.get("/", function(req, res) {

      var requestData = req.query;

      if(requestData.password && requestData.username && requestData.id){
        if(permitted[requestData.username] == requestData.password && clients[requestData.id]){
            res.status(200).send(requestData.id + ":" + clients[requestData.id]);
        } else {
          res.status(401).send('Unauthorized');
        }
      } else {
        res.status(400).send('Data miss');
      }
    });
  }

module.exports = appRouter;