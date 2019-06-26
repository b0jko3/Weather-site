var http = require('https');

// Get the container element
var btnContainer = document.getElementsByClassName("navigation")[0];

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByTagName("a");


// Loop through the buttons and add the current class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current"
  });
};

// Get Weather Data
var url = "https://api.myjson.com/bins/i7mtg";

function get_json(url, callback) {
  http.get(url, function(res) {
      var body = '';
      res.on('data', function(chunk) {
          body += chunk;
      });

      res.on('end', function() {
          var response = JSON.parse(body);

          callback(response);
      });
  });
}

var mydata = get_json(url, function (resp) {
  console.log(resp);

  
});


