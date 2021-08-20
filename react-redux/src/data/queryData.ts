type QueryDataType = {
  base: string;
  q: string;
  language: string;
  sortBy: string;
  pageSize: number;
  page: number;
  apiKey: string;
};

const queryData: QueryDataType = {
  base: 'https://newsapi.org/v2/everything?',
  q: '',
  language: 'en',
  sortBy: 'relevancy',
  pageSize: 9,
  page: 1,
  apiKey: '7b26deb79d1e4b0cbbf087f6fcdb8add'
};

export default queryData;
