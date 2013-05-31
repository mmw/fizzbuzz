var fb = {};

// starts fizzbuzz, values of start and end are inclusive
fb.init = function(start, end) {
  for(var i = start; i < end + 1; i++) {
    if(i % 5 == 0 && i % 3 == 0)
      fb.printVal('fizzbuzz');
    else if(i % 3 == 0)
      fb.printVal('fizz');
    else if(i % 5 == 0)
      fb.printVal('buzz');
    else
      fb.printVal(i);
  }
};

fb.printVal = function(value) {
  $('body').append('<p>' + value + '</p>');
};

$(function() {
  fb.init(1, 50);
});