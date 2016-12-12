console.log('Hello there!');

$(function(){ // $() is shorthand for $( document ).ready()
  console.log('ready');
  $('#clearButton').on('click', function(){
    clearForm();
  });

  $('#calculateButton').on('click', function(){
    console.log('calculate button was clicked!');

    var val1 = $('#val1').val();
    var val2 = $('#val2').val();

    var operator = $('#operator').val();

    var objectToSend = {
      x: val1,
      y: val2,
      operator: operator
    };

    console.log(objectToSend);

    $.ajax({
      type: 'POST',
      url: '/',
      data: objectToSend,
      success: function(result) {
        console.log('sucessful calculation post: ', result);
        displayResult(result);
        // clearForm();
      },
      error: function(err){
        console.log('error connecting to server', err);
      }
    });

    function displayResult(resultObject) {
      console.log('in displayResult function: ', resultObject);
      $('#outputDiv').text("Answer = " + resultObject.answer);
    }

  });

  function clearForm(){
    $('#val1').val('');
    $('#val2').val('');
    $('#operator').val('add');
  }
});
