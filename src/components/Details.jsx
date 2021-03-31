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
    value: 'Câmpulung Mușcel, Argeș',
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
    value: 'https://github.com/TheAncientOwl',
    icon: <GitHubIcon />,
  },
  {
    title: 'Favourite bird',
    value: 'Owl',
    icon: <AssistantIcon />,
  },
  {
    title: 'Recommended series',
    value: 'How I met your mother',
    icon: <BeenhereIcon />,
  },
  {
    title: 'Try on Spotify',
    value: (
      <Link
        style={{ color: 'green' }}
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
            <ListIconTextItem key={index} icon={detail.icon} text1={detail.title} text2={detail.value} />
          ))}
        </List>
      </Typography>
    </Box>
  );
}
