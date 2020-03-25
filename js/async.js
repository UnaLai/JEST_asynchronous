function fetchData(callbackFunction) {
  setTimeout(function() {
    callbackFunction('someData');
  }, 1000);
}

function fetchDataReturnPromise() {
  const promiseTest = new Promise(function(resolve, reject) {
    setTimeout(function() {
      // resolve('someData');
      reject('something error');
    }, 1000);
  });
  return promiseTest
}

module.exports =  {fetchData,fetchDataReturnPromise};