
$(document).ready(function() {
  let initialTime = new Date().getTime();

  // Collapse or expnd the setting panel
    $("#panelToggle").click(function() {
      if ($(this).hasClass("collapsed")) {
        $(this).html('<i class="bi bi-chevron-compact-down"></i>');
      } else {
        $(this).html('<i class="bi bi-chevron-compact-up"></i>');
      }
    });

  // Decrease font size
    $("#decrease-font-size").on("click", function() {
      var currentFontSize = parseInt($("#font-size-input").val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if (currentFontSize > 1) {
        $("#font-size-input").val(currentFontSize - 1);
        $("#question-content").css("font-size", currentFontSize - 1 + "px");
        consoleLog.push(`[${formatedTime}], Section-0, User decreased font size to ${$("#font-size-input").val()}`);
      } else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to decrease font size below minimum`);
      }
     
    });

  // Increase font size
    $("#increase-font-size").on("click", function() {
      var currentFontSize = parseInt($("#font-size-input").val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if(currentFontSize <30){
        $("#font-size-input").val(currentFontSize + 1);
        $("#question-content").css("font-size", currentFontSize + 1 + "px");
        consoleLog.push(`[${formatedTime}], Section-0, User increased font size to ${$("#font-size-input").val()}`);
      } else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to increase font size over maximum`);
      }
      
    });

  // Change font size
    $("#font-size-input").change(function() {
      var currentFontSize = parseInt($(this).val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if (currentFontSize >= 1 && currentFontSize <= 30) {
        $("#question-content").css("font-size", currentFontSize); 
        consoleLog.push(`[${formatedTime}], Section-0, User changed font size to ${$(this).val()}`);
      } else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to change font size to an invalid value`);
      }
     
    });

  // Decrease timer size
    $("#decrease-timer-size").on("click", function (){
      var currentTimerSize = parseInt($("#timer-size-input").val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if(currentTimerSize > 10){
        currentTimerSize -= 10;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize-100)/10);
        consoleLog.push(`[${formatedTime}], Section-0, User decreased timer size to ${$("#timer-size-input").val()}`);
      } else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to decrease timer size below minimum`);
      }
      
    });

  // Increase timer size
    $("#increase-timer-size").on("click", function (){
      var currentTimerSize = parseInt($("#timer-size-input").val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if(currentTimerSize < 500){
        currentTimerSize += 10;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize - 100)/10);
        consoleLog.push(`[${formatedTime}], Section-0, User increased timer size to ${$("#timer-size-input").val()}`);
      } else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to increase timer size over maximum`);
      }
    });

  // Change timer size
    $("#timer-size-input").change(function() {
      var currentTimerSize = parseInt($(this).val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if (currentTimerSize >= 10 && currentTimerSize <= 500) {
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize-100)/10);
        consoleLog.push(`[${formatedTime}], Section-0, User changed timer size to ${$(this).val()}`);
      } else{
        currentTimerSize = 100;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20);
        consoleLog.push(`[${formatedTime}], Section-0, User tried to change timer size to an invalid value`);
      }
    });
  
  // Decrease img size
    $("#decrease-img-size").on("click", function() {
      var currentImgHeight = $("#sec0-qimg").height();
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if (currentImgHeight > 30)  {
        currentImgHeight -= 30;
        $("#image-size-input").val(currentImgHeight/3+ "%");
        $("#sec0-qimg").css("width", currentImgHeight/3 *4);
        $("#sec0-qimg").css("height", currentImgHeight);
        consoleLog.push(`[${formatedTime}], Section-0, User decreased image size to ${$("#image-size-input").val()}`);
      }
      else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to decrease image size below minimum`);
      }
    });
  
  // Increase img size
    $("#increase-img-size").on("click", function() {
      var currentImgHeight = $("#sec0-qimg").height();
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if (currentImgHeight < 600)  {
        currentImgHeight += 30;
        $("#image-size-input").val(currentImgHeight/3+ "%");
        $("#sec0-qimg").css("width", currentImgHeight/3 *4);
        $("#sec0-qimg").css("height", currentImgHeight);
        consoleLog.push(`[${formatedTime}], Section-0, User increased image size to ${$("#image-size-input").val()}`);
      } else{
        consoleLog.push(`[${formatedTime}], Section-0, User tried to increase image size over maximum`);
      }
    });

  // Change img size
    $("#image-size-input").change(function() {
      var currentImgSize = parseInt($(this).val());
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      if(currentImgSize >= 10 && currentImgSize <= 200){
        $("#image-size-input").val(currentImgSize + "%");
        consoleLog.push(`[${formatedTime}], Section-0, User changed image size to ${$(this).val()}`);
      } else{
        currentImgSize = 100;
        $("#image-size-input").val(currentImgSize + "%");
        consoleLog.push(`[${formatedTime}], Section-0, User tried to change image size to an invalid value`);
      }
      var imgHeight = 3 * currentImgSize;
      var imgWidth = 4 * currentImgSize;
      $("#sec0-qimg").css("width", imgWidth);
      $("#sec0-qimg").css("height", imgHeight);
    });
  
  // Change font style
    $("#font-style-select").on("change", function() {
        var selectedOption = $(this).children("option:selected").val();
        switch (selectedOption) {
            case "1":
                $("#question-content").css("font-family", "Arial, sans-serif");
                break;
            case "2":
                $("#question-content").css("font-family", "Georgia, serif");
                break;
            case "3":
                $("#question-content").css("font-family", "Verdana, sans-serif");
                break;
            case "4":
                $("#question-content").css("font-family", "Times New Roman");
                break;
            case "5":
                $("#question-content").css("font-family", "fantasy");
                break;
            case "6":
                $("#question-content").css("font-family", "cursive");
                break;
            case "7":
                $("#question-content").css("font-family", "monospace");
                break;
            case "8":
                $("#question-content").css("font-family", "Courier New");
                break;
            case "9":
                $("#question-content").css("font-family", "Helvetica");
                break;
            case "10":
                $("#question-content").css("font-family", "Lucida Console");
                break;
            default:
                $("#question-content").css("font-family", "inherit");
                break;
        }
        const currentTime = new Date().getTime();
        const relativeTimestamp = currentTime - initialTime;
        const formatedTime = formatTime(relativeTimestamp);
        consoleLog.push(`[${formatedTime}], Section-0, User changed font style to ${$('#font-style-select option:selected').text()}`);
    });
  
  // Change img position
    $("#img-pos-select").on("change", function(){
      var selectedOption = $(this).children("option:selected").val();
          switch (selectedOption) {
              case "1":
                $("#question-col").insertAfter($('#img-col'));
                break;
              default:
                $('#img-col').insertAfter($("#question-col"));
                break;
          }
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      consoleLog.push(`[${formatedTime}], Section-0, User changed image position to ${$("#img-pos-select option:selected").text()}`);
    });

  // Change bkg color
    $('#bkg-color-picker').on('change', function() {
      var selectedColor = $(this).val();
      $('body').css('background-color', selectedColor);
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      consoleLog.push(`[${formatedTime}], Section-0, User changed background color to ${$(this).val()}`);
    });

  // Change font color
   $('#font-color-picker').on('change', function() {
      var selectedColor = $(this).val();
      $('#question-content').css('color', selectedColor);
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(formatedTime);
      consoleLog.push(`[${formatedTime}], Section-0, User changed font color to ${$(this).val()}`);
    });
  
  // Change timer color
   $('#timer-color-picker').on('change', function() {
      var selectedColor = $(this).val();
      $('#Timer').css('color', selectedColor);
      const currentTime = new Date().getTime();
      const relativeTimestamp = currentTime - initialTime;
      const formatedTime = formatTime(relativeTimestamp);
      consoleLog.push(`[${formatedTime}], Section-0, User changed timer color to ${$(this).val()}`);
    });

  //TODO: set timer count up / count down


  // Reset
    $("#ui-reset-btn").on("click", function(){
      // reset timer color to black
      $('#Timer').css('color', '#000000');
      $('#timer-color-picker').val("#000000");
      // reset font color to black
      $('#question-content').css('color', '#000000');
      $('#font-color-picker').val("#000000");
      // reset background color to white
      $('body').css('background-color', '#ffffff');
      $('#bkg-color-picker').val("#ffffff");
      // reset img postion to the right
      $('#img-col').insertAfter($("#question-col"));
      $("#img-pos-select").val("default");
      // reset font style to default
      $("#question-content").css("font-family", "inherit");
      $("#font-style-select").val("default");
      // reset img size to 400*300
      $("#sec0-qimg").css("width", 400);
      $("#sec0-qimg").css("height", 300);
      $("#image-size-input").val(100 + "%");
      // reset timer size to 20px
      $("#Timer").css('font-size',  "20px");
      $("#timer-size-input").val(100 + '%');
      // reset font size to 16px
      $("#question-content").css("font-size", "16px");
      $("#font-size-input").val(16);
      // TODO: reset timer style
      
    });

});