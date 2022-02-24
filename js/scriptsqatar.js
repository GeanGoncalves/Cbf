$(document).ready(function() {
  
    //Scroll para seções
   let navBtn = $('.nav-item');
  
  let hist = $('#historia');
  let cp = $('#copa');
  let est = $('#estadios');
 

  
  let scrollTo = '';
  
  $(navBtn).click(function(){
  
     let btnId = $(this).attr('id');
  
     console.log(btnId);
  
       if(btnId == 'historia-menu'){
       scrollTo = hist;
     } else if(btnId == 'copa-menu'){
       scrollTo = cp;
     } else if(btnId == 'estadios-menu'){
       scrollTo = est;
     }else{
       scrollTo = hist;
     }
     $([document.documentElement,document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  
  });

  });