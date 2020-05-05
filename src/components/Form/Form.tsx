import React from 'react';

import { FormProps, FormField } from 'constants/interfaces/Form';
import Field from './Field';
import { FormProvider } from 'context/formContext';
import FormBody from './FormBody';
import './Form.scss';

const defaultVal = { name: '', email: '', reason: '', notes: '' };

const Form: React.FC<FormProps> & FormField = ({
  children,
  defaultValues = defaultVal,
  validationRules,
  onSubmit,
}) => {
  return (
    <FormProvider
      defaultValues={defaultValues}
      validationRules={validationRules}
      onSubmit={onSubmit}
    >
      <FormBody children={children} />
    </FormProvider>
  );
};
/*
 * Compouned Components
 */
Form.Field = Field;

export default Form;
