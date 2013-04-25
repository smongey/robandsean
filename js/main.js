
$(document).ready(function(){



if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1)) {


		$(function()
		{
		        
		        $('#intro').css({'height': 500});
		        $('#intro h1').css({'margin-left': 180})
	
		});
	
	
		$(function(){
			
			$(".project").hover(function(){
				$(this).children('.info').fadeIn(300);
			}, function(){
				$(this).children('.info').fadeOut(300);
			});
			
		});	


} else {
	

		$(function()
		{
		        $('#intro, #contact').css({'height': ( $(window).height() )});
		        $('#intro h1').css({'top': (($(window).height()) /2-140)}).css({'left': (($(window).width()) /2-300)});
		       
		        $(window).bind('resize', function(){
		            $('#intro, #contact').css({'height': ( $(window).height() )});
		            $('#intro h1').css({'top': (($(window).height()) /2-140)}).css({'left': (($(window).width()) /2-300)});
		        });        
	
		});


	$.localScroll({
		duration: 400
	});
	
	
	$(function(){
		
		$(".project").hover(function(){
			$(this).children('.info').fadeIn(300);
		}, function(){
			$(this).children('.info').fadeOut(300);
		});
		
	});	



    var currentIndex = 1;

    console.log('ready');
    KeyboardJS.bind.key('down', function(event) {
        currentIndex++;
        console.log('key down, going to', currentIndex);

        $(document).scrollTo($('#yawl div.jumbotron:nth-child(' + currentIndex + ')'), 400);


        event.stopImmediatePropagation();
        event.preventDefault();
    });

    KeyboardJS.bind.key('up', function(event) {
        currentIndex--;
        console.log('key up, going to', currentIndex);

        $(document).scrollTo($('#yawl div.jumbotron:nth-child(' + currentIndex + ')'), 400);


        event.stopImmediatePropagation();
        event.preventDefault();
    });
	
	
}



				

	
});