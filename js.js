jQuery(document).ready(function($){
		$(function(){
			$("a").click(function(e){
				pageurl = $(this).attr('href');
				$.ajax({url:pageurl,success: function(data){
					$('#pageload').html(data);
				}});
				if(pageurl!=window.location){
					window.history.pushState({path:pageurl},'',pageurl);	
				}
				return false;  
			});
		});
		$(window).bind('popstate', function() {
			$.ajax({url:location.pathname,success: function(data){
				$('#pageload').html(data);
			}});
        });
});
