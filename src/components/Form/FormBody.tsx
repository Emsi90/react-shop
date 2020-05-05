import React from 'react';

import { useFormContext } from 'context/formContext';
import './Form.scss';

const Form: React.FC = ({ children }) => {
  const { submitting, submitted, handleSubmit } = useFormContext();
  return (
    <form className='form' noValidate={true} onSubmit={handleSubmit}>
      {children}
      <div className='form-group'>
        <button type='submit' disabled={submitting || submitted}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
