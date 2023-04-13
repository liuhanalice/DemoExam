$(document).ready(function () {
  const totalTime = 1 * 100;
  let time = totalTime;
  const countDownE = $('#Timer');
  let countdownInterval = setInterval(updateCountdown, 1000);
  let onem_alert = 0;
  let isCountUp = false;
  let remainingTime = 0;

  function updateCountdown() {
    const min = Math.floor(time / 60);
    let second = time % 60;
    if (second < 10) {
      second = '0' + second;
    }
    countDownE.text(`${min}:${second}`);

    if (time == 0) {
      clearInterval(countdownInterval);
      alert("Time's up!");
    } else {
      time -= 1;

      if (time < 60 && onem_alert == 0) {
        alert("The test is about to close soon!");
        onem_alert = 1;
      }
    }
  }

  function startCountUp(remainingTime) {
    clearInterval(countdownInterval);
    countDownE.text('');

    let countUpTime = totalTime - remainingTime;
    let countUpInterval = setInterval(() => {
      const min = Math.floor(countUpTime / 60);
      let second = countUpTime % 60;
      if (second < 10) {
        second = '0' + second;
      }
      countDownE.text(`${min}:${second}`);

      if (countUpTime > totalTime) {
        clearInterval(countUpInterval);
        alert("Time's up!");
      } else {
        countUpTime += 1;
      }
    }, 1000);
  }

  $('#toggleTimerBtn').click(function () {
    if (countDownE.css('display') !== 'none') {
      countDownE.hide();
      $(this).text('Display Time');
      $('#countUpBtn').hide(); // hide count up/down button
    } else {
      countDownE.show();
      $(this).text('Hide Time');
      $('#countUpBtn').show(); // show count up/down button
    }
  });

  $('#countUpBtn').click(function () {
    if (!isCountUp) {
      clearInterval(countdownInterval);
      remainingTime = time;
      startCountUp(remainingTime);
      $(this).text('Count Down');
      isCountUp = true;
    } else {
      clearInterval(countdownInterval);
      countdownInterval = setInterval(updateCountdown, 1000);
      $(this).text('Count Up');
      isCountUp = false;
    }
  });
});
