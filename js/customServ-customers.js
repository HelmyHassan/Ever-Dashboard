$('.customServ-nav-menu ul li').css('display' , 'block')

$('.comment').click(function(){
    if($('.comment').hasClass('active')){
      $('.comment').removeClass('active')
      $(this).addClass('active')
    }
   
  })