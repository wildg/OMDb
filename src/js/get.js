import { SERVER_URL, API_KEY } from './config';

const typeSet = new Set(['movie', 'series', 'episode', 'game']);

async function get(title, page, type) {
  const requestOptions = {
    method: 'GET',
  };

  let params = new URLSearchParams({
    apikey: API_KEY,
    s: title,
    page
  });
  typeSet.has(type) && params.append('type', type);

  const endpoint = `${SERVER_URL}?${params}`;

  return await fetch(endpoint, requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
      return -1
    });
}

export default get;
