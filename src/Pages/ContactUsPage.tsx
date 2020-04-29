import React, { useReducer } from 'react';
import ContactUs from 'Components/ContactUs';
import { State, Action, ActionType } from 'ts/interfaces/Contact';

const initialState: State = { name: '', email: '', reason: '', notes: '' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.NAME:
      return { ...state, name: action.payload };
    case ActionType.EMAIL:
      return { ...state, email: action.payload };
    case ActionType.REASON:
      return { ...state, reason: action.payload };
    case ActionType.NOTES:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}

const ContactUsPage: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div className='page-container'>
        <h1>Contact Us</h1>
        <p>
          If you enter your details we'll get back to you as soon as we can.
        </p>
        <ContactUs
          name={state.name}
          email={state.email}
          reason={state.reason}
          notes={state.notes}
          onChange={(payload) => dispatch(payload)}
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
