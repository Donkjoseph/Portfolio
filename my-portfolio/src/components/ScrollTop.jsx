import React from 'react';
import { Fab, Slide } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { useScrollTrigger } from '@mui/material';

export const ScrollTop = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  return (
    <Slide in={trigger} direction="up">
      <Fab
        color="secondary"
        size="medium"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Slide>
  );
};
