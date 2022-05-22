$('.maintenance-nav-menu ul li').css('display' , 'block')







// function readURL(input) {
//   if (input.files && input.files[0]) {
//     var reader = new FileReader();
//     var tmppath = URL.createObjectURL(event.target.files[0]);

//     reader.onload = function (e) {
//       $('#img-uploaded').attr('src', e.target.result);
//       $('input.img-path').val(tmppath);
//     }

//     reader.readAsDataURL(input.files[0]);
//   }
// }


// $(".uploader").change(function(){
//   readURL(this);
// });








// $(function () {
//   $(".uploader").change(function () {
//       $("#img-uploaded").html("");
//       var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
//       if (regex.test($(this).val().toLowerCase())) {
//           if ($.browser.msie && parseFloat(jQuery.browser.version) <= 9.0) {
//               $("#img-uploaded").show();
//               $("#img-uploaded")[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = $(this).val();
//           }
//           else {
//               if (typeof (FileReader) != "undefined") {
//                   $("#img-uploaded").show();
//                   $("#img-uploaded").append("<img />");
//                   var reader = new FileReader();
//                   reader.onload = function (e) {
//                       $("#img-uploaded").attr("src", e.target.result);
//                   }
//                   reader.readAsDataURL($(this)[0].files[0]);
//               } else {
//                   alert("This browser does not support FileReader.");
//               }
//           }
//       } else {
//           alert("Please upload a valid image file.");
//       }
//   });
// });



var imgInp = document.getElementById('imgInp');
var imgUploaded = document.getElementById('img-uploaded')
imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    imgUploaded.src = URL.createObjectURL(file)
  }
}