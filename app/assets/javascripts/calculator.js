$(document).ready(function(){

    var name = ""; 
    var gender = "female";
    var weight = 150;
    var BAC = 0.0;
    var totalDrinks = 0;
    //constants
    var gramsPerDrink = 14;
    var r = 0.0

    var lastDrinkTime = new Date();
    var seconds = 0, minutes = 0, hours = 0, totalSeconds = 0;
    var countDownSeconds = 0, countDownMinutes = 0, countDownHours = 0;
    var timeUntillSober;
    var t;
    var t2;
    var time = 1000;  

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
      });

      $('#add_drink').click(function(){
        addedBAC = gramsPerDrink/(weight *r) *100;
        BAC += addedBAC;
        console.log("BAC: " + BAC)

         clearTimeout(t);
         seconds = 0; minutes = 0; hours = 0;
         timer();
         totalSeconds = 0;
        timeUntillSober =  findSoberTime(BAC);
        console.log(timeUntillSober);
        totalDrinks++;
        console.log("Total Drinks: " + totalDrinks);
        document.getElementById('total_drinks').innerHTML = totalDrinks;
      });

    var findSoberTime = function(BAC){
        
        if (BAC >= 0.08) {
            time = 3600*((-0.08 + BAC) / 0.015);
        }else{
            time = 0;
        };
        return time.toFixed(2);
    };

    var countDown = function() {
        if (timeUntillSober >0) {
             timeUntillSober--;
            }else{
                timeUntillSober = 0
            };
       
        //console.log(timeUntillSober);
        //timeUntillSober = 4230;
        timeUntillSober = parseInt(timeUntillSober, 10);
        countDownHours   = Math.floor(timeUntillSober / 3600);
        countDownMinutes = Math.floor((timeUntillSober - (countDownHours * 3600)) / 60);
        countDownSeconds = timeUntillSober - (countDownHours * 3600) - (countDownMinutes * 60);

        if (countDownHours   < 10) {countDownHours   = "0"+countDownHours;}
        if (countDownMinutes < 10) {countDownMinutes = "0"+countDownMinutes;}
        if (countDownSeconds < 10) {countDownSeconds = "0"+countDownSeconds;}

    };

    var add = function() {
        totalSeconds++;
        console.log("totalSeconds:"+ totalSeconds);
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        // if (hours   < 10) {hours   = "0"+hours;}
        // if (minutes < 10) {minutes = "0"+minutes;}
        // if (seconds < 10) {seconds = "0"+seconds;}
        
        timer();
    };

    var timer = function() {
        t = setTimeout(add, 1000);
        t2 = setTimeout(countDown, 1000);

        // document.getElementById('last_drink_clock').innerHTML =
        // hours + ":" + minutes + ":" + seconds;

        document.getElementById('sober_clock').innerHTML =
        countDownHours + ":" + countDownMinutes + ":" + countDownSeconds;

        calulateBAC();

        document.getElementById('output').innerHTML = BAC.toFixed(4);

    };

    var calulateBAC = function(){
        if (BAC > 0) {
            var hoursElapsed = totalSeconds * 0.0002778;
            BAC -= hoursElapsed * 0.015;
        }
        else{ BAC = 0}
    };
});