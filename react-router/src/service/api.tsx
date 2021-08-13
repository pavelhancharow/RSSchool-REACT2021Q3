import CardJSON from 'src/model/cardJSON';
import SearchParamType from 'src/model/searchParam';

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

const getApiJSON = async ({ searchValue, sort, activePage }: SearchParamType): Promise<CardJSON> => {
  queryObject.q = searchValue;
  queryObject.sortBy = sort;
  queryObject.page = activePage;

  try {
    const response = await fetch(getQueryString());
    const cardJSON = await response.json();
    return cardJSON;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDetailJSON = async (val: string): Promise<CardJSON> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?qInTitle=${val}&language=en&apiKey=7b26deb79d1e4b0cbbf087f6fcdb8add`
    );
    const cardJSON = await response.json();
    return cardJSON;
  } catch (error) {
    throw new Error(error);
  }
};

export default getApiJSON;
