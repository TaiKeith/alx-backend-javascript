export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
      console.log('Got a response from the API');
    }
    reject(new Error(''));
  });
}
