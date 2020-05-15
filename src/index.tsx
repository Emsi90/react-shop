import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'Routes';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';
import configureStore from 'store/store';
import { ApplicationState } from 'store/store';

interface Props {
  store: Store<ApplicationState>;
}

const Root: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
