import React, { useState } from 'react';
import CardType from 'src/model/CardType';
import Card from '../Card';
import Form from '../Form';

const App: React.FC = () => {
  const [formData, setFormData] = useState<CardType[]>([]);

  return (
    <div className="container-sm container-md container-lg container-xl container-xxl">
      <Form setFormData={setFormData} />
      <div className="cards-container">
        {formData.reverse().map((data, i) => {
          const idx = i;
          return <Card formData={data} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default App;
