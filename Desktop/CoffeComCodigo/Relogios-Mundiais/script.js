function updateClocks() {
  var clocks = document.getElementsByClassName('clock');

  for (var i = 0; i < clocks.length; i++) {
    var timezone = clocks[i].getAttribute('data-timezone');
    var now = new Date().toLocaleString('en-US', { timeZone: timezone });

    clocks[i].textContent = `${timezone.split('/')[1]}: ${now}`;
  }
}


setInterval(updateClocks, 1000);


updateClocks();