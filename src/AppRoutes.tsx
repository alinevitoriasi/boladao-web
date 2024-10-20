import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NewPosts from './pages/NewPosts';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import MyPosts from './pages/MyPosts';
import Post from './pages/Post';

import { isAdminValidation, isAuthenticated } from './services/auth';
import AdminPage from './pages/AdminPages/AdminPosts';
import AdminPost from './pages/AdminPages/AdminPost';
import ResponsiveDrawer from './components/DashboardLayout/DashboardLayout';
import AppBar from './components/AppBar';
import About from './pages/About';
import Help from './pages/Help';

const AppRoutes = () => {
  const PrivateRoute = (): JSX.Element => {
    return (
      <ResponsiveDrawer>
        {isAuthenticated() ? <Outlet /> : <Navigate to='/login' />}
      </ResponsiveDrawer>
    );
  };

  const PublicRoute = (): JSX.Element => {
    return (
      <>
        <AppBar />
        {!isAuthenticated() ? (
          <Outlet />
        ) : (
          <Navigate to={isAdminValidation() ? '/admin' : '/posts'} />
        )}{' '}
      </>
    );
  };

  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrar' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>

      {/* Rotas Privadas */}
      <Route element={<PrivateRoute />}>
        <Route path='/posts' element={<Posts />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
        <Route path='/myposts' element={<MyPosts />} />
        <Route path='/novopost' element={<NewPosts />} />
        <Route path='/post/:id' element={<Post />} />

        {/* Rotas Administrativas */}
        {isAdminValidation() && (
          <>
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin/post/:id' element={<AdminPost />} />
          </>
        )}

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
