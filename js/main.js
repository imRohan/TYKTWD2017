$( document ).ready(function() {
    $(".js-city-button").click(function() {
      var _cityInputField = $('.js-city-name')
      var _cityName = _cityInputField.val()
      WEATHER.getWeather(_cityName)
    });
});
