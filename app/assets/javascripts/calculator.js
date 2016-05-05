$(document).ready(function(){

    var name = "", gender = "female"; 
    var weight = 150;
    var BAC = 0.0, totalDrinks = 0, totalSeconds = 0;
    var gramsPerDrink = 14;
    //value to be multiplied by gender
    var r = 0.55;
    var countDownSeconds = 0, countDownMinutes = 0, countDownHours = 0;
    var secondsUntillSober;

  $('#user_info_submit').click(function(){
    $('#calculator').show();
    name = $('#user_name').val();
    gender = $('#user_gender').val();
    weight = $('#user_weight').val();
    gender = gender.toLowerCase().trim();
    
    if (gender != "male") gender = "female";
    if (gender == 'male') r = 0.68;
    if (gender == 'female') r = 0.55;
    // Convert wieght from pounds to grams
    weight =  weight * 453.592; 
    timer();    
  });

  $('#add_drink').click(function(){
    addedBAC = gramsPerDrink/(weight *r) *100;
    BAC += addedBAC;
    totalSeconds = 0;
    totalDrinks++;
    secondsUntillSober =  findSoberTime(BAC);
    document.getElementById('total_drinks').innerHTML = totalDrinks;
    document.getElementById('output').innerHTML = BAC.toFixed(4);
  });

    var findSoberTime = function(BAC){
        var time = 0;
        if (BAC >= 0.08) time = 3600*((-0.08 + BAC) / 0.015);
            else time = 0;
        
        return time;
    };

    var countDownUntilSober = function() {
        if (secondsUntillSober >0)  secondsUntillSober--;
            else{ secondsUntillSober = 0;};
       
        secondsUntillSober = parseInt(secondsUntillSober, 10);
        countDownHours   = Math.floor(secondsUntillSober / 3600);
        countDownMinutes = Math.floor((secondsUntillSober - (countDownHours * 3600)) / 60);
        countDownSeconds = secondsUntillSober - (countDownHours * 3600) - (countDownMinutes * 60);

        if (countDownHours   < 10) {countDownHours   = "0"+countDownHours;}
        if (countDownMinutes < 10) {countDownMinutes = "0"+countDownMinutes;}
        if (countDownSeconds < 10) {countDownSeconds = "0"+countDownSeconds;}

    };

    var oneSecondPassed = function() {
        totalSeconds++;
        calulateBAC();
        document.getElementById('output').innerHTML = BAC.toFixed(4);
        countDownUntilSober();
        document.getElementById('sober_clock').innerHTML =
        countDownHours + ":" + countDownMinutes + ":" + countDownSeconds;
        timer();
    };

    var timer = function() {
        t = setTimeout(oneSecondPassed, 1000);
    };

    var calulateBAC = function(){
        if (BAC > 0) {
            var hoursElapsed = totalSeconds * 0.0002778;
            BAC -= hoursElapsed * 0.015;
        }else{ BAC = 0};
    };
});