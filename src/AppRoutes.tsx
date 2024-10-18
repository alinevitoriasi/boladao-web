import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

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

const AppRoutes = ({ setHeaderPosition }: any) => {
  const PrivateRoute = (): JSX.Element => {
    setHeaderPosition('static');

    return (
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          height: '80vh',
          marginTop: '50px',
        }}
      >
        {isAuthenticated() ? <Outlet /> : <Navigate to='/login' />}
      </Box>
    );
  };

  const PublicRoute = (): JSX.Element => {
    setHeaderPosition('absolute');
    return (
      <>
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
      <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Login />} />
        <Route path='/help' element={<Login />} />
        <Route path='/cadastrar' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path='/posts' element={<Posts />} />
        {isAdminValidation() ? (
          <>
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin/post/:id' element={<AdminPost />} />
          </>
        ) : (
          <>
            <Route path='/post/:id' element={<Post />} />
            <Route path='/myposts' element={<MyPosts />} />
            <Route path='/novopost' element={<NewPosts />} />
          </>
        )}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
