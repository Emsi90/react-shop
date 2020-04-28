import React, { useState, useEffect } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';

import './Header.scss';
import logo from 'assets/logo.svg';

const Header: React.FC<RouteComponentProps> = (props) => {
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
