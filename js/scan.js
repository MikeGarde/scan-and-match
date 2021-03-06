var audio = new Audio('audio/feedback-correct-18.mp3');

$(document).ready(function () {

  $('form').submit(function (e) {
    e.preventDefault();

    var isMatch    = false;
    var scanValue  = $('#scanValue').val().replace(/\*/, '').replace(/\s/m, '');
    var seekValues = $('#seekValues').val().split("\n");

    $.each(seekValues, function (index, value) {
      var regex = new RegExp(value, 'i');

      if (value === '') {
        return true;
      }

      if (regex.exec(scanValue) !== null) {
        confirmMatch();
        isMatch = true;
      }
    });

    appendHistory(scanValue, isMatch);
    $('#scanValue').val('').focus();
  });

  $('a#confirm').on('click', function (e) {
    e.preventDefault();
    clearMatch();
  });
});

function confirmMatch() {
  audio.currentTime = 0.2;
  audio.play();

  $('html, div').css('background-color', '#60c655');
  $('#scanValue').val('').focus();
}

function clearMatch() {
  $('html, div').css('background-color', '');
  $('#scanValue').val('').focus();
}

function appendHistory(scanValue, match) {
  if (match) {
    $('#history').prepend('<li class="match">' + scanValue + '</li>')
  } else {
    $('#history').prepend('<li>' + scanValue + '</li>')
  }
}