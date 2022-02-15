$(document).ready(function(){
 
//  화면 높이 맞추기    
//$('#main').css('height', $(window).height());
 
    
 
    
    
//  마우스 스크롤 이벤트
    
    $('.ghost').each(function(){
		
		var gObj = $(this);
		
		
		$(window).scroll (function() {
			
			var scr_pos = $(this).scrollTop();
			var ghostPos = gObj.offset().top - 600;
            
			var con3gt = $('#about .title').offset().top -550;
			var con4gt = $('.introduction').offset().top -650;
            var con5gt = $('#portfolio .title').offset().top -700;
            var con7gt = $('.webtitle').offset().top -800;
            var con8gt = $('.port_wrap').offset().top -850;
            var con9gt = $('.webtitle_2').offset().top -900;
            var con10gt = $('.port_wrap2').offset().top -950;
            var con11gt = $('.webtitle_3').offset().top -950;
            var con12gt = $('.proleft').offset().top -1000;
            var con13gt = $('.proright').offset().top -1000;
            var con15gt = $('#contact .title').offset().top -1000;
            var con16gt = $('#contact .con_img').offset().top -1000;
            
            
			if(scr_pos > ghostPos) {
				gObj.removeClass('ghostLock');				
			}
							
		});		
	});
    
    
    
      
    
  
    
    
    $(".hover01").css({opacity:0});
        
    $(".img01").mouseenter(
        function(){
            $(".hover01").stop().animate({opacity:1},400);
            $(".hover01 > img").stop().delay(500).animate({opacity:1},400);
        });
    $(".img01").mouseleave(
        function(){
            $(".hover01").stop().animate({opacity:0},600);
        });
    
    $(".hover02").css({opacity:0});
        
    $(".img02").mouseenter(
        function(){
            $(".hover02").stop().animate({opacity:1},400);
            $(".hover02 > img").stop().delay(500).animate({opacity:1},400);
        });
    $(".img02").mouseleave(
        function(){
            $(".hover02").stop().animate({opacity:0},600);
        });
    
    $(".hover03").css({opacity:0});
        
    $(".img03").mouseenter(
        function(){
            $(".hover03").stop().animate({opacity:1},400);
            $(".hover03 > img").stop().delay(500).animate({opacity:1},400);
        });
    $(".img03").mouseleave(
        function(){
            $(".hover03").stop().animate({opacity:0},600);
        });
    
    $(".hover04").css({opacity:0});
        
    $(".img04").mouseenter(
        function(){
            $(".hover04").stop().animate({opacity:1},400);
            $(".hover04 > img").stop().delay(500).animate({opacity:1},400);
        });
    $(".img04").mouseleave(
        function(){
            $(".hover04").stop().animate({opacity:0},600);
        });
    
    $(".hover05").css({opacity:0});
        
    $(".img05").mouseenter(
        function(){
            $(".hover05").stop().animate({opacity:1},400);
            $(".hover05 > img").stop().delay(500).animate({opacity:1},400);
        });
    $(".img05").mouseleave(
        function(){
            $(".hover05").stop().animate({opacity:0},600);
        });
    
    
        
  
    
    
    $(".sub_mn").click(
        function(){
            $(".sub_box").stop().animate({height:"1000px"},500);
            $(".sub_mn").css({display:"none"});
            $(".close").css({display:"block"});
        }
    );
    
    $(".close").click(
        function(){
            $(".sub_box").stop().animate({height:0},500);
            $(".sub_mn").css({display:"block"});
            $(".close").css({display:"none"});
        }
    );
    
    
    
    
    var btn = $("#main nav li");
	var main = $("#wrap>div");
	var last = btn.size() - 1;
	
	btn.click(function(){
		var i = $(this).index();
		var target = main.eq(i);
		var h = target.offset().top;
		$("html,body").stop().animate({scrollTop:h},1000);
		return false;
	});

	$(window).scroll(function(){
		var s = $(window).scrollTop();
		main.each(function(){
			var h = $(this).offset().top;
			var i = $(this).index();
        });
	});


    
    
    (function( $ ) {
    "use strict";
    $(function() {
        function animated_contents() {
            $(".zt-skill-bar > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');

                $this.css({'width' : skills + '%'});

            });
        }
        
        if(jQuery().appear) {
            $('.zt-skill-bar').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    });
}(jQuery));
    
    
    
    
    /*헤더 스타일 변경*/
    
    $(function(){
            $(window).scroll(function(){
            var navbar = $(this).scrollTop();
            console.log(navbar);
            var $header = $('header');
            if(navbar > 860){
                $header.addClass('activated');
            }else{
                $header.removeClass('activated');
            }
          })
        })
    
    

    
/* (#skills)*/
$(function(){
    /* inview 이벤트는 화면에 요소가 출연했을 때 작동-플러그인*/
    $("#skills").on("inview",function(evt,visible){
        if(visible==true){
            $("#skills .bar").each(function(){
                /*$(this).css({"width":$(this).children().text()});*/
                $(this).css({
                    "width":$(this).parent().attr("data-bar")+"%"
                });
            });
        }
    });
    
    $(window).on("scroll",function(){
        if($(this).scrollTop()<$("#skills").offset().top-$(this).height()){
            $("#skills .bar").width(0);
        }
    });

    
});
    

    
});












