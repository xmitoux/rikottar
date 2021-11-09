import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Box sx={{ mt: 10 }}></Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<HomeIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
}
