import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MediaCard from './MediaCard';

export default function Container() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} direction="column" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MediaCard />
        </Grid>
      </Grid>
    </Container>
  );
}
