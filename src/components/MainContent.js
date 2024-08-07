// src/components/MainContent.js
import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { fetchMovies, fetchMusic } from '../api';

const MainContent = () => {
  const [movies, setMovies] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    const getMusic = async () => {
      try {
        const musicData = await fetchMusic();
        setMusic(musicData);
      } catch (error) {
        console.error('Error fetching music:', error);
      }
    };

    getMovies();
    getMusic();
  }, []);

  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h6" component="h3">
            Music Section
          </Typography>
          {music.map((track) => (
            <Typography key={track.id}>{track.title} by {track.artist}</Typography>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h6" component="h3">
            Movies Section
          </Typography>
          {movies.map((movie) => (
            <Typography key={movie.id}>{movie.title}</Typography>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainContent;
