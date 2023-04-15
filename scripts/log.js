
// Adding event listeners
const displayLogBtn = document.querySelector('#display-log-btn');
consoleLog = [];

// Helper function to format a timestamp in "mm:ss" format
function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// Adding event listener to the button
if(displayLogBtn){
  displayLogBtn.addEventListener('click', () => {
  // Loop through each item in the console log and add it to an array
  // for (let i = 0; i < consoleLog.length; i++) {
  //   const logItem = document.createElement('div');
  //   logItem.textContent = consoleLog[i];
  //   document.body.appendChild(logItem);
  // }
  
  // Retrieve existing log data from local storage
  let existingLog = JSON.parse(localStorage.getItem('consoleLog'));

  // Concatenate new log data to existing log data
  existingLog = existingLog ? existingLog.concat(consoleLog) : consoleLog;

  // Save updated log data to local storage
  localStorage.setItem('consoleLog', JSON.stringify(existingLog));
  
  window.location.href="end.html";
  });
}


