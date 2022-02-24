$(document).ready(function() {
  
    //Scroll para seções
   let navBtn = $('.nav-item');
  
  let copa1958 = $('#copa1');
  let copa1962 = $('#copa2');
  let copa1970 = $('#copa3');
  let copa1994 = $('#copa4');
  let copa2002 = $('#copa5');

  
  let scrollTo = '';
  
  $(navBtn).click(function(){
  
     let btnId = $(this).attr('id');
  
     console.log(btnId);
  
     if(btnId == '1958'){
       scrollTo = copa1958;
     } else if(btnId == '1962'){
       scrollTo = copa1962;
     } else if(btnId == '1970'){
       scrollTo = copa1970;
     }else if(btnId == '1994'){
       scrollTo = copa1994;
     } else if(btnId == '2002'){
       scrollTo = copa2002;
     } else{
       scrollTo = copa1958;
     }
     $([document.documentElement,document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  
  });
  
  });