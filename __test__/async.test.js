const fetchFunction = require('../js/async');

test.skip('fetchData is someData', (done) => {
  function callback(data) {
    expect(data).toBe('someData');
    done()
  }
  fetchFunction.fetchData(callback)
});

test.skip('fetchData is someData with try/catch', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('someData');
      done()
    } catch (error) {
      done(error);
    }
  }
  fetchFunction.fetchData(callback)
});

// 測試promise

test.skip('test fetchDataReturnPromise', () => {
  return fetchFunction.fetchDataReturnPromise().then(res => {
    expect(res).toBe('someData');
  })
});

test.skip('test fetchDataReturnPromise error with try/catch', () => {
  expect.assertions(1);
  return fetchFunction.fetchDataReturnPromise()
    .catch(e => {
      expect(e).toBe('something error')
    })
});

// 例如 resolves
test.skip('test fetchDataReturnPromise with resolves matchers', () => {
  return expect(fetchFunction.fetchDataReturnPromise()).resolves.toBe('someData')
});


// 例如 rejects
test.skip('test fetchDataReturnPromise with rejects matchers', () => {
  return expect(fetchFunction.fetchDataReturnPromise()).rejects.toBe('something error')
});


test.skip('test fetchDataReturnPromise with async/await', async () => {
  let res = await fetchFunction.fetchDataReturnPromise();
  expect(res).toBe('someData');
});

test.skip('test fetchDataReturnPromise error with async/await', async () => {
  expect.assertions(1);
  try {
    await fetchFunction.fetchDataReturnPromise();
  } catch (e) {
    expect(e).toBe('something error');
  }
});

test.skip('test fetchDataReturnPromise with matchers and async/await', async() => {
  await expect(fetchFunction.fetchDataReturnPromise()).resolves.toBe('someData')
});


test('test fetchDataReturnPromise error with matchers and async/await', async() => {
  await expect(fetchFunction.fetchDataReturnPromise()).rejects.toBe('something error')
});