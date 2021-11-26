import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Rikotta } from '../utils/types';

const Img = styled('img')({});

export default function RikottaCard(props: Rikotta) {
  const { text, image, sentAt } = props;

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${
      date.getUTCHours() + 9
    }:${date.getMinutes()}`;
  };

  return (
    <Paper
      sx={{
        p: 2,
        mx: 'auto',
        my: 3,
        width: {
          xs: 300,
          sm: 500,
          md: 600,
        },
        borderRadius: 6,
        backgroundColor: '#fddde6',
      }}
      elevation={4}
    >
      <Grid container spacing={2} wrap="nowrap">
        <Grid item>
          <Avatar src="/assets/riko.jpg" sx={{ width: 48, height: 48 }} />
        </Grid>

        <Grid item xs>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{
                  wordBreak: 'break-word',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {text}
              </Typography>
            </Grid>

            {image && (
              <Grid item>
                <Img
                  sx={{
                    width: {
                      xs: 150,
                      sm: 200,
                      md: 200,
                    },
                  }}
                  src={image}
                />
              </Grid>
            )}

            <Grid item>
              <Typography variant="caption" color="text.secondary">
                {formatDate(sentAt)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
