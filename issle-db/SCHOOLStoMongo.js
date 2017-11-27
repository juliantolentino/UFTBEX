'use strict';
/* 
Import modules/files you may need to correctly run the script. 
Make sure to save your DB's uri in the config file, then import it with a require statement!
*/
console.log("running");
var fs = require('fs'),
mongoose = require('mongoose'), 
Schema = mongoose.Schema, 
Listing = require('./SchoolsSchema'),
config = require('./config');

mongoose.connect(config.db.uri);
console.log(config.db.uri);
mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on("error", function(err) {
  console.log("Could not connect to mongo server!");
  return console.log(err);
});

fs.readFile('./books.json', 'utf8', function(err, data){
  if(err) throw err;
  var obj = JSON.parse(data);
  for(var Schools in obj){
	var listings = new Listing({isbn: obj[Schools].isbn,
                author: obj[Schools].author,
                course: obj[Schools].course,
                edition: obj[Schools].edition,
                instructor: obj[Schools].instructor,
                required: obj[Schools].required,
                title: obj[Schools].title
  });
	listings.save(function(err){
      
    });
  }
			
});


