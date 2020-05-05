import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import AdminUser from './AdminUser';

import { adminUsersData } from 'data/UserData';

const AdminUsers: React.FC = () => {
  return (
    <div>
      <ul className='admin-sections'>
        {adminUsersData.map((user) => (
          <li key={user.id}>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName='admin-link-active'
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path='/admin/users/:id' component={AdminUser} />
    </div>
  );
};

export default AdminUsers;
