window.onload = function () {
  window.setInterval(function () {
    var time = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = time.toLocaleTimeString();
  }, 1000);
};