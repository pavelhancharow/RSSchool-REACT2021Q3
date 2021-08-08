import CardJSON from 'src/model/cardJSON';

export const queryObject = {
  base: 'https://newsapi.org/v2/everything?',
  q: '',
  language: 'en',
  sortBy: 'relevancy',
  pageSize: 9,
  page: 1,
  apiKey: '7b26deb79d1e4b0cbbf087f6fcdb8add'
};

function getQueryString() {
  const curr = Object.keys(queryObject)
    .filter((key) => key !== 'base')
    .map((key) => `${key}=${queryObject[key]}`);

  return queryObject.base + curr.join('&');
}

async function fetchApi() {
  try {
    const response = await fetch(getQueryString());
    const cardJSON = await response.json();
    return cardJSON;
  } catch (error) {
    throw new Error(error);
  }
}

const getAPICards = async (value: string): Promise<CardJSON> => {
  queryObject.q = value;

  return fetchApi();
};

export const sortAPICards = async (value = 'relevancy'): Promise<CardJSON> => {
  queryObject.sortBy = value;

  return fetchApi();
};

export const pageAPICards = async (value = '1'): Promise<CardJSON> => {
  queryObject.page = +value;

  return fetchApi();
};

export default getAPICards;
