// pages/ES6.jsx
import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = ['ArrowFunction', 'TernaryOp', 'Map'];

export default function ES6() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 ,justifyContent: 'center'}}>
      {pages.map((page) => (
        <Button
          key={page}
          component={Link}
          to={`/${page}`}
          sx={{  color: 'width', display: 'outside', width: '200px' }}
          variant='text'
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}
