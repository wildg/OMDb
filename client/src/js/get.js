import { SERVER_URL, API_KEY } from './config';

const typeSet = new Set(['movie', 'series', 'episode', 'game']);

async function get(title, page, type) {
  // Create the request options
  const requestOptions = {
    method: 'GET',
  };

  // Initialize the parameters to be used for the search
  let params = new URLSearchParams({
    apikey: API_KEY,
    s: title,
    page
  });

  // If the type is included in the type set, add it to parameters
  if (typeSet.has(type)) params.append('type', type);

  // Create the endpoint we are fetching from
  const endpoint = `${SERVER_URL}?${params}`;

  // Fetch the data making sure to log any errors
  return await fetch(endpoint, requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
      return -1
    });
}

export default get;
