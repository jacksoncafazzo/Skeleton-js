
function updateTime() {
  var time = moment().format('h:mm:ss A MMMM Do YYYY');
  document.getElementById('time').innerHTML = time;
  setTimeout(updateTime, 500);
}

$(document).ready(function() {
  $('#time').text(updateTime());
});
