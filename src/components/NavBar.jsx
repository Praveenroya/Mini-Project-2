import React from 'react';
import { AppBar, Toolbar, Typography, Button  } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#333', padding: '10px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#fff' }}>
          Video Streaming
        </Typography>
        <div sx={{ display: 'flex', gap: '10px' }}>
        <Button color="inherit" component={Link} to="/" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
        Home <box-icon name='home-alt'></box-icon>
        </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
            Login <box-icon type='solid' name='user-check'></box-icon>
          </Button>
          <Button color="inherit" component={Link} to="/signup" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
            Signup <box-icon type='solid' name='user-circle'></box-icon>
          </Button>
          <Button color="inherit" component={Link} to="/upload" sx={{ color: '#fff', '&:hover': { color: '#ccc' } }}>
            Upload
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;