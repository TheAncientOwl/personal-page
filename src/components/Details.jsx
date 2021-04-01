import { Typography, List, Box, Link } from '@material-ui/core';
import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import CakeIcon from '@material-ui/icons/Cake';
import ListIconTextItem from './ListIconTextItem';
import AssistantIcon from '@material-ui/icons/Assistant';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import AlbumIcon from '@material-ui/icons/Album';
import GitHubIcon from '@material-ui/icons/GitHub';

const DetailsConfig = [
  {
    title: 'Adress',
    value: (
      <Link color='primary' target='_blank' href='https://ro.wikipedia.org/wiki/C%C3%A2mpulung'>
        Câmpulung Mușcel, Argeș
      </Link>
    ),
    icon: <HomeIcon />,
  },
  {
    title: 'Phone number',
    value: '0759103031',
    icon: <PhoneIphoneIcon />,
  },
  {
    title: 'Date of birth',
    value: '09/10/2000',
    icon: <CakeIcon />,
  },
  {
    title: 'Email',
    value: 'dele.alex.o.o@gmail.com',
    icon: <EmailIcon />,
  },
  {
    title: 'GitHub',
    value: (
      <Link color='primary' target='_blank' href='https://github.com/TheAncientOwl'>
        https://github.com/TheAncientOwl
      </Link>
    ),
    icon: <GitHubIcon />,
  },
  {
    title: 'Favourite bird',
    value: (
      <Link color='primary' target='_blank' href='https://en.wikipedia.org/wiki/Owl'>
        Owl
      </Link>
    ),
    icon: <AssistantIcon />,
  },
  {
    title: 'Recommended series',
    value: (
      <Link color='primary' target='_blank' href='https://en.wikipedia.org/wiki/How_I_Met_Your_Mother'>
        How I met your mother
      </Link>
    ),
    icon: <BeenhereIcon />,
  },
  {
    title: 'Try on Spotify',
    value: (
      <Link
        color='primary'
        target='_blank'
        href='https://open.spotify.com/playlist/5YYqRKbgTKXAcP91Tv8r1Y?si=7NBnKV3wROCPmWCYeO2yIw'>
        my music (over 600 songs)
      </Link>
    ),
    icon: <AlbumIcon />,
  },
];

export default function Details() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Typography component='div'>
        <List>
          {DetailsConfig.map((detail, index) => (
            <ListIconTextItem key={index} icon={detail.icon} prop1={detail.title} prop2={detail.value} />
          ))}
        </List>
      </Typography>
    </Box>
  );
}
