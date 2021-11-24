import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SendIcon from '@mui/icons-material/Send';
import { Props as Rikotte } from './rikotte-card';

const StyledDialog = styled(Dialog)({
  '& .MuiDialogContent-root': {
    padding: '10px 12px 0 12px',
  },

  '& .MuiDialogActions-root': {
    padding: '8px 12px',
  },
});

type Props = {
  open: boolean;
  closeDialog: () => void;
  rikotteSender: (prop: Rikotte) => void;
};

export default function RikotteDialog({
  closeDialog,
  open,
  rikotteSender,
}: Props) {
  const [rikotte, setRikotte] = React.useState('');

  const inputRikotte = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRikotte(event.target.value);

  const sendRikotte = () => {
    rikotteSender({ rikotte, sentAt: new Date() });
    closeDialog();
  };

  return (
    <StyledDialog open={open} onClose={closeDialog} fullWidth maxWidth="xs">
      <DialogContent>
        <TextField
          variant="outlined"
          placeholder="いま梨子ちゃんとどうしてる？"
          rows={6}
          autoFocus
          fullWidth
          multiline
          onChange={inputRikotte}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={sendRikotte}
        >
          送信
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}
