import React, { useEffect, useState } from 'react';
import { Article } from 'src/model/cardJSON';
import SearchParamType from 'src/model/searchParam';
import { getDetailJSON } from 'src/service/api';

import noPic from '../../assets/img/no-pic.png';
import Spinner from '../Spinner';

interface IDetails {
  searchParam: SearchParamType;
}

const Details: React.FC<IDetails> = ({ searchParam }) => {
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [switcher, setSwitcher] = useState<boolean>(false);

  const getCard = () => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = articleItems[0];

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

  useEffect(() => {
    const getAPICards = () => {
      const response = getDetailJSON(searchParam.qInTitle);
      response
        .then((res) => {
          setArticleItems(res.articles);
          setSwitcher(true);
        })
        .catch((err) => new Error(err));
    };

    return getAPICards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return switcher ? getCard() : <Spinner />;
};

export default Details;
