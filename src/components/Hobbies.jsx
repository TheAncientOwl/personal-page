import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ListIconTextItem from './ListIconTextItem';

import Highlight from './Highlight';

const HobbiesConfig = [
  {
    title: 'Programming',
    about: [
      'I like to see how my ideas come to life.',
      'This passion started in high school',
      'I like to use my logic to solve various algorithmic problems.',
      <>
        I also like to use programming to <Highlight>automate some tasks</Highlight>.
      </>,
      <>
        I created some tools to <Highlight>defragment my SSD</Highlight>, <Highlight>kill some processes</Highlight>,
        <Highlight>delete temporary Windows files</Highlight>, etc.
      </>,
    ],
  },
  {
    title: 'Gaming',
    about: [
      <>
        I&apos;m a <Highlight>competitive</Highlight> player and I like games like{' '}
        <Highlight>Counter Strike: Global Offensive</Highlight>, <Highlight>Valorant</Highlight>,
        <Highlight> Rocket League</Highlight>.
      </>,
      <>
        I like these games because, first of all, they are based on <Highlight>teamwork and strategy</Highlight>.
      </>,
    ],
  },
];

export default function Hobbies() {
  return (
    <>
      {HobbiesConfig.map((hobby, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color='secondary' />}>
            <ListIconTextItem icon={<BeenhereIcon />} prop1={hobby.title} />
          </AccordionSummary>
          <AccordionDetails>
            <Typography component='div'>
              <ul style={{ listStyleType: 'none' }}>
                {hobby.about.map((ab, index) => (
                  <li key={index}>{ab}</li>
                ))}
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
