type SearchDataType = {
  searchValue: string;
  sortBy: string[];
  activeSort: string;
  totalResults: number;
  activePage: number;
  showPages: number;
  amountPages: number;
  isToGetFetch: boolean;
};

const searchData: SearchDataType = {
  searchValue: '',
  sortBy: ['relevancy', 'popularity', 'publishedAt'],
  activeSort: 'relevancy',
  totalResults: 0,
  activePage: 1,
  showPages: 5,
  amountPages: 5,
  isToGetFetch: false
};

export { SearchDataType };
export default searchData;
