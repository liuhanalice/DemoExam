$(document).ready(function () {
    const totalTime = 1 * 70;
    let countDownTime = totalTime;
    let countUpTime = 0;
    const timerItem = $('#Timer');
    let onem_alert = 0;
    let isCountUp = false;


    let Dmin = 0;
    let Dsec = 0;
    let Umin = 0;
    let Usec = 0;

    let countdownInterval = setInterval(updateCountDown, 1000);
    let countupInterval = setInterval(updateCountUp, 1000);
    timerItem.text(`${Dmin}:${Dsec}`);


    function updateCountDown(){
        Dmin = Math.floor(countDownTime / 60);
        Dsec = countDownTime % 60;
        if (Dsec < 10) {
            Dsec = '0' + Dsec;
        }
        
        if(!isCountUp){
            timerItem.text(`${Dmin}:${Dsec}`);
        } else{
            timerItem.text(`${Umin}:${Usec}`);
        }
            
        if (countDownTime == 0) {
            clearInterval(countdownInterval);
            clearInterval(countupInterval);
            alert("Time's up!"); 
            submitSection();
        } else {
            countDownTime -= 1;
            if (countDownTime < 60 && onem_alert == 0) {
                toastr.warning("This section is about to close soon!",'',{
                    "closeButton": true,
                    "positionClass": "toast-top-center",
                    "showDuration": "2000",
                    "hideDuration": "1000",
                    "timeOut": "5000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                });
                onem_alert = 1;
            }
        }
    }

    function updateCountUp(){
        Umin = Math.floor(countUpTime / 60);
        Usec = countUpTime % 60;
        if (Usec < 10) {
            Usec = '0' + Usec;
        }
        
        if(isCountUp){
            timerItem.text(`${Umin}:${Usec}`);
        } else{
            timerItem.text(`${Dmin}:${Dsec}`);
        }

        if (countUpTime < totalTime) {
          countUpTime += 1;
        } 
    }

    $('#toggleTimerBtn').click(function () { // Hide Time Button
        if (timerItem.css('display') !== 'none') {
            timerItem.hide();
            $(this).text('Display Time');
            $('#timer-style-btn').hide(); 
        } else {
            timerItem.show();
            $(this).text('Hide Time');
            $('#timer-style-btn').show(); 
        }
    });

    $('#timer-style-btn').click(function () {
        if (!isCountUp) {
            isCountUp = true;
        } else {
            isCountUp = false;
        }
    });

});