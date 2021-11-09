import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import RikotteDialog from '../../components/rikotte-dialog';
import RikotteCard, { Props as Rikotte } from '../../components/rikotte-card';

export default function MuiTest() {
  const [open, setOpen] = React.useState(false);

  const [rikottes, setRikottes] = React.useState<Rikotte[]>([
    { rikotte: '梨子ちゃんかわいい', sentAt: new Date() },
  ]);

  /**
   * Rikotteを送信する
   */
  const sendRikotte = (rikotte: Rikotte) => setRikottes([...rikottes, rikotte]);

  /**
   * Rikotteを描画する
   */
  const renderRikottes = () =>
    rikottes
      .map((rikkote, i) => (
        <RikotteCard rikotte={rikkote.rikotte} sentAt={rikkote.sentAt} key={i} />
      ))
      .reverse();

  const closerDialog = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ pt: 1 }}>
      {renderRikottes()}

      <Box sx={{ position: 'fixed', bottom: 72, right: 16 }}>
        <Fab color="primary" disableRipple={true} onClick={() => setOpen(true)}>
          <ChatIcon />
        </Fab>
      </Box>

      <RikotteDialog open={open} closeDialog={closerDialog} rikotteSender={sendRikotte} />
    </Box>
  );
}
