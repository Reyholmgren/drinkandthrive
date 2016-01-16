$(document).ready(function(){
  $('#user_info_submit').click(function(){
    var name = $('#user_name').val();
    var gender = $('#user_gender').val();
    var weight = $('#user_weight').val();

    var BAC = 0.0;
    var gramsPerDrink = 14;
    var bodyWeight = 150;
    var male = true;
    var r = 0.0
    var lastDrinkTime = new Date();
    var fastForward = false;
    ​
    var seconds = 0, minutes = 0, hours = 0, totalSeconds = 0;
    var countDownSeconds = 0, countDownMinutes = 0, countDownHours = 0;
    var timeUntillSober;
    ​
    var t;
    var t2;
    ​
    var time = 1000;  
  });

  function bodyWeight({
    bodyWeight = bodyWeight * 453.592;
  })
});