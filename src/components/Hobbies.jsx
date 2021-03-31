import React from 'react';
import { Grid, Paper, Divider, Typography } from '@material-ui/core';

const HobbiesConfig = [
  {
    title: 'Programming',
    about: [
      'I like to see my ideas come to life.',
      'This passion started in high school',
      'I like to use my logic to solve various algorithmic problems.',
      'I also like to use programming to automate some tasks.',
      'I created some tools to defragment my SSD, kill some processes, delete some temporary Windows files, etc.',
    ],
  },
  {
    title: 'Gaming',
    about: [
      "I'm a competitive player and I like games like Counter Strike: Global Offensive, Valorant, Rocket League.",
      'I like these games because, first of all, they are based on teamwork and strategy.',
    ],
  },
];

export default function Hobbies() {
  return (
    <Grid container style={{ flex: 1 }} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={2}>
          {HobbiesConfig.map((hobby, index) => (
            <Grid key={index} item>
              <Paper>
                <Typography variant='h5' style={{ color: 'green' }}>
                  &lt; {hobby.title} &gt;
                </Typography>
                <Divider />
                <Typography component='div' variant='body2'>
                  <ul style={{ listStyleType: 'none' }}>
                    {hobby.about.map((ab, index) => (
                      <li key={index}>{ab}</li>
                    ))}
                  </ul>
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
