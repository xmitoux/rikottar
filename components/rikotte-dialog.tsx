import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SendIcon from '@mui/icons-material/Send';

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
  closer: () => void;
};

export default function RikotteDialog({ closer, open }: Props) {
  return (
    <StyledDialog open={open} onClose={closer} fullWidth maxWidth="xs">
      <DialogContent>
        <TextField
          variant="outlined"
          placeholder="いま梨子ちゃんとどうしてる？"
          rows={6}
          autoFocus
          fullWidth
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" endIcon={<SendIcon />}>
          送信
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}
