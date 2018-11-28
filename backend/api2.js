const express = require("express");
const router = express.Router();
const https = require("https");

router.get("/getGitHubRepo2", (req, res) => {
  var options = {
    host: 'api.github.com',
    path: '/users/ssspe/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'}
  };
  var body = '';
  var request = https.request(options, function(response){

    response.on("data", function(chunk){
        body += chunk.toString('utf8');
    });

    response.on("end", function(){
        console.log("Ended2");
        return res.json({ success: true, data: body });
    });
  });

  request.end();
});

module.exports = router;
