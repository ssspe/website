const express = require("express");
const router = express.Router();
const https = require("https");
const fs = require('fs');

var gitRepos = '';

function requestGitHubRepo() {
   console.log("Requesting git repos: " +  new Date());
   var options = {
     host: 'api.github.com',
     path: '/users/ssspe/repos',
     method: 'GET',
     headers: {'user-agent': 'node.js'}
   };
   gitRepos = '';
   var request = https.request(options, function(response){

     response.on("data", function(chunk){
         gitRepos += chunk.toString('utf8');
     });

     response.on("end", function(){
         console.log("Recieved git repos.");
     });
   });

   request.end();
}

// function requestBitBucketRepo() {
//    console.log("Requesting bitbucket repos: " +  new Date());
//    var options = {
//      host: 'api.bitbucket.org',
//      path: '/2.0/repositories/ssspe',
//      method: 'GET',
//      headers: {'user-agent': 'node.js'}
//    };
//    gitRepos = '';
//    var request = https.request(options, function(response){
//
//      response.on("data", function(chunk){
//          gitRepos += chunk.toString('utf8');
//      });
//
//      response.on("end", function(){
//          console.log("Recieved git repos.");
//      });
//    });
//    console.log(request);
//
//    request.end();
// }

function requestRepoReadMe(repo, callback) {
   console.log("Requesting" + repo + "s read me: " +  new Date());
   var options = {
     host: 'api.github.com',
     path: '/repos/ssspe/' + repo + '/readme',
     method: 'GET',
     headers: {'user-agent': 'node.js'}
   };
   var readMe = '';
   var request = https.request(options, function(response){
     response.on("data", function(chunk){
       readMe += chunk;
     });

     response.on("end", function(){
       var json = JSON.parse(readMe);
       var decodedReadMe = '';
       try {
          decodedReadMe = Buffer.from(json.content, 'base64').toString('ascii');
        }
        catch(error) {
          console.log(error);
        }

       callback(decodedReadMe);
       console.log("Recieved repo " + repo + "s read me.");
     });
   });

   request.end();
}

function requestcv(callback) {
   console.log("Requesting CV: " +  new Date());
   var json = fs.readFile('./static/CV.json', 'utf8', function (err,data) {
     if (err) {
       return console.log(err);
     }
     console.log(data);
     callback(data);
   });
}

router.get("/getGitHubRepo", (req, res) => {
  return res.json({ success: true, data: gitRepos });
});

router.get("/getGitHubReadMe", (req, res) => {
  requestRepoReadMe(req.query.repo, function(val) {
    var json = { 'data': val };
    return res.json({ success: true, data: json });
  });
});

router.get("/getCVInfo", (req, res) => {
  console.log("Spencer is great");
  requestcv(function(val) {
    return res.json({ success: true, data: JSON.parse(val) });
  });
});

module.exports = {router, requestGitHubRepo, requestRepoReadMe};
