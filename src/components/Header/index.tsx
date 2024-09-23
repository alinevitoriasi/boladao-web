import React from 'react';
import { isAdminValidation, isAuthenticated } from '../../services/auth';

import './style.css';
import HomeHeader from './HomeHeader';
import UserHeader from './UserHeader';
import AdminHeader from './AdminHeader';

const Header = () => {
  if (!isAuthenticated()) return <HomeHeader />;

  if (isAuthenticated() && isAdminValidation()) return <AdminHeader />;

  return <UserHeader />;
};

export default Header;
