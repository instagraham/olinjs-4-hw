
$(function () {

	$('#newtwit').on('submit', function() {
		$.post("/tweets/create", 
			$('#newtwit').serialize());
		return false;
	});

	
	var refreshtweets = function(){ 
		$.get("/tweets/refresh", function(tweets)
			{$('#refresh').html(tweets)})
	 };
    setInterval(refreshtweets, 2000);

});
