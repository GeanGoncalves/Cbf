$(document).ready(function() {
  
    //Scroll para seções
   let navBtn = $('.nav-item');
  
  let al1 = $('#alemanha1');
  let arg1 = $('#argentina1');
  let franca1 = $('#franca1');
  let espn1 = $('#espanha1');
  let br1 = $('#brasil1');

  
  let scrollTo = '';
  
  $(navBtn).click(function(){
  
     let btnId = $(this).attr('id');
  
     console.log(btnId);
  
          if(btnId == 'alemanha'){
       scrollTo = al1;
     } else if(btnId == 'argentina'){
       scrollTo = arg1;
     } else if(btnId == 'franca'){
       scrollTo = franca1;
     }else if(btnId == 'espanha'){
       scrollTo = espn1;
     } else if(btnId == 'brasil'){
       scrollTo = br1;
     } else{
       scrollTo = al1;
     }
     $([document.documentElement,document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  
  });

  });