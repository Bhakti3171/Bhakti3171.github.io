$(document).ready(function(){
  
    //smooth scroll
    $('.nav-item a, .header-linkn, #back-to-top').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top-25
        },3000);
    });
    
//magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
        enabled: true
    }
    });
         
});