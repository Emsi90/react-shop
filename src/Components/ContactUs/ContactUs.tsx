import React from 'react';
import './ContactUs.scss';
import { ActionType } from 'ts/interfaces/Contact';

interface Props {
  name: string;
  email: string;
  reason: string;
  notes: string;
  onChange: (payload: any) => void;
}

const ContactUs: React.FC<Props> = ({
  name,
  email,
  reason,
  notes,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      type: e.currentTarget.id.toUpperCase(),
      payload: e.currentTarget.value,
    });
  };
  return (
    <form className='form' noValidate={true}>
      <div className='form-group'>
        <label htmlFor='name'>Your name</label>
        <input
          type='text'
          id='name'
          name={ActionType.NAME}
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Your email</label>
        <input
          type='email'
          id='email'
          name={ActionType.EMAIL}
          value={email}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default ContactUs;
