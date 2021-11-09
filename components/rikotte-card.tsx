import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export type Props = {
  rikotte: string;
  sentAt: Date;
};

export default function RikotteCard({ rikotte, sentAt }: Props) {
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${(
      '0' + date.getMinutes()
    ).slice(-2)}`;
  };

  return (
    <Paper
      sx={{
        p: 2,
        mx: 'auto',
        my: 3,
        width: {
          xs: 300, // theme.breakpoints.up('xs')
          sm: 500, // theme.breakpoints.up('sm')
          md: 600, // theme.breakpoints.up('md')
        },
        borderRadius: 6,
        backgroundColor: '#fddde6',
      }}
      elevation={4}
    >
      <Grid container spacing={2} wrap="nowrap">
        <Grid item xs="auto">
          <Avatar src="/assets/riko.jpg" sx={{ width: 48, height: 48 }} />
        </Grid>

        <Grid item xs>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="subtitle1" sx={{ wordBreak: 'break-word' }}>
                {rikotte}
              </Typography>
            </Grid>
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
