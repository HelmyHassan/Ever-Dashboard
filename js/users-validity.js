$('.users-nav-menu ul li').css('display' , 'block')

$('#button1').click(function() {
    $('#button1').css("backgroundColor", ' #1C5E3B')
});


$(document).ready(function() {

    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
        maxItemCount: 5,
        searchResultLimit: 5,
        renderChoiceLimit: 5
    });


});