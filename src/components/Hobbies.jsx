import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ListIconTextItem from './ListIconTextItem';

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
