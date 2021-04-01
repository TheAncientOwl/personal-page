import React, { Fragment } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ListIconTextItem from './ListIconTextItem';

const SkillsConfig = [
  {
    language: 'C++',
    level: 'skillful',
    about: [
      'When I started learning programming in high school, the first language was C.',
      'Once I developed my algorithmic thinking, it was pretty easy for me to switch to C++.',
      'I like the fact that it is very efficient and that the programmer has a lot of control over what happens to the memory.',
      'This is the language I used in programming contests.',
    ],
  },
  {
    language: 'Java',
    level: 'beginner',
    about: [
      "Java was the second programming language I've learned.",
      'In high school I started playing Minecraft Multiplayer. This game was made in  Java (surprise).',
      'Over time, I became more and more curious about what was behind the game.',
      "After a bit of research I started learning how can I modify the gameplay via Spigot API, a minecraft's server API.",
      'It was a lot of fun learning some Java through gaming.',
    ],
  },
  {
    language: 'C# & UnityEngine',
    level: 'beginner',
    about: [
      'In my first year of college I became more and more interested in how games are created.',
      'When I started this journey, I had to choose between { C++ & Unreal Engine } and { C# & Unity Engine } and since I already knew C++, I chose the C# version because I wanted something new.',
      'I spent a summer learning the features of C# and Unity Engine. It was fun to come up with ideas and watch them come to life.',
      "At this level I see C# like a combination of C++ & Java but I'm sure it's much more than this.",
    ],
  },
  {
    language: 'JavaScript & ReactJS',
    level: 'beginner',
    about: [
      'As a fun fact, the first time I used JavasSript was in 10th grade in high school for a grid test for any web page. Then I hoped it would be the first and last time I use it.',
      'The real adventure with JavaScript started in the second year of college when I enrolled in the "Tap that job" project and was admitted to the JavaScript & ReactJS courses at Ubisoft.',
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
