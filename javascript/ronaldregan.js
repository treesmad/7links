$(document).ready(function(){
    $('#welcome').stop(true).fadeIn({
      duration: 1000,
      delay: 800,
      queue: false
    }).css('display', 'none').delay(800).slideDown(350);
});

$(document).ready(function(){
    $('#logo, #mediahead').fadeIn(1000);
});

$(document).ready(function(){
    $('#buttons').stop(true).fadeIn({
      duration: 1000,
      delay: 800,
      queue: false
    }).css('display', 'none').delay(1050).slideDown(200);
});
