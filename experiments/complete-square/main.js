var h = v = limit = count = bgTotal = bgCompleted = 0;
var html = thisClass = thisIndex = otherIndex = thisGrid = otherGrid = '';
addTable();
var curClass = 'green';
$('.current').text(curClass);
$('.click').not('.selected').addClass(curClass + '-hover');

$(document).on('click', '.click:not(.selected)', function () {
    var play = play1 = play2 = false;
    if (count % 2 == 0) { thisClass = 'green'; curClass = 'red'; }
    else { thisClass = 'red'; curClass = 'green'; }
    $(this).addClass('selected');
    var thisH = parseInt($(this).attr('h-index'));
    var thisV = parseInt($(this).attr('v-index'));

    if ($(this).hasClass('h')) { thisIndex = thisV; otherIndex = thisH; thisGrid = 'h-index'; otherGrid = 'v-index'; limit = v * 2; }
    else { thisIndex = thisH; otherIndex = thisV; thisGrid = 'v-index'; otherGrid = 'h-index'; limit = h * 2; }

    for (var i = -1, j = 0; i < 2; i = i + 2) {
        j++;
        if ((thisIndex + i) < 0 || (thisIndex + i) > limit) { continue; }
        var b = $('td[' + thisGrid + '=' + otherIndex + '][' + otherGrid + '=' + (thisIndex + i) + ']');
        if (checkClasses(b)) { eval("var play" + j + "=true;"); }
    }
    if (play1 || play2) { curClass = thisClass; }
    else { count++; }
    $('.current').text(curClass);
    $('.click').not('.selected').removeClass(thisClass + '-hover').addClass(curClass + '-hover');
    $(this).removeAttr('class').addClass('selected');
})

function addTable() {
    var getH = prompt("Please enter columns", "3");
    if (getH != null) { h = getH; }
    var getV = prompt("Please enter rows", "3");
    if (getV != null) { v = getV; }
    bgTotal = h * v;
    var newh = (h * 2) + 1;
    var newv = (v * 2) + 1;
    html += '<table border="0" cellpadding="0" cellspacing="0">';
    for (var i = 0; i < newv; i++) {
        html += '<tr>';
        for (var j = 0; j < newh; j++) {
            var myclass = '';
            if (j % 2 != 0 && i % 2 == 0) { myclass = 'click h'; }
            else if (j % 2 == 0 && i % 2 != 0) { myclass = 'click v'; }
            else if (j % 2 != 0 && i % 2 != 0) { myclass = 'bg" bg-index="0'; }
            else { myclass = "black"; }
            html += '<td h-index="' + j + '" v-index="' + i + '" class="' + myclass + '">&nbsp;</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    html += '<div class="result"><div>Curent player : <span class="current"></span></div><div>Red : <span class="redCount">0</span></div><div>Green : <span class="greenCount">0</span></div></div>'
    $('.container').html(html);
}

function checkClasses(curTest) {
    var status = false;
    var bg_index = parseInt(curTest.attr('bg-index')) + 1;
    curTest.attr('bg-index', bg_index);
    if (bg_index == 4) {
        curTest.addClass(thisClass);
        var curCount = parseInt($('.' + thisClass + 'Count').text());
        $('.' + thisClass + 'Count').text(++curCount);
        status = true;
        if (++bgCompleted == bgTotal) {
            gameOver();
        }
    }
    return status;
}

function gameOver() {
    var winner = '';
    var redCount = parseInt($('.redCount').text());
    var greenCount = parseInt($('.greenCount').text());

    if (redCount > greenCount) { winner = 'Red Wins'; }
    else if (redCount < greenCount) { winner = 'Green Wins'; }
    else { winner = "OMG it's tie"; }

    alert('Game Over - ' + winner);
}