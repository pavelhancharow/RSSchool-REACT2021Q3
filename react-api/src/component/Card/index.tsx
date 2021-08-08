import React from 'react';
import { Article } from 'src/model/cardJSON';
import Card from './card';

interface ICards {
  articles: Article[];
}

const Cards: React.FC<ICards> = ({ articles }) => {
  return (
    <div className="row row-cols-3" style={{ justifyContent: 'space-between' }}>
      {articles.map((item, i) => {
        const idx = i;
        return <Card key={idx} articleItem={item} />;
      })}
    </div>
  );
};

export default Cards;
