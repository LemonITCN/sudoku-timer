var monitor

$(function () {
  $('.menu .item').tab();
  $(document).keydown(function (e) {
    if (!e) var e = window.event;
    if (e.keyCode == 32) {
      alert("hha");
    }
  });

  $("#openMonitor").click(function () {
    monitor = window.open('../monitor/monitor.html', 'Sudoku', 'toolbar=no, menubar=no, location=no, status=no')
  })

  $("#hideMonitor").click(function () {
    monitor.close()
  })

})

function c(v) {
  var reader = new FileReader();
  reader.onload = function (evt) {
    $(v).after('<img src="' + evt.target.result + '" />');
    // alert(evt.target.result)
  }
  reader.readAsDataURL(v.files[0]);
}
