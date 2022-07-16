import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
/* import imglogo from '../../assets/w.png'; */
import imglogo from '../assets/w.png';
import Image from 'next/image'
import Button from '@mui/material/Button'





export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ color: "black", backgroundColor: "#FDFEFE" }}>
        <Container maxWidth="md">
          <Toolbar>
            <Box sx={{mr: 2}}>
              <Image
                src={imglogo}
                alt="Picture of the author"
                width={160}
                height={45}
              />
            </Box>
            <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
           
            </Typography>
            <Typography variant="h6" color="initial">
              <a href="/contactanos" className='contactanos'>Contáctanos</a>
            </Typography>
         
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
