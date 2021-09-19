import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'src/hooks/useTypedSelector';
import fetchArticle from 'src/store/action-creators/article';

import noPic from '../../assets/img/no-pic.png';
import Spinner from '../../components/Spinner';
import ErrorPage from '../NotFound';

interface CardNewsParams {
  title: string;
  from: string;
}

const Details: React.FC = () => {
  const { article, loading, error } = useTypedSelector((state) => state.article);
  const dispatch = useDispatch();

  const history = useHistory();
  const params = useParams<CardNewsParams>();

  const getCard = () => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = article[0]!;

    return (
      <div className="card mb-3 col" style={{ padding: 0, width: '720px', margin: '30px auto' }}>
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
          <button type="button" className="btn card-link" onClick={() => history.push('/')}>
            Back
          </button>
        </div>
        <div className="card-footer text-muted">{new Date(publishedAt).toDateString()}</div>
      </div>
    );
  };

  useEffect(() => {
    dispatch(fetchArticle(params.title, params.from));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.title]);

  if (error) return <ErrorPage />;

  return loading ? <Spinner /> : getCard();
};

export default Details;
