import React from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';

import { Rikotta } from '../utils/types';

const Input = styled('input')({ display: 'none' });
const Img = styled('img')();

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
  sender: (rikotta: Rikotta) => void;
};

export default function RikottaDialog(prop: Props) {
  const { open, closer, sender } = prop;

  const [attachedImage, setAttachedImage] = React.useState<string | null>(null);
  const [fav, setFav] = React.useState(true);
  const [text, setText] = React.useState('');

  const inputText = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  const attachImage = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const files = changeEvent.target.files;

    if (!files?.length) {
      return;
    }

    const uploadFile = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fileEvent) => {
      if (!fileEvent.target) {
        return;
      }

      setAttachedImage(fileEvent.target.result as string);
      // 画像削除後に同じファイルを上げられるようにする
      changeEvent.target.value = '';
    };
    fileReader.readAsDataURL(uploadFile);

    setFav(true);
  };

  const deleteImage = () => setAttachedImage(null);

  const checkFav = (event: React.ChangeEvent<HTMLInputElement>) => setFav(event.target.checked);

  const closeDialog = () => {
    setText('');
    setAttachedImage(null);
    closer();
  };

  const sendRikotta = () => {
    const rikotta: Rikotta = { text, sentAt: new Date(), image: attachedImage };
    sender(rikotta);
    closeDialog();
  };

  return (
    <>
      <StyledDialog open={open} onClose={closeDialog} fullWidth maxWidth="xs">
        <DialogContent>
          <TextField
            id="name"
            variant="outlined"
            placeholder="いま梨子ちゃんとどうしてる？"
            rows={6}
            autoFocus
            multiline
            fullWidth
            value={text}
            onChange={inputText}
          />

          {attachedImage && (
            <Box sx={{ position: 'relative' }}>
              <IconButton
                size="small"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
                onClick={deleteImage}
              >
                <CancelIcon />
              </IconButton>
              <Img
                sx={{
                  width: {
                    xs: 100,
                    sm: 150,
                    md: 150,
                  },
                }}
                src={attachedImage}
              />
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <IconButton color="primary" component="span">
            <PhotoAlbumIcon />
          </IconButton>

          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              multiple
              onChange={attachImage}
            />
            <IconButton color="primary" component="span">
              <AddPhotoAlternateIcon />
            </IconButton>
          </label>

          {attachedImage && (
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={fav}
              onChange={checkFav}
            />
          )}

          <Button
            color="primary"
            endIcon={<SendIcon />}
            variant="contained"
            onClick={sendRikotta}
            disabled={!text.trim() && !attachedImage}
          >
            送信
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  );
}
