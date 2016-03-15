// var pingPong = require('./../js/ping-pong.js').pingPong;
//
// $(document).ready(function(){
//   $('#ping-pong').submit(function(event){
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = pingPong(goal);
//     output.forEach(function(element){
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });

var alarmObj = require('./../js/time.js');
var time = moment().format('h:mm:ss A MMMM Do YYYY');


function updateTime() {
  time = moment().format('h:mm:ss A MMMM Do YYYY');
  document.getElementById('time').innerHTML = time;
  if (alarm === moment().format('h:mm:ss A MMMM Do YYYY'))
    return console.log("DINGDINGDINGDINGDINGDINGDINGDINGDINGDING");
  }
  setTimeout(updateTime, 1000);
}

function ringTheAlarm() {

};

$(document).ready(function() {
  $("#time").text(updateTime());

  $("#alarmForm").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();
    ringTheAlarm(alarm);
    document.getElementById('#alarmPost').innerHTML = '<h4>This is your alarm: ' + alarm + '</h4>';
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
