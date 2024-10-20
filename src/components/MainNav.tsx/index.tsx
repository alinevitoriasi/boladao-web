import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import {
  isAdminValidation,
  isAuthenticated,
  logout,
} from '../../services/auth';

import Diversity2Icon from '@mui/icons-material/Diversity2';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SupportIcon from '@mui/icons-material/Support';
import InfoIcon from '@mui/icons-material/Info';
import { Icon } from '@mui/material';

const MainNav = () => {
  const userNav = [
    { label: 'Página Inicial', to: '/posts', icon: <HomeIcon /> },
    { label: 'Nova Publicação', to: '/novopost', icon: <PostAddIcon /> },
    {
      label: 'Minhas Publicações',
      to: '/myposts',
      icon: <LocalPostOfficeIcon />,
    },
    { label: 'Ajuda', to: '/help', icon: <SupportIcon /> },
    { label: 'Sobre', to: '/about', icon: <InfoIcon /> },
  ];

  const adminNav = [
    { label: 'Página Inicial', to: '/admin', icon: <HomeIcon /> },
    { label: 'SPAM', to: '/admin', icon: <PostAddIcon /> },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigationItems =
    isAuthenticated() && isAdminValidation() ? adminNav : userNav;
  return (
    <div>
      <Toolbar>
        <Icon fontSize='large' style={{ color: 'rgba(3, 34, 84)' }}>
          <Diversity2Icon />
        </Icon>
        {/* <Typography variant='body1' sx={{ mx: 5 }}>
          CAMPUS JUNTOS
        </Typography> */}
      </Toolbar>
      {/* <Divider /> */}
      <List>
        {navigationItems.map(({ label, to, icon }, index) => (
          <Link key={index} to={to} style={{ textDecoration: 'none' }}>
            <ListItem key={label} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem key={'Sair'} disablePadding>
          <ListItemButton onClick={() => handleLogout()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={'Sair'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default MainNav;
