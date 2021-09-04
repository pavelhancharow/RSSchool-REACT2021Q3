import React, { useEffect, useRef, useState } from 'react';
import CardType from 'src/model/CardType';
import Card from '../Card';
import Form from '../Form';

const App: React.FC = () => {
  const [formData, setFormData] = useState<CardType[]>([]);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const successMessage = (
    <div className="success-message">
      <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <strong className="me-auto">Success!</strong>
          <small>1 second ago</small>
        </div>
        <div className="toast-body">Data saved successfully.</div>
      </div>
    </div>
  );

  useEffect(() => {
    if (formData.length) {
      setShowSuccess(true);
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        setShowSuccess(false);
        document.body.style.overflow = 'auto';
      }, 3000);
    }
  }, [formData]);

  return (
    <>
      <div className="container-sm container-md container-lg container-xl container-xxl">
        <Form setFormData={setFormData} />
        <div className="cards-container">
          {formData
            .map((data, i) => {
              const idx = i;
              return <Card formData={data} key={idx} />;
            })
            .reverse()}
        </div>
      </div>
      {showSuccess ? successMessage : null}
    </>
  );
};

export default App;
