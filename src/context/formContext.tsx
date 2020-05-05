import React, {
  useContext,
  createContext,
  useMemo,
  useState,
  useCallback,
} from 'react';

import {
  FormContextProvider,
  ContextForm,
  FormErrors,
} from 'constants/interfaces/Form';

const FormContext = createContext<ContextForm | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      `Form compund components cannot be rendered outside the Tabs component`
    );
  }
  return context;
};

export const FormProvider: React.FC<FormContextProvider> = ({
  children,
  defaultValues,
  validationRules,
  onSubmit,
}) => {
  const errors: FormErrors = {};
  Object.keys(defaultValues).forEach((fieldName) => {
    errors[fieldName] = [];
  });
  const [state, setState] = useState(defaultValues);
  const [errorsState, setErrorsState] = useState(errors);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmited] = useState(false);

  const validate = useCallback(
    (fieldName: string, value: any): string[] => {
      const rules = validationRules && validationRules[fieldName];
      const errors: string[] = [];
      if (Array.isArray(rules)) {
        rules.forEach((rule) => {
          const error = rule.validator(fieldName, state, rule.arg);
          if (error) {
            errors.push(error);
          }
        });
      } else {
        if (rules) {
          const error = rules.validator(fieldName, state, rules.arg);
          if (error) {
            errors.push(error);
          }
        }
      }
      setErrorsState((err) => ({ ...err, [fieldName]: errors }));
      return errors;
    },
    [state, validationRules]
  );

  const validateForm = useCallback(() => {
    const errors: FormErrors = {};
    let haveError: boolean = false;
    Object.keys(defaultValues).forEach((fieldName) => {
      errors[fieldName] = validate(fieldName, state[fieldName]);
      if (errors[fieldName].length > 0) {
        haveError = true;
      }
    });
    setErrorsState(errors);
    return !haveError;
  }, [defaultValues, state, validate]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validateForm()) {
        setSubmitting(true);
        const result = await onSubmit(state);
        setErrorsState(result.errors || {});
        setSubmited(result.success);
        setSubmitting(false);
      }
    },
    [onSubmit, state, validateForm]
  );

  const value = useMemo(
    () => ({
      state,
      errorsState,
      setState,
      validate,
      submitting,
      submitted,
      handleSubmit,
    }),
    [errorsState, handleSubmit, state, submitted, submitting, validate]
  );
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
