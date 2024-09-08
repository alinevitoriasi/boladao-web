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

import { isAdmin, isAuthenticated } from './services/auth';

const AppRoutes = ({ setHeaderPosition }: any) => {
  console.log(isAdmin);

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
      <Box
        sx={{
          backgroundColor: '#E1EBFF',
          boxShadow: 'inset -65vw 0 #FFFFFF',
          height: '100vh',
        }}
      >
        {!isAuthenticated() ? (
          <Outlet />
        ) : (
          <Navigate to={isAdmin ? '/admin' : '/posts'} />
        )}{' '}
      </Box>
    );
  };

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastrar' element={<SignUp />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Route>
      <Route element={<PrivateRoute />}>
        <>
          <Route path='/post/:id' element={<Post />} />;
          <Route path='/posts' element={<Posts />} />
          <Route path='/myposts' element={<MyPosts />} />
          <Route path='/novopost' element={<NewPosts />} />
        </>
        {/* {isAdmin ? (
          <Route path='/admin' element={<NewPosts />} />
        ) : (
          <>
            <Route path='/post/:id' element={<Post />} />;
            <Route path='/posts' element={<Posts />} />
            <Route path='/myposts' element={<MyPosts />} />
            <Route path='/novopost' element={<NewPosts />} />
          </>
        )} */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
