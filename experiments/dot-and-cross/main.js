var count = 0;
$('.reset').click(function () {
  $('li').removeAttr('class');
  $(".overlay").remove();
  $('.steps').text('');
  count = 0;
})
$(document).on('click', 'li:not(.selected)', function () {
  const currentClass = (++count % 2 == 0) ? 'cross' : 'dot';
  $(this).addClass('selected ' + currentClass);
  if (count >= 5) {
    drawLine(getIndex(currentClass), currentClass);
  }
  addSteps(getIndex());
})
function addSteps(steps) {
  $('.steps').append('<div>' + steps + '</div>');
}
function getIndex(curClass) {
  var thisStr = '';
  const findClass = curClass ? curClass : 'selected';
  $("ul li").each(function (index) {
    if ($(this).hasClass(findClass)) {
      thisStr += index + ',';
    }
  });
  return thisStr;
}
function drawLine(str, curClass) {
  var comb = [];
  comb[0] = ['0', '3', '6'];
  comb[1] = ['1', '4', '7'];
  comb[2] = ['2', '5', '8'];
  comb[3] = ['0', '1', '2'];
  comb[4] = ['3', '4', '5'];
  comb[5] = ['6', '7', '8'];
  comb[6] = ['0', '4', '8'];
  comb[7] = ['2', '4', '6'];
  for (var i = 0; i < comb.length; i++) {
    if (str.indexOf(comb[i][0]) > -1 && str.indexOf(comb[i][1]) > -1 && str.indexOf(comb[i][2]) > -1) {
      $("ul li").eq(comb[i][0]).addClass('completed');
      $("ul li").eq(comb[i][1]).addClass('completed');
      $("ul li").eq(comb[i][2]).addClass('completed');
      $('.box').append('<div class="overlay">' + curClass + ' wins</div>')
    }
  }
}