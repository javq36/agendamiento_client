import * as React from 'react';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgsend from '../../assets/imgsend.svg';
import Image from 'next/image';
// navbar
import { Navbar } from '../../components/Navbar';

// animaciones
import { motion } from "framer-motion"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'




function index() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md" style={{ marginBottom: '30px' }}>
        <motion.div
          animate={{ x: [-4000, 0], opacity: 2, boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.2)" }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}>
          <Paper elevation={4} style={{ marginTop: 15, textAlign: "center" }}>   
             <Button variant="contained" color="success">
                 Contáctanos al Whassapt
            </Button>
          </Paper>
        </motion.div>
      </Container>


    </div>
  )
}

export default index