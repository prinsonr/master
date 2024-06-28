// src/components/Contact.jsx
import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
//import Header from './Header';
import Footer from '../component/Footer';

export default function Contact() {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    margin: '20px auto',
  };

  return (
    <div>
      
      <Container component="main" maxWidth="md">
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Box component="form" sx={formStyle} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ width: '100%', height: '100px', backgroundColor: 'pink', padding: '20px', textAlign: 'center' }}>
      </Box>
      <Footer />
    </div>
  );
}
