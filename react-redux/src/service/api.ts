import queryData from '../data/queryData';
import { CardJSON } from '../model/types';
import { SearchDataType } from '../data/searchData';

function getQueryString() {
  const curr = Object.keys(queryData)
    .filter((key) => key !== 'base')
    .map((key) => `${key}=${queryData[key]}`);

  return queryData.base + curr.join('&');
}

const getNewsData = async ({ searchValue, activeSort, activePage }: SearchDataType): Promise<CardJSON> => {
  queryData.q = searchValue;
  queryData.sortBy = activeSort;
  queryData.page = activePage;

  try {
    const response = await fetch(getQueryString());
    const newsData = await response.json();
    return newsData;
  } catch (error) {
    throw new Error(error);
  }
};

const getArticle = async (val: string, date: string): Promise<CardJSON> => {
  const { base } = queryData;

  try {
    const response = await fetch(`${base}qInTitle="${val}"&from="${date}"&to="${date}"&apiKey=${queryData.apiKey}`);
    const article = await response.json();
    return article;
  } catch (error) {
    throw new Error(error);
  }
};

export { getArticle };
export default getNewsData;
