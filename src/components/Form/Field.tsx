import React from 'react';

import { FieldProps, InputType } from 'constants/interfaces/Form';
import { useFormContext } from 'context/formContext';

const Field: React.FC<FieldProps> = ({
  name,
  label,
  type = 'Text',
  options,
}) => {
  const { state, errorsState, setState, validate } = useFormContext();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
    name: string
  ) => {
    if (setState) {
      setState({ ...state, [name]: e.currentTarget.value });
    }
  };

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLSelectElement>,
    name: string
  ) => {
    if (validate) {
      validate(name, e.currentTarget.value);
    }
  };

  const fieldType = (type: InputType) => {
    switch (type) {
      case 'Text':
      case 'Email':
        return (
          <input
            type={type.toLowerCase()}
            id={name}
            value={state[name]}
            onChange={(e) => handleChange(e, name)}
            onBlur={(e) => handleBlur(e, name)}
          />
        );
      case 'TextArea':
        return (
          <textarea
            id={name}
            value={state[name]}
            onChange={(e) => handleChange(e, name)}
            onBlur={(e) => handleBlur(e, name)}
          />
        );
      case 'Select':
        return (
          <select
            value={state[name]}
            onChange={(e) => handleChange(e, name)}
            onBlur={(e) => handleBlur(e, name)}
          >
            {options &&
              options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        );
      default:
        return <input type='Text' id={name} />;
    }
  };

  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      {/* {(type === 'Text' || type === 'Email') && (
        <input type={type.toLowerCase()} id={name} />
      )}
      {type === 'TextArea' && <textarea id={name} />}
      {type === 'Select' && (
        <select>
          {options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      )} */}
      {fieldType(type)}
      {errorsState[name] &&
        errorsState[name].length > 0 &&
        errorsState[name].map((err) => (
          <span key={err} className='form-error'>
            {err}
          </span>
        ))}
    </div>
  );
};

Field.defaultProps = {
  type: 'Text',
};

export default Field;
