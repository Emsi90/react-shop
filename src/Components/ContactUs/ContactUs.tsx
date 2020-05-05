import React from 'react';
import Form from 'components/Form/Form';
import { Values, SubmitResult } from 'constants/interfaces/Form';
import { minLength, required } from 'utils/formValidators';

interface Props {
  onSubmit: (values: Values) => Promise<SubmitResult>;
}

const ContactUs: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Form
      defaultValues={{ name: '', email: '', reason: 'Support', notes: '' }}
      validationRules={{
        email: { validator: required },
        name: [{ validator: required }, { validator: minLength, arg: 2 }],
      }}
      onSubmit={onSubmit}
    >
      <Form.Field name='name' label='Your name' />
      <Form.Field name='email' label='Your email address' type='Email' />
      <Form.Field
        name='reason'
        label='Reason you need to contact us'
        type='Select'
        options={['Marketing', 'Support', 'Feedback', 'Jobs', 'Other']}
      />
      <Form.Field name='notes' label='Additional notes' type='TextArea' />
    </Form>
  );
};

export default ContactUs;
