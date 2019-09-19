var curData = '';
$('.container').on('click', '.flipper:not(.disabled)', function () {
    $(this).toggleClass('clicked');
    if ($(this).hasClass('clicked')) {
        if (!curData) {
            curData = $(this).find('.back').text();
        }
        else {
            if ($(this).find('.back').text() == curData) {
                $('.flipper.clicked').delay(500).queue(function () {
                    $('.flipper.clicked:not(.disabled)').addClass('disabled');
                    curData = '';
                    $(this).dequeue();
                })
            }
            else {
                $('.flipper.clicked').delay(500).queue(function () {
                    $('.flipper.clicked:not(.disabled)').removeClass('clicked');
                    curData = '';
                    $(this).dequeue();
                })
            }
        }
    }
    else {
        curData = '';
    }
})