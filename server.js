let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,resp) {
    resp.sendFile(__dirname+
    '/dist/demo-deploy/index.html');
});

app.listen(process.env.PORT || 8080);