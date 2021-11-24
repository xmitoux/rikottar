import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';

type Props1 = {
  children: React.ReactElement;
};

function HideOnScroll(props: Props1) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

type Props2 = {
  title: string;
};

export default function HideAppBar(props: Props2) {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography variant="h6" component="div">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Box sx={{ my: 6 }} />
    </>
  );
}
