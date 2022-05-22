$('.sales-nav-menu ul li').css('display' , 'block')

$('ul.pagination').on('click', 'a', function() { // listen for click on pagination link
    if ($(this).hasClass('active')) return false;

    var active_elm = $('ul.pagination a.active');

    if (this.id == 'next') {
        var _next = active_elm.parent().next().children('a');
        if ($(_next).attr('id') == 'next') {

            // appending next button if reach end
            var num = parseInt($('a.active').text()) + 1;
            active_elm.removeClass('active');
            $('<li><a class="active" href="#">' + num + '</a></li>').insertBefore($('#next').parent());

            $('#prev').parent().next().remove();
            return;
        }
        _next.addClass('active');




    } else if (this.id == 'prev') {
        var _prev = active_elm.parent().prev().children('a');



        if ($(_prev).attr('id') == 'prev') {
            var num = parseInt($('a.active').text()) - 1;
            active_elm.removeClass('active');
            _prev = $('<li><a class="active" href="#">' + num + '</a></li>').insertAfter($('#prev').parent());

            $('#next').parent().prev().remove();

        };
        _prev.addClass('active');

    } else {
        $(this).addClass('active');
    }
    active_elm.removeClass('active');

});
$('#submit').click(function() {
    $('#submit').css("backgroundColor", ' #1C5E3B')
})