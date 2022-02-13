
// Activity Tests
console.log("Your index.js file is loaded correctly!");

$("#navigation").on("click", function(){
    console.log("You clicked on #navigation");
});

// Fade Hover

$( "#navigation p").hover(function() {
    $( this ).fadeOut( slow );
    $( this ).fadeIn(500);
  });

// Scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
  
  // My Skills
  $("document").ready(function(){ 
    $("#skillImg1").mouseenter(function(){       
        $(this).attr('src','images/uxhover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg1").mouseleave(function(){       
        $(this).attr('src','images/Ux Research.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg2").mouseenter(function(){       
        $(this).attr('src','images/uxdesignhover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg2").mouseleave(function(){       
        $(this).attr('src','images/Ux Design.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg3").mouseenter(function(){       
        $(this).attr('src','images/uihover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg3").mouseleave(function(){       
        $(this).attr('src','images/Ui Design.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg4").mouseenter(function(){       
        $(this).attr('src','images/analyticshover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg4").mouseleave(function(){       
        $(this).attr('src','images/Analytics.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$("document").ready(function(){ 
    $("#skillImg5").mouseenter(function(){       
        $(this).attr('src','images/devhover.svg');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#skillImg5").mouseleave(function(){       
        $(this).attr('src','images/Development.svg'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});


// $("document").ready(function(){ 
//     $("#NaaImage img").mouseenter(function(){       
//         $(this).attr('src','images/naahover.png');  
//         $(this).animate({ opacity: "1.0"}, slow);    
//     });     
//     $("#NaaImage img").mouseleave(function(){       
//         $(this).attr('src','images/naa.png'); 
//         $(this).animate({ opacity: "1.0"}, slow);         
//     }); 
   
// });

$(document).ready(function() {
    $(window).on("scroll", function() {
      console.log($(this).scrollTop())
      if($(this).scrollTop() >= 350){
        // set to new image
        $("#NaaImage img").attr('src','images/naahover.png');
        $( this ).animate(slow);
      } else {
        //back to default
        $("#NaaImage img").attr('src','images/naa.png');
      }
    })
  })

//   $(document).ready(function() {
//     $(window).on("scroll", function() {
//       console.log($(this).scrollTop())
//       if($(this).scrollTop() >= 600){
//         // set to new image
//         $("#nextImage img").attr('src','images/nexthover.png');
//         $( this ).animate(slow);
//       } else {
//         //back to default
//         $("#nextImage img").attr('src','images/next tv.png');
//       }
//     })
//   })

  $("document").ready(function(){ 
    $("#nextImage img").mouseenter(function(){       
        $(this).attr('src','images/nexthover.png');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#nextImage img").mouseleave(function(){       
        $(this).attr('src','images/next tv.png'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});


$("document").ready(function(){ 
    $("#ymcaImage img").mouseenter(function(){       
        $(this).attr('src','images/ymcahover.png');  
        $(this).animate({ opacity: "1.0"}, slow);    
    });     
    $("#ymcaImage img").mouseleave(function(){       
        $(this).attr('src','images/Ymca.png'); 
        $(this).animate({ opacity: "1.0"}, slow);         
    }); 
   
});

$('#navigation p').on("click", function(){
    $(this).toggleClass("active");
});
  

$(".icons").on("click", function(){
    $("#navigation a").slideToggle(); 
})


