import { Validator, Values } from 'constants/interfaces/Form';

export const required: Validator = (
  fieldName: string,
  values: Values,
  args?: any
): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ''
    ? 'This must be populated'
    : '';

export const minLength: Validator = (
  fieldName: string,
  values: Values,
  length: number
): string =>
  values[fieldName] && values[fieldName].length < length
    ? `This must be at least ${length} characters`
    : '';
