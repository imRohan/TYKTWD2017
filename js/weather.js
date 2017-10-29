var WEATHER = (function () {

  var _injectDataElements = function (weatherData) {
    console.table(weatherData)
    var _high = $('.js-high')
    var _low = $('.js-low')
    var _current = $('.js-current')

    _high.html(weatherData.main.temp_max)
    _low.html(weatherData.main.temp_min)
    _current.html(weatherData.main.temp)
  };

  var getWeather = function (cityName) {
    var _apiKey = "ba70e8b3105a85c92247afb6cdd8f102"
    var _url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&APPID=" + _apiKey
    $.ajax({
          url: _url,  
          success:function(weatherData) {
            _injectDataElements(weatherData)
          }
            
    });
  }

  return {
    getWeather: getWeather
  };

})();
