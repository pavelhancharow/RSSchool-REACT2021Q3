type CardJSON = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export { CardJSON, Article };
