$(function(){

	// $('#cityName').focus(function(){
	// 	var full = $('#content').has('p').length ? true : false;
	// 	if(full === false){
	// 	  $('#content').empty();
	// 	}
	// });

	$('input').on('focus', function(){
		var full = $('#content').has('p').length ? true : false;
		if(full === false){
		  $('#content').empty();
		}
	});

  	var getWeather = function(){
	    var cityName = $('#cityName').val();
	    var countryName = $('#countryName').val();

    	if(cityName === '' || countryName === ''){

      		$('#content').html('Please enter city and country.');

    	} else {

      		$('#content').html('Your weather is on its way');

			$.ajax({
      			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + countryName + '&lang=zh_tw',
      			dataType: 'jsonp',
      			success: function(data){
      				if(data.message == 'Error: Not found city'){
    					$('#content').html('Not found city');
	        		} else {
	        			$('#content').html('<p>' + data.weather[0].main + '</p>');
	        		}
      			}
      		});
    	}
    	return false;
  	};

	$('#search').click(getWeather);
	$('input').on('keyup', function(e){
    	if(e.keyCode == 13){
      		getWeather();
    	}
  	});

});