import React from 'react';
import ContactUs from 'components/ContactUs';
import { SubmitResult, Values } from 'constants/interfaces/Form';

const ContactUsPage: React.FC = (props) => {
  const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSubmit = async (values: Values): Promise<SubmitResult> => {
    await wait(1000); // simulate asynchronous web API call
    return {
      // errors: {
      //   email: ['Some is wrong with this'],
      // },
      success: true,
    };
  };

  return (
    <div>
      <div className='page-container'>
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ContactUsPage;
