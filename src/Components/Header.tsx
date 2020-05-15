import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import BasketSummary from 'components/BasketSummary';
import { ApplicationState } from 'store/store';

import './Header.scss';
import logo from 'assets/logo.svg';

const Header: React.FC<RouteComponentProps> = (props) => {
  const store = useSelector((store: ApplicationState) => ({
    basketCount: store.basket.products.length,
  }));
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    setSearch(searchParams.get('search') || '');
  }, [props.location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.history.push(`/products?search=${search}`);
    }
  };

  return (
    <header className='header'>
      <div className='search-container'>
        <input
          type='search'
          placeholder='search'
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeydown}
        />
        <BasketSummary count={store.basketCount} />
      </div>
      <img src={logo} className='header-logo' alt='logo' />
      <h1 className='header-title'>React Shop</h1>
      <nav>
        <NavLink
          to='/products'
          className='header-link'
          activeClassName='header-link-active'
        >
          Products
        </NavLink>
        <NavLink
          to='/contactus'
          className='header-link'
          activeClassName='header-link-active'
        >
          Contact Us
        </NavLink>
        <NavLink
          to='/admin'
          className='header-link'
          activeClassName='header-link-active'
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

export default withRouter(Header);
