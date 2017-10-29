var Module = (function () {

  var _privateMethod = function (text) {
    console.log(text)
  };

  var publicMethod = function (text) {
    _privateMethod(text);
  };
  
  return {
    publicMethod: publicMethod
  };

})();