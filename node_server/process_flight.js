var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// create  application /x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended:falsse})
app.use(express.static('public'));
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");

})
app.post('process_flights.js', express.urlencodedParser, function(req, res){

    //prepare out put in JSON format
    response = {
        flight_name:req.body.flight_name,
        flight_number:req.body.flight_number
    };
    console.log(response)
    res.end(JSON.stringify(response));
})

var server = app.listen(5000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("App is listening at http://%s:%s", host, port)

})