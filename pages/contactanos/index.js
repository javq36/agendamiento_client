import * as React from 'react';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
// navbar
import { Navbar } from '../../components/Navbar';



function index() {
  return (
    <div>
        <Navbar />
        <Container maxWidth="sm">
         <Paper elevation={3} sx={{ marginTop: 2 }}>
            w
         </Paper>
        </Container>



    </div>
  )
}

export default index