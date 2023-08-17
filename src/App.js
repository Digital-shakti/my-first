import React, { useState } from 'react';
import ContactForm from './component/ContactForm';

const App = () => {
  const [submittedValues, setSubmittedValues] = useState();

  const handleFormSubmit = (values) => {
    
    console.log(values);
    setSubmittedValues(values);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleFormSubmit} />
        {submittedValues && (

          <div>
            <h2>Submitted Values:</h2>
            <p>Name: {submittedValues.name}</p>
            <p>Email: {submittedValues.email}</p>
            <p>Message: {submittedValues.message}</p>
          </div>
        )}
    </div>
  );
};

export default App;
