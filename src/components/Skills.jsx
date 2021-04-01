import React, { Fragment } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ListIconTextItem from './ListIconTextItem';

import ItalicGreen from './ItalicGreen';

const SkillsConfig = [
  {
    language: 'C++',
    level: 'skillful',
    about: [
      <>
        When I started learning programming in high school, the first language was <ItalicGreen>C</ItalicGreen>.
      </>,
      <>
        Once I developed my algorithmic thinking, it was pretty easy for me to switch to <ItalicGreen>C++</ItalicGreen>.
      </>,
      'I like the fact that it is very efficient and that the programmer has a lot of control over what happens to the memory.',
      'This is the language I used in programming contests.',
    ],
  },
  {
    language: 'Java',
    level: 'beginner',
    about: [
      <>
        <ItalicGreen>Java</ItalicGreen> was the second programming language I&apos;ve learned.
      </>,
      <>
        In high school I started playing <ItalicGreen>Minecraft Multiplayer</ItalicGreen>. This game was made in{' '}
        <ItalicGreen>Java</ItalicGreen>
        (surprise).
      </>,
      <>
        Over time, I became more and more curious about what was <ItalicGreen>behind the game</ItalicGreen>.
      </>,
      <>
        After a bit of research I started learning how can I modify the gameplay via{' '}
        <ItalicGreen>Spigot API</ItalicGreen>, a minecraft&apos;s server API.
      </>,
      'It was a lot of fun learning some Java through gaming.',
    ],
  },
  {
    language: 'C# & UnityEngine',
    level: 'beginner',
    about: [
      'In my first year of college I became more and more interested in how games are created.',
      <>
        When I started this journey, I had to choose between{' '}
        <ItalicGreen>&#123; C++ & Unreal Engine &#125;</ItalicGreen> and{' '}
        <ItalicGreen>&#123; C# & Unity Engine &#125;</ItalicGreen> and since I already knew{' '}
        <ItalicGreen>C++</ItalicGreen>, I chose the <ItalicGreen>C#</ItalicGreen> version because I wanted{' '}
        <ItalicGreen>something new</ItalicGreen>.
      </>,
      <>
        I spent a summer learning the features of <ItalicGreen>C# & Unreal Engine</ItalicGreen>. It was fun to come up
        with ideas and watch them come to life.
      </>,
    ],
  },
  {
    language: 'JavaScript & ReactJS',
    level: 'beginner',
    about: [
      <>
        As a <ItalicGreen>fun fact</ItalicGreen>, the first time I used <ItalicGreen>JavaSript</ItalicGreen> was in 10th
        grade in high school for a <ItalicGreen>grid test</ItalicGreen> for a web page. Then I hoped it would be the{' '}
        <ItalicGreen>first and last time</ItalicGreen> I use it.
      </>,
      <>
        The real adventure with <ItalicGreen>JavaScript</ItalicGreen> started in the second year of college when I
        enrolled in the <ItalicGreen>&quot;Tap that job&quot;</ItalicGreen> project and was admitted to the{' '}
        <ItalicGreen>JavaScript & ReactJS</ItalicGreen> courses at Ubisoft.
      </>,
      'Now it seems a much friendlier language than when we first met.',
    ],
  },
];

export default function Skills() {
  return (
    <>
      {SkillsConfig.map((skill, index) => (
        <Fragment key={index}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon color='secondary' />}>
              <ListIconTextItem icon={<BeenhereIcon />} prop1={skill.language} prop2={skill.level} />
            </AccordionSummary>
            <AccordionDetails>
              <Typography component='div'>
                <ul style={{ listStyleType: 'none' }}>
                  {skill.about.map((ab, index) => (
                    <li key={index}>{ab}</li>
                  ))}
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Divider style={{ background: 'green' }} />
        </Fragment>
      ))}
    </>
  );
}
