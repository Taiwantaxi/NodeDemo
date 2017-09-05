var app = require('express')();

app.get('/', function(req, res){
  console.log(req.body);
  res.send('Hello World');
});

app.listen(3000, function(){
  console.log('Listening on *:3000');
});


