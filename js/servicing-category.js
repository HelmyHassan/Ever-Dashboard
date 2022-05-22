$('.maintenance-nav-menu ul li').css('display' , 'block')


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    var tmppath = URL.createObjectURL(event.target.files[0]);

    reader.onload = function (e) {
      $('#img-uploaded').attr('src', e.target.result);

    }

    reader.readAsDataURL(input.files[0]);
  }
}


$("#imgInp").change(function(){
  readURL(this);
});





// var openFile = function(event) {
//   var input = event.target;

//   var reader = new FileReader();
//   reader.onload = function(){
//     var dataURL = reader.result;
//     var output = document.getElementById('img-uploaded');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// };
// var openFile2 = function(event) {
//   var input = event.target;

//   var reader = new FileReader();
//   reader.onload = function(){
//     var dataURL = reader.result;
//     var output = document.getElementById('edit-editImgInp');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// };







// $(function () {
//   $("#editImgInp").change(function () {
//       if (typeof (FileReader) != "undefined") {
         
//           var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
//           $($(this)[0].files).each(function () {
//               var file = $(this);
//               if (regex.test(file[0].name.toLowerCase())) {
//                   var reader = new FileReader();
//                   reader.onload = function (e) {
                      
//                     $('#edit-editImgInp').attr('src', e.target.result);
//                   }
//                   reader.readAsDataURL(file[0]);
//               } else {
//                   alert(file[0].name + " is not a valid image file.");
                  
//                   return false;
//               }
//           });
//       } else {
//           alert("This browser does not support HTML5 FileReader.");
//       }
//   });
// });

// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//         $('#edit-editImgInp').attr('src', e.target.result);;
//       }

//       reader.readAsDataURL(input.files[0]);
//   }
// }


// $(".file-wrapper2 input[type='file']").change(function(){

//   readURL(this);
// });

// var imgInp1 = document.getElementById('imgInp');
// var imgInp = document.getElementById('editImgInp');
// var imgUploaded = document.getElementById('img-uploaded')

// imgInp1.onchange = evt => {
//   const [file] = imgInp.files
//   if (file) {
//     imgUploaded.src = URL.createObjectURL(file)
//   }
// }



// imgInp.onchange = event => {
//   var image = document.getElementById('edit-img-uploaded');
//   image.src = URL.createObjectURL(event.target.files[0]);
// }