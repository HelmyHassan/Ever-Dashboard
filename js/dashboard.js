
$(function() {

  'use strict';



  $('.js-menu-toggle').click(function(e) {

  	var $this = $(this);

  	

  	if ( $('body').hasClass('show-sidebar') ) {
  		$('body').removeClass('show-sidebar');
  		$this.removeClass('active');
      $('.site-section').css('left' , '100px')
      $('.logo-wrap').css('left',"7px");
      $('.stores').css('grid-template-columns','repeat(4,1fr)')
   
 

  	} else {
  		$('body').addClass('show-sidebar');	
      $('.logo-wrap').css('left',"72px");
  		$('.site-section').css('left' , '300px')
      $('.site-section').removeClass('col-md-11')
      $('.stores').css('grid-template-columns','repeat(3,1fr)')
  
 
  	}

  	e.preventDefault();


   
  });







  $('.nav-menu ul li').click(function(e){
	
	$('.nav-menu ul li').removeClass("active");
    $(this).addClass("active");
	
  })

  $('.btn-all').click(function(){
	  $('.pagesMenu').toggle();
      $('.store-pagesMenu').css('display' , 'none')
      $('.emp-pagesMenu').css('display' , 'none')
      $('.user-pagesMenu').css('display' , 'none')
      $('.work-pagesMenu').css('display' , 'none')
      $('.customServ-pagesMenu').css('display' , 'none')
      $('.maintenance-pagesMenu').css('display' , 'none')
   $('.dropdown-toggle').toggleClass('changed')
 
	  
  })

  
  $('.store-nav-menu ul li').click(function(e){
	
    $('.store-nav-menu ul li').removeClass("active");
      $(this).addClass("active");
    
    })
  
    $('.store-btn-all').click(function(){
      $('.store-pagesMenu').toggle();

        $('.pagesMenu').css('display' , 'none')
        $('.emp-pagesMenu').css('display' , 'none')
        $('.user-pagesMenu').css('display' , 'none')
        $('.work-pagesMenu').css('display' , 'none')
       $('.customServ-pagesMenu').css('display' , 'none')
       $('.maintenance-pagesMenu').css('display' , 'none')
     $('.store-dropdown-toggle').toggleClass('changed')
    //  $('.site-section').css('margin-top' , '100px')
    

    })

    $('.users-nav-menu ul li').click(function(e){
	
      $('.users-nav-menu ul li').removeClass("active");
        $(this).addClass("active");
      
      })
    
      $('.user-btn-all').click(function(){
        $('.user-pagesMenu').toggle();
  
          $('.pagesMenu').css('display' , 'none')
          $('.store-pagesMenu').css('display' , 'none')
          $('.emp-pagesMenu').css('display' , 'none')
          $('.work-pagesMenu').css('display' , 'none')
          $('.customServ-pagesMenu').css('display' , 'none')
          $('.maintenance-pagesMenu').css('display' , 'none')
       $('.user-dropdown-toggle').toggleClass('changed')
      
  
      })

      $('.emp-nav-menu ul li').click(function(e){
	
        $('.emp-nav-menu ul li').removeClass("active");
          $(this).addClass("active");
        
        })
      
        $('.emp-btn-all').click(function(){
          $('.emp-pagesMenu').toggle();
    
            $('.pagesMenu').css('display' , 'none')
            $('.store-pagesMenu').css('display' , 'none')
            $('.user-pagesMenu').css('display' , 'none')
            $('.work-pagesMenu').css('display' , 'none')
            $('.customServ-pagesMenu').css('display' , 'none')
            $('.maintenance-pagesMenu').css('display' , 'none')
         $('.emp-dropdown-toggle').toggleClass('changed')
        
    
        })

      

        $('.work-nav-menu ul li').click(function(e){
	
          $('.work-nav-menu ul li').removeClass("active");
            $(this).addClass("active");
          
          })

          $('.work-btn-all').click(function(){
            $('.work-pagesMenu').toggle();
      
              $('.pagesMenu').css('display' , 'none')
              $('.store-pagesMenu').css('display' , 'none')
              $('.emp-pagesMenu').css('display' , 'none')
              $('.user-pagesMenu').css('display' , 'none')
              $('.customServ-pagesMenu').css('display' , 'none')
              $('.maintenance-pagesMenu').css('display' , 'none')
           $('.work-dropdown-toggle').toggleClass('changed')
          
      
          })

          $('.customServ-nav-menu ul li').click(function(e){
	
            $('.customServ-nav-menu ul li').removeClass("active");
              $(this).addClass("active");
            
            })

            $('.customServ-btn-all').click(function(){
              $('.customServ-pagesMenu').toggle();
        
                $('.pagesMenu').css('display' , 'none')
                $('.store-pagesMenu').css('display' , 'none')
                $('.user-pagesMenu').css('display' , 'none')
                $('.work-pagesMenu').css('display' , 'none')
                $('.emp-pagesMenu').css('display' , 'none')
                $('.maintenance-pagesMenu').css('display' , 'none')
             $('.customServ-dropdown-toggle').toggleClass('changed')
            
        
            })


            $('.maintenance-nav-menu ul li').click(function(e){
	
              $('.maintenance-nav-menu ul li').removeClass("active");
                $(this).addClass("active");
              
              })
  
              $('.maintenance-btn-all').click(function(){
                $('.maintenance-pagesMenu').toggle();
          
                  $('.pagesMenu').css('display' , 'none')
                  $('.store-pagesMenu').css('display' , 'none')
                  $('.user-pagesMenu').css('display' , 'none')
                  $('.work-pagesMenu').css('display' , 'none')
                  $('.emp-pagesMenu').css('display' , 'none')
                  $('.customServ-pagesMenu').css('display' , 'none')
                
               $('.maintenance-dropdown-toggle').toggleClass('changed')
              
          
              })

    

});





var elem = document.getElementById('fullView')

function openFullscreenToggle() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreenToggle() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


$('.fullScreen').on('click',function(){
  if( window.innerHeight == screen.height) {
    closeFullscreenToggle();
  }else{
    openFullscreenToggle();
  }
});





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