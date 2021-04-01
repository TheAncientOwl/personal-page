import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, Divider } from '@material-ui/core';

const ExperienceConfig = [
  {
    language: 'C++',
    details: [' In high school I participated in algorithmic contests where I used the C++ language'],
  },
  {
    language: 'Java',
    details: [
      'Besides programming, I like games.',
      'During high school I combined them by developing Java plugins for Minecraft multiplayer servers.',
    ],
  },
  {
    language: 'C# & UnityEngine',
    details: [
      'For a few months now I have combined again my two passions and started studying game development with C# & Unity Game Engine.',
    ],
  },
  {
    language: 'JavaScript & ReactJS',
    details: [
      'The real adventure with JavaScript started in the second year of college when I enrolled in the "Tap that job" project and I was admitted to the JavaScript & ReactJS courses at Ubisoft.',
    ],
  },
];

import './border.css';

export default function Experience() {
  return (
    <Timeline align='right'>
      {ExperienceConfig.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineContent>
            <Typography component='div' style={{ textAlign: 'center' }}>
              <ul style={{ listStyleType: 'none' }}>
                {exp.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </Typography>
            <Divider />
          </TimelineContent>

          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{exp.language}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
