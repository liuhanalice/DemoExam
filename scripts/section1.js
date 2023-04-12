
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
        } else{
          $("#font-size-input").val(16);
          $("#question-content").css("font-size", 16 + "px");
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
      if(currentTimerSize > 10){
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
      if (currentTimerSize >= 10 && currentTimerSize <= 500) {
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20+(currentTimerSize-100)/10);
      } else{
        currentTimerSize = 100;
        $("#timer-size-input").val(currentTimerSize + '%');
        $("#Timer").css('font-size',  20);
      }
    });
  
  // Decrease img size
    $("#decrease-img-size").on("click", function() {
      var currentImgHeight = $("#sec0-qimg").height();
      if (currentImgHeight > 30)  {
        currentImgHeight -= 30;
        $("#image-size-input").val(currentImgHeight/3+ "%");
        $("#sec0-qimg").css("width", currentImgHeight/3 *4);
        $("#sec0-qimg").css("height", currentImgHeight);
      }
    });
  
  // Increase img size
    $("#increase-img-size").on("click", function() {
      var currentImgHeight = $("#sec0-qimg").height();
      if (currentImgHeight < 600)  {
        currentImgHeight += 30;
        $("#image-size-input").val(currentImgHeight/3+ "%");
        $("#sec0-qimg").css("width", currentImgHeight/3 *4);
        $("#sec0-qimg").css("height", currentImgHeight);
      }
    });

  // Change img size
    $("#image-size-input").change(function() {
      var currentImgSize = parseInt($(this).val());
      if(currentImgSize >= 10 && currentImgSize <= 200){
        $("#image-size-input").val(currentImgSize + "%");
      } else{
        currentImgSize = 100;
        $("#image-size-input").val(currentImgSize + "%");
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
    });

  // Change bkg color
    $('#bkg-color-picker').on('change', function() {
      var selectedColor = $(this).val();
      $('body').css('background-color', selectedColor);
    });

  // Change font color
   $('#font-color-picker').on('change', function() {
      var selectedColor = $(this).val();
      $('#question-content').css('color', selectedColor);
    });
  
  // Change timer color
   $('#timer-color-picker').on('change', function() {
      var selectedColor = $(this).val();
      $('#Timer').css('color', selectedColor);
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

    const questions=[
      {
        question: "A certain pet store sells only dogs and cats. In March, the store sold twice as many dogs as cats. In April, the store sold twice the number of dogs that it sold in March, and three times the number of cats that it sold in March. If the total number of pets the store sold in March and April combined was 500, how many dogs did the store sell in March?",
        options: ["80","100","120","160","180"]
      },
      {
        question: "The average (arithmetic mean) high temperature for x days is 70 degrees. The addition of one day with a high temperature of 75 degrees increases the average to 71 degrees. Quantity A: x; Quantity B: 5.",
        options: ["Quantity A is greater.", "Quantity B is greater.", "The two quantities are equal.", "The relationship cannot be determined from the information given."]
      },
      {
        question: " Upon visiting the Middle East in 1850, Gustave Flaubert was so _______ belly dancing that he wrote, in a letter to his mother, that the dancers alone made his trip worthwhile.",
        options: ["overwhelmed by", "enamored by", "taken aback by", "beseeched by", "flustered by"]
      },
    ]

  let currentQuestionIndex = 0;
  const userAnswers = {};
  const $questionText = $('#question-text');
  const $optionsForm = $('#options-form');

  function updateQuestion() {
    $('#question-number').text((currentQuestionIndex + 1).toString());
    const currentQuestion = questions[currentQuestionIndex];
    $questionText.text(currentQuestion.question);
    $optionsForm.empty();
    $.each(currentQuestion.options, function(index, option) {
      const $option = $(`
        <div class="form-check">
          <input class="form-check-input" type="radio" name="option" id="option-${index}" value="${option}">
          <label class="form-check-label" for="option-${index}">
            ${option}
          </label>
        </div>
      `);
      if (userAnswers[currentQuestionIndex] === option) {
        $option.find('input').prop('checked', true);
      }
      $optionsForm.append($option);
    });
  }

  $('#back-button').on('click', function(){
    const selectedOption = $('input[name="option"]:checked').val();
    userAnswers[currentQuestionIndex] = selectedOption;
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      updateQuestion();
    }
  });

  $('#next-button').on('click', function() {
    const selectedOption = $('input[name="option"]:checked').val();
    userAnswers[currentQuestionIndex] = selectedOption;
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      updateQuestion();
    }
  });

  $('#submit-button').on('click', function(){
    const selectedOption = $('input[name="option"]:checked').val();
    userAnswers[currentQuestionIndex] = selectedOption;
    $('#back-button').prop('disabled', true);
    $('#next-button').prop('disabled', true);
    $('#submit-button').prop('disabled', true);
    localStorage.setItem("sec1-ans", JSON.stringify(userAnswers));
    // to retrieve: const sec1Ans = localStorage.getItem('sec1-ans'); JSON.parse(sec1Ans) to get the dictionary
  });

});