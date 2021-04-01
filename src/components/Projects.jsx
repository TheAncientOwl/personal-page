import {
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
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

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
    <>
      <ListItem key={index} alignItems='center'>
        <ListItemAvatar>
          <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
        </ListItemAvatar>

        <ListItemText
          primary={
            <>
              <Link
                style={{ fontStyle: 'italic', color: 'green', fontWeight: 'bold' }}
                href={repo.html_url}
                target='_blank'>
                {repo.name}
              </Link>
              <Typography style={{ fontStyle: 'italic', color: 'green' }} variant='body2' color='textPrimary'>
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
      <Divider style={{ background: 'gray' }} />
    </>
  ));

  return (
    <>
      <Typography variant='h5' align='center'>
        GitHub Repos
      </Typography>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <List className={classes.root}>{listItems}</List>
      </Box>
    </>
  );
}
