import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from 'src/model/cardJSON';
import SearchParamType from 'src/model/searchParam';
import { getDetailJSON } from 'src/service/api';

import noPic from '../../assets/img/no-pic.png';

interface ICards {
  articles: Article[];
  setSearchParam: (param: SearchParamType | ((param: SearchParamType) => SearchParamType)) => void;
}

const Cards: React.FC<ICards> = ({ articles, setSearchParam }) => {
  const handleCardId = (id: number, title: string) => {
    setSearchParam((param) => ({ ...param, idDetails: id, qInTitle: title.split(' ').join('+') }));
  };

  const getCards = () => {
    return articles.map((item, i) => {
      const { source, author, title, description, url, urlToImage, publishedAt, content } = item;
      const idx = i;

      return (
        <div key={idx} className="card mb-3 col" style={{ padding: 0 }}>
          <h3 className="card-header">{source.name}</h3>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted">{description}</h6>
          </div>
          <img
            className="d-block user-select-none"
            src={urlToImage || noPic}
            alt="pic: news"
            style={{ width: '100%', height: '200px', objectFit: 'contain' }}
          />
          <div className="card-body">
            <p className="card-text">{content}</p>
          </div>
          <div className="card-body">
            <span className="card-link">{author}</span>
            <a href={url} className="card-link" rel="noreferrer" target="_blank">
              Read more
            </a>
            <Link to={`/details/${idx}`} onClick={() => handleCardId(idx, title)} className="card-link">
              Details
            </Link>
          </div>
          <div className="card-footer text-muted">{new Date(publishedAt).toDateString()}</div>
        </div>
      );
    });
  };

  return (
    <div className="row row-cols-3" style={{ justifyContent: 'space-between' }}>
      {getCards()}
    </div>
  );
};

export default Cards;
