// grab the packages/variables we need
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// configure the app
// =================================================
// tell node where to look for the site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// configure instagram app with client-id
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: '2235677325.1677ed0.c010dfdd8f9542ac8a32779cd27a3e6a',
    client_id: 'e53c88191766433897d1e6e52d9f3749',
    client_secret: '00e5b333f5504651af822dcf4afc8558'
});


// set the routes
// =================================================
// home page route - popular images
app.get('/', function(req, res) {

    // use the instagram package to get popular media
    ig.media_popular(function(err, medias, remaining, limit) {
        // render the home page and apss in the popular images
        res.render('pages/index', { grams: medias });
    });

});

// start the server
// ================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
