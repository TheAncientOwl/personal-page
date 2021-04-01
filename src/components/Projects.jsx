import React, { useEffect, useState, Fragment } from 'react';

import {
  makeStyles,
  Link,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  inline: {
    display: 'inline',
  },
});

export default function Projects() {
  const userName = 'TheAncientOwl';
  const [repos, setRepos] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetch('https://api.github.com/users/' + userName + '/repos?sort=created')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, [userName]);

  const listItems = repos.map((repo, index) => (
    <Fragment key={index}>
      <ListItem alignItems='center'>
        <ListItemAvatar>
          <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
        </ListItemAvatar>

        <ListItemText
          primary={
            <>
              <Link
                color='primary'
                style={{ fontStyle: 'italic', fontWeight: 'bold' }}
                href={repo.html_url}
                target='_blank'>
                {repo.name}
              </Link>
              <Typography color='primary' style={{ fontStyle: 'italic' }} variant='body2'>
                &lt; {repo.language} &gt;
              </Typography>
            </>
          }
          secondary={
            <Typography variant='body2' className={classes.inline} color='textPrimary'>
              {repo.owner.login}
              {' — ' + repo.description}
            </Typography>
          }
        />
      </ListItem>

      <Divider style={{ background: 'grey' }} />
    </Fragment>
  ));

  return (
    <>
      <Typography variant='h5' align='center'>
        &lt; GitHub Repos &gt;
        <Divider style={{ background: 'green' }} />
      </Typography>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <List>{listItems}</List>
      </Box>
    </>
  );
}
