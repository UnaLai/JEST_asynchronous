const fetchFunction = require('../js/async');

test('fetchData is someData', (done) => {
  function callback(data) {
    expect(data).toBe('someData');
    done()
  }
  fetchFunction.fetchData(callback)
});

test('fetchData is someData with try/catch', (done) => {
  function callback(data) {
    try{
      expect(data).toBe('someData');
      done()
    } catch (error) {
      done(error);
    }
  }

  fetchFunction.fetchData(callback)
});