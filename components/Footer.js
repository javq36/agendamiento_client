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

import imglogo from '../assets/w.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import YouTubeIcon from '@mui/icons-material/YouTube';

import Image from 'next/image';




import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
// animaciones
import { motion } from "framer-motion"
import Link from 'next/link'

import Button from 'react-bootstrap/Button';


const drawerWidth = '100%';
const drawerHeight = '210px';
const navItems = ['Home', 'Contáctanos', 'Ver mi Historial', 'Generar PQR'];


export function Footer() {
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
        staggerChildren: 0.5
      }
    }
  }

  const itemanimado = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1, scale: 1,
      animate: { x: [200] },
      transition: { type: "Spring ", stiffness: 20 }
    }
  }




  return (
    <motion.div>
      <footer class="pie-pagina">
        <div class="grupo-1">
          <div class="box">
            <Image
              src={img1}
              alt="Picture of the author"
              width={80}
              height={80}
            />
            <Image
              src={img2}
              alt="Picture of the author"
              width={80}
              height={80}
            />
            <Image
              src={img3}
              alt="Picture of the author"
              width={100}
              height={100}
            />

            <Image
              src={img4}
              alt="Picture of the author"
              width={80}
              height={80}
            />
               <Image
              src={img5}
              alt="Picture of the author"
              width={80}
              height={90}
            />
               <Image
              src={img6}
              alt="Picture of the author"
              width={80}
              height={80}
            />
               <Image
              src={img7}
              alt="Picture of the author"
              width={80}
              height={80}
            />

          </div>
         
          <div class="box">
            <h2>SIGUENOS</h2>
            <div class="red-social" sx={{ color: 'white'}}>
              <a href="#" class="fa fa-facebook">
                <YouTubeIcon />
              </a>
              <a href="#" class="fa fa-facebook">
                <YouTubeIcon />
              </a>
              <a href="#" class="fa fa-facebook">
                <YouTubeIcon />
              </a>
              <a href="#" class="fa fa-facebook">
                <YouTubeIcon />
              </a>
             
            </div>
          </div>
        </div>
        <div class="grupo-2">
          <small>&copy; 2022 <b> AutoMarcol </b> - Todos los Derechos Reservados.</small>
        </div>
      </footer>
    </motion.div>
  );
}


