import { Avatar, Grid, Typography, Link } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

import Img from '../images/avatar.jpg';

function MyLink({ href, children }) {
  return (
    <Link color='primary' style={{ fontStyle: 'italic' }} href={href} target='_blank'>
      {children}
    </Link>
  );
}

MyLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default function About() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Avatar alt='Delegeanu Alexandru' component='span' style={{ height: '160px', width: '160px' }} src={Img} />
        </Grid>

        <Grid item xs={12} sm={10} style={{ paddingLeft: '50px' }}>
          <Typography component='div' align='left'>
            <p>
              Hello, <i>I&apos;m Alex</i>.
            </p>

            <p>
              Currently I am studying at the <MyLink href='https://www.ase.ro/'>Academy of Economic Studies</MyLink> in{' '}
              <MyLink href={'https://en.wikipedia.org/wiki/Bucharest'}>Bucharest</MyLink>
              , <br />
              <MyLink href={'https://csie.ase.ro/'}>Faculty of Cybernetics, Statistics and Economic Informatics</MyLink>
              .
            </p>

            <p>
              I&apos;m a person who likes <i style={{ color: 'green' }}>logical thinking</i> and programming. <br />
              Besides, I enjoy traveling, discovering new places, learning new things, and listening to music.
            </p>

            <p>
              It is known that <i style={{ color: 'green' }}>you never know them all</i>, so I&apos;m constantly looking
              to discover something new.
            </p>

            <p>
              In the future I want a career in software / web / game <i style={{ color: 'green' }}>development</i>.
            </p>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
