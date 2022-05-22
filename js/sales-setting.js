$(' .sales-nav-menu ul li').css('display', 'block')
$('#save').click(function() {
    $('#save').css('backgroundColor', '#1C5E3B')
})

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var tmppath = URL.createObjectURL(event.target.files[0]);

        reader.onload = function(e) {
            $('#img-uploaded').attr('src', e.target.result);
            $('input.img-path').val(tmppath);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".uploader").change(function() {
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var tmppath = URL.createObjectURL(event.target.files[0]);

        reader.onload = function(e) {
            $('#img-uploaded1').attr('src', e.target.result);
            $('input.img-path').val(tmppath);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".uploader1").change(function() {
    readURL(this);
});