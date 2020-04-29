export enum ActionType {
  NAME = 'NAME',
  EMAIL = 'EMAIL',
  REASON = 'RESON',
  NOTES = 'NOTES',
}

export interface State {
  name: string;
  email: string;
  reason: string;
  notes: string;
}

export type Action = {
  type: string;
  payload: any;
};
