
$(document).ready(function() {
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
        if (currentFontSize > 1) {
            $("#font-size-input").val(currentFontSize - 1);
            $("#question-content").css("font-size", currentFontSize - 1 + "px");
        }
    });

  // Increase font size
    $("#increase-font-size").on("click", function() {
        var currentFontSize = parseInt($("#font-size-input").val());
        if(currentFontSize <=30){
          $("#font-size-input").val(currentFontSize + 1);
          $("#question-content").css("font-size", currentFontSize + 1 + "px");
        }
    });

  // Change font size
    $("#font-size-input").change(function() {
      var currentFontSize = parseInt($(this).val());
      if (currentFontSize >= 1 && currentFontSize <= 30) {
        $("#question-content").css("font-size", currentFontSize);
      }
    });

  // Decrease timer size
    $("#decrease-timer-size").on("click", function (){
      var currentTimerSize = parseInt($("#timer-size-input").val());
      if(currentTimerSize >= 10){
        currentTimerSize -= 10;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize-100)/10);
      }
    });

  // Increase timer size
    $("#increase-timer-size").on("click", function (){
      var currentTimerSize = parseInt($("#timer-size-input").val());
      if(currentTimerSize < 500){
        currentTimerSize += 10;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize - 100)/10);
      }
    });

  // Change timer size
    $("#timer-size-input").change(function() {
      var currentTimerSize = parseInt($(this).val());
      if (currentTimerSize >= 0 && currentTimerSize <= 500) {
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize-100)/10);
      } else{
        currentTimerSize = 100;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20);
      }
    });

});