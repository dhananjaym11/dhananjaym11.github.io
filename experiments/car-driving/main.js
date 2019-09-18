var conHeight = parseInt($('.container').css('height'));
var roadHeight = parseInt($('.road').css('height'));
var diff = conHeight-roadHeight;
var speed;

$(document).bind('keydown', function(e) {
    var CarLeft = parseInt($('.car').css('left'));
    if(CarLeft==0 && e.keyCode==39){
        $('.car').css('left',CarLeft+50);
    }
    else if(CarLeft==50 && e.keyCode==37){
        $('.car').css('left',CarLeft-50);
    }
});

$('.start button').click(function(){
    $('.start').hide();
})

$('.level a').click(function(){
    speed = $(this).attr('speed');
    $('.level').hide();
    $('.score').show();
    $('.restart').show();
    interval = setInterval(updateDiv,speed);
});

$('.restart button').click(function(){
    clearInterval(interval);
    $('.level').show();
    $('.overlay').hide();
    $('.score').hide();
    $('.restart').hide();
    $('.road').css('bottom','0');
})

function updateDiv(){
    var roadBtm = parseInt($('.road').css('bottom'));
    if(roadBtm <= diff){
      clearInterval(interval);
      alert('Game Over...Good Job Done');
    }
    else{
      if(isAccident(roadBtm)){
          clearInterval(interval);
          $('.container').append('<div class="overlay">Car Crashed</div>')
      }
      else{
          $('.road').css('bottom',roadBtm-10);
          $('.score span').text(Math.abs((roadBtm-10)/10));
      }
    }   
}
function isAccident(roadBtm){
    var status = false;
    var carLeft = parseInt($('.car').css('left'));
    $(".road div").each(function(){
        var blockBtm = parseInt($(this).css('bottom'));
        var blockLeft = parseInt($(this).position().left);
        if(carLeft==blockLeft && blockBtm+roadBtm >=-50 && blockBtm+roadBtm<50 ){
            status = true;
        }
    })
    return status;
}