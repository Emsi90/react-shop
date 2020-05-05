import React from 'react';

export interface Values {
  [key: string]: any;
}

export type Validator = (
  fieldName: string,
  values: Values,
  args?: any
) => string;

interface Validation {
  validator: Validator;
  arg?: any;
}

interface ValidationProp {
  [key: string]: Validation | Validation[];
}

export interface SubmitResult {
  success: boolean;
  errors?: FormErrors;
}

export interface FormProps {
  defaultValues?: Values;
  validationRules?: ValidationProp;
  onSubmit: (values: Values) => Promise<SubmitResult>;
}

export type InputType = 'Text' | 'Email' | 'Select' | 'TextArea';

export interface FieldProps {
  name: string;
  label: string;
  type?: InputType;
  options?: string[];
}

export interface ContextForm {
  state: Values;
  setState: (obj: Values) => void;
  errorsState: FormErrors;
  validate?: (fieldName: string, value: any) => void;
  submitting: boolean;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface FormContextProvider {
  defaultValues: Values;
  validationRules?: ValidationProp;
  onSubmit: (values: Values) => Promise<SubmitResult>;
}

export interface FormField {
  Field: React.FC<FieldProps>;
}

export interface FormErrors {
  [key: string]: string[];
}

export interface State {
  values: Values;
  errors: FormErrors;
}
