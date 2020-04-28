import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
  tryToLogMe: () => void;
}

const LoginPage: React.FC<RouteComponentProps & Props> = (props) => {
  const LogMe = () => {
    props.tryToLogMe();
    props.history.push('/admin');
  };

  return (
    <div className='page-container'>
      <h1>Login</h1>
      <p>You need to login ...</p>
      <button onClick={LogMe}>Log me</button>
    </div>
  );
};

export default LoginPage;
