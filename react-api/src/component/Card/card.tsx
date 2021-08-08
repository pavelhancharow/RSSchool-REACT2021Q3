import React from 'react';
import { Article } from 'src/model/cardJSON';

import noPic from '../../assets/img/no-pic.png';

interface ICard {
  articleItem: Article;
}

const Card: React.FC<ICard> = ({ articleItem }) => {
  const { source, author, title, description, url, urlToImage, publishedAt, content } = articleItem;

  return (
    <div className="card mb-3 col" style={{ padding: 0 }}>
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
      </div>
      <div className="card-footer text-muted">{new Date(publishedAt).toDateString()}</div>
    </div>
  );
};

export default Card;
