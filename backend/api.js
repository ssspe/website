const express = require("express");
const router = express.Router();
const https = require("https");

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

router.get("/getGitHubRepo", (req, res) => {
  return res.json({ success: true, data: gitRepos });
});

module.exports = {router, requestGitHubRepo};
