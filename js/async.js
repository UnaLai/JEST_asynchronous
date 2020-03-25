function fetchData(callbackFunction) {
  setTimeout(function() {
    callbackFunction('someData');
  }, 1000);
}

module.exports =  {fetchData};