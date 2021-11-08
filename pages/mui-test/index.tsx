import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import RikotteDialog from '../../components/rikotte-dialog';

export default function MuiTest() {
  const [open, setOpen] = React.useState(false);
  const dialogCloser = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </Box>

      <Box sx={{ position: 'fixed', bottom: 72, right: 16 }}>
        <Fab color="primary" disableRipple={true} onClick={() => setOpen(true)}>
          <ChatIcon />
        </Fab>
      </Box>

      <RikotteDialog open={open} closer={dialogCloser} />
    </div>
  );
}
