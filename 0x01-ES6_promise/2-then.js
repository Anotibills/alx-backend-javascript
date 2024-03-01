export default function handleResponseFromAPI(promise) {
  const body = { status: 200, body: 'success' };

  return promise
    .then(() => body) // Returning the body on successful resolution
    .catch((error) => { // Catching and handling errors
      console.error('Error:', error);
      throw new Error('Failed to fetch data from API');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
