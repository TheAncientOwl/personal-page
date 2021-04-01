import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, Divider } from '@material-ui/core';

import Highlight from './Highlight';

const ExperienceConfig = [
  {
    language: 'C++',
    details: [
      <>
        {' '}
        In high school I participated in <Highlight>algorithmic contests</Highlight> where I used the{' '}
        <Highlight>C++</Highlight> language
      </>,
    ],
  },
  {
    language: 'Java',
    details: [
      <>
        During high school I combined gaming and programming by developing{' '}
        <Highlight>Java plugins for Minecraft Multiplayer servers</Highlight>.
      </>,
    ],
  },
  {
    language: 'C# & UnityEngine',
    details: [
      <>
        For a few months now I have combined again my two passions and started studying{' '}
        <Highlight>game development with C# & Unity Game Engine</Highlight>.
      </>,
    ],
  },
  {
    language: 'JavaScript & ReactJS',
    details: [
      <>
        <Highlight>The real adventure</Highlight> started in the second year of college when I enrolled in the &quot;Tap
        that job&quot; project and I was admitted to the JavaScript & ReactJS courses at Ubisoft.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <Timeline style={{ paddingLeft: '9%' }} align='right'>
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
            <Divider style={{ background: 'green' }} />
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
