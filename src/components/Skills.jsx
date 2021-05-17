import React, { Fragment } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ListIconTextItem from './ListIconTextItem';

import Highlight from './Highlight';

const SkillsConfig = [
  {
    language: 'C++',
    level: 'skillful',
    about: [
      <>
        When I started learning programming in high school, the first language was <Highlight>C</Highlight>.
      </>,
      <>
        Once I developed my <Highlight>algorithmic thinking</Highlight>, it was pretty easy for me to switch to{' '}
        <Highlight>C++</Highlight>.
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
        <Highlight>Java</Highlight> was the second programming language I&apos;ve learned.
      </>,
      <>
        In high school I started playing <Highlight>Minecraft Multiplayer</Highlight>. This game was made in{' '}
        <Highlight>Java</Highlight>
        (surprise).
      </>,
      <>
        Over time, I became more and more curious about what was <Highlight>behind the game</Highlight>.
      </>,
      <>
        After a bit of research I started learning how can I modify the gameplay via <Highlight>Spigot API</Highlight>,
        a minecraft&apos;s server API.
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
        When I started this journey, I had to choose between <Highlight>&#123; C++ & Unreal Engine &#125;</Highlight>{' '}
        and <Highlight>&#123; C# & Unity Engine &#125;</Highlight> and since I already knew <Highlight>C++</Highlight>,
        I chose the <Highlight>C#</Highlight> version because I wanted <Highlight>something new</Highlight>.
      </>,
      <>
        I spent a summer learning the features of <Highlight>C# & Unity Engine</Highlight>. It was fun to come up with
        ideas and watch them come to life.
      </>,
    ],
  },
  {
    language: 'JavaScript & ReactJS',
    level: 'beginner',
    about: [
      <>
        As a <Highlight>fun fact</Highlight>, the first time I used <Highlight>JavaSript</Highlight> was in 10th grade
        in high school for a <Highlight>grid test</Highlight> for a web page. Then I hoped it would be the{' '}
        <Highlight>first and last time</Highlight> I use it.
      </>,
      <>
        The real adventure with <Highlight>JavaScript</Highlight> started in the second year of college when I enrolled
        in the <Highlight>&quot;Tap that job&quot;</Highlight> project and was admitted to the{' '}
        <Highlight>JavaScript & ReactJS</Highlight> courses at Ubisoft.
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
