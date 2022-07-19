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
import CloseIcon from '@mui/icons-material/Close';
// animaciones
import { motion } from "framer-motion"
import Link from 'next/link'







const drawerWidth = '100%';
const drawerHeight = '210px';
const navItems = ['Home', 'Contáctanos', 'Ver mi Historial', 'Generar PQR'];


export function Navbar() {
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
      setOculto2('none');
    }
  };


  const containerw = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemanimado = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", duration: 1 } 
    }
  }




  return (
    <motion.div
      initial={{ opacity: 0, duration: 200 }}
      animate={{ y: [-2000 , 0], opacity: 2 }}
      transition={{ type: "spring", stiffness: 100, duration: 3 }}>
      <Box sx={{ display: 'flex', paddingBottom: 10 }}>
        <Drawer variant="permanent" anchor="top">
          <AppBar component="nav" style={{ color: "black", backgroundColor: "#FDFEFE", paddingTop: 6 }} sx={{ zIndex: 0 }}>
            <Container maxWidth="md">
              <Toolbar>
                <div>
                  <Container maxWidth="sm">
                    <IconButton
                      color="primary"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { sm: 'none' }, color: '#2f335e' }}>
                      <MenuIcon style={{ display: oculto2 }} />
                      <CloseIcon style={{ display: oculto }} />
                    </IconButton>
                  </Container>
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
                        <Button href="./" sx={{ fontSize: '13px', color: 'black', marginBottom: '0.4vw', marginLeft: '0.4vw', padding: '0.4vw', }}>
                            Inicio
                        </Button>
                        <Button href="./" sx={{ fontSize: '13px', color: 'black', marginBottom: '0.4vw', marginLeft: '0.4vw', padding: '0.4vw', }}>
                            Ver mi Historial
                        </Button>
                        <Button href="./" sx={{ fontSize: '13px', color: 'black', marginBottom: '0.4vw', marginLeft: '0.4vw', padding: '0.4vw', }}>
                            Generar PQRS
                        </Button>
                        <Button href="./contactanos" sx={{ fontSize: '13px', color: 'black', marginBottom: '0.4vw', marginLeft: '0.4vw', padding: '0.4vw', }}>
                            Contactanos
                        </Button>
                    </Box>
                  </Typography>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </Drawer>

        <Box component="nav">
          <Drawer
            variant="persistent"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', height: drawerHeight, width: drawerWidth, marginTop: 7.5, backgroundColor: '#ECF0F1' },
            }}
          >
            <Box onClick={handleDrawerToggle}>
              <motion.ul
                variants={containerw}
                layout
                animate={isView}
              >
                <motion.li
                  variants={itemanimado}>
                  <ListItemButton href="./" sx={{ textAlign: 'left' }}>
                    <ListItemText sx={{ marginLeft: 4 }} primary={'Inicio'} />
                  </ListItemButton>
                </motion.li>
                <motion.li
                  variants={itemanimado}>
                  <ListItemButton href="./contactanos" sx={{ textAlign: 'left' }}>
                    <ListItemText sx={{ marginLeft: 4 }} primary={'Ver mi Historial'} />
                  </ListItemButton>
                </motion.li>
                <motion.li
                  variants={itemanimado}>
                  <ListItemButton href="./contactanos" sx={{ textAlign: 'left' }}>
                    <ListItemText sx={{ marginLeft: 4 }} primary={'Generar PQR'} />
                  </ListItemButton>
                </motion.li>
                <motion.li
                  variants={itemanimado}>
                  <ListItemButton href="./contactanos" sx={{ textAlign: 'left' }}>
                    <ListItemText sx={{ marginLeft: 4 }} primary={'Contáctanos'} />
                  </ListItemButton>
                </motion.li>
              </motion.ul>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </motion.div>
  );
}


