import React from 'react';
import { Typography } from '@mui/material';

const Content = () => {
  return (
    <div className='border'>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'white' }}>
        Content Section
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
        This is the main content area.
      </Typography>
    </div>
  );
};

export default Content;

