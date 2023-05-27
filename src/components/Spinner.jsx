import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function Spinner() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>

    <div>
      <Backdrop
        sx={{ color: '#fff', }}
        open
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    </div>
  );
}