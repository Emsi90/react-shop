import React, { useState, Suspense } from 'react';
import {
  BrowserRouter as Router,
  RouteComponentProps,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from 'Components/Header';
import ProductsPage from 'Pages/ProductsPage';
import ProductPage from 'Pages/ProductPage';
import LoginPage from 'Pages/LoginPage';
import NotFoundPage from 'Pages/NotFoundPage';
import ContactUsPage from 'Pages/ContactUsPage';
// import AdminPage from 'Pages/AdminPage';
const AdminPage = React.lazy(() =>
  import(/* webpackChunkName: "AdminPage" */ 'Pages/AdminPage')
);

const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.FC<RouteComponentProps> = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={200}
          classNames='animate'
        >
          <Switch>
            <Route
              path='/login'
              render={(props) => (
                <LoginPage {...props} tryToLogMe={() => setLoggedIn(true)} />
              )}
            />
            <Redirect exact from='/' to='/products'></Redirect>
            <Route exact path='/products' component={ProductsPage} />
            <Route path='/products/:id' component={ProductPage} />
            <Route path='/contactus' component={ContactUsPage} />
            <Route path='/admin'>
              {loggedIn ? (
                <Suspense
                  fallback={<div className='page-container'>Loading...</div>}
                >
                  <AdminPage />
                </Suspense>
              ) : (
                <Redirect to='/login' />
              )}
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default RoutesWrap;
