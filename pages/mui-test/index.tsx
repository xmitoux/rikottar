import React from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

import RikottaCard from '../../components/rikotta-card';
import RikottaDialog from '../../components/rikotta-dialog';
import { Rikotta } from '../../utils/types';
import { getRikottaList } from '../../utils/firebase';

export default function MuiTest() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [rikottaList, setRikottaList] = React.useState<Rikotta[]>([
    { text: '梨子ちゃんかわいい', sentAt: new Date(), image: null },
  ]);

  React.useEffect(() => {
    console.log('useEffect');

    getRikottaList().then((docs) =>
      docs.forEach((doc) => {
        console.log(doc.data());

        const rikotta = doc.data() as Rikotta;
        console.log(rikotta.sentAt);
        rikotta.sentAt = new Date(rikotta.sentAt);
        setRikottaList([...rikottaList, rikotta]);
      })
    );
  }, []);

  /**
   * Rikotteを送信する
   */
  const sendRikotta = (rikotta: Rikotta) => {
    setRikottaList([...rikottaList, rikotta]);
  };

  /**
   * Rikotteを描画する
   */
  const renderRikottaList = () =>
    rikottaList.map((rikotta, i) => <RikottaCard {...rikotta} key={i} />).reverse();

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box sx={{ pt: 1 }}>
      {renderRikottaList()}

      <Box sx={{ position: 'fixed', bottom: 72, right: 16 }}>
        <Fab color="primary" disableRipple={true} onClick={() => setDialogOpen(true)}>
          <ChatIcon />
        </Fab>
      </Box>

      <RikottaDialog open={dialogOpen} closer={closeDialog} sender={sendRikotta} />
    </Box>
  );
}
