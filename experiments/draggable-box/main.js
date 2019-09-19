$('.selector').on('mousedown touchstart', function (e) {
    var node = $(this);
    node.addClass('draggable');
    var position = node.position();
    var initialized = {
        x: position.left - e.pageX,
        y: position.top - e.pageY
    };
    var handlers = {
        mousemove: function (e) {
            node.css({
                left: (initialized.x + e.pageX) + 'px',
                top: (initialized.y + e.pageY) + 'px'
            });
            $('#text1').text(position.left + "=" + e.pageX + "=" + initialized.x);
            $('#text2').text(position.top + "=" + e.pageY + "=" + initialized.y);
        },
        touchmove: function (e) {
            node.css({
                left: (initialized.x + e.pageX) + 'px',
                top: (initialized.y + e.pageY) + 'px'
            });
            $('#text1').text(position.left + "=" + e.pageX + "=" + initialized.x);
            $('#text2').text(position.top + "=" + e.pageY + "=" + initialized.y);
        },
        mouseup: function (e) {
            $(this).off(handlers);
            node.removeClass('draggable');
        },
        touchend: function (e) {
            $(this).off(handlers);
            node.removeClass('draggable');
        }
    };
    $(document).on(handlers);
});