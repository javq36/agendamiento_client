import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import imglogo from '../assets/w.png';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
// animaciones
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { usStates } from "../constants/usStates";
import { transform } from "framer-motion"
import { useState } from "react";





const drawerWidth = '100%';
const drawerHeight = '210px';
const navItems = ['Home', 'Contáctanos', 'Ver mi Historial', 'Generar PQR'];


export function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isView, setIsView] = React.useState('hidden');
  const [oculto, setOculto] = React.useState('none');
  const [oculto2, setOculto2] = React.useState('hidden');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (isView == 'show') {
      setIsView('hidden');
      setOculto('none');
      setOculto2('block');
    } else {
      setIsView('show');
      setOculto('block');
      setOculto2('block');
    }
  };


  const containerw = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const itemanimado = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1, scale: 1,
      animate: { x: [200]},
      transition: { type: "Spring ", stiffness: 20}
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <motion.ul
        variants={containerw}
        layout
        animate={isView}
      >
        {navItems.map((item) => (
          <motion.li
            variants={itemanimado}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }}>
                <ListItemText sx={{ marginLeft: 2 }} primary={item} />
              </ListItemButton>
            </ListItem>
          </motion.li>
        ))}
      </motion.ul>
    </Box>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', paddingBottom: 10 }}>
      <Drawer variant="permanent" anchor="top">
        <AppBar component="nav" style={{ color: "black", backgroundColor: "#FDFEFE", paddingTop: 6 }} sx={{ zIndex: 0 }}>
          <Container maxWidth="md">
            <Toolbar>
              <div>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}>

                  <MenuIcon style={{display: oculto2}} />

                  <CloseIcon  style={{display: oculto}} />

                </IconButton>
              </div>
              <div>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Image
                      src={imglogo}
                      alt="Picture of the author"
                      width={160}
                      height={45}
                    />

                    {navItems.map((item) => (
                      <Button key={item} href="./" sx={{ fontSize: '13px', color: 'black', marginBottom: '0.4vw', marginLeft: '0.4vw', padding: '0.4vw', }}>
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Typography>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </Drawer>

      <Box component="nav">
        
        <Drawer
          container={container}
          variant="persistent"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', height: drawerHeight, width: drawerWidth, marginTop: 6 },
          }}
        >
          {drawer}
        </Drawer>

      </Box>
    </Box>
  );
}


