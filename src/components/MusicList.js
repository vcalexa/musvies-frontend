import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/music')
      .then(response => {
        setMusic(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the music!', error);
      });
  }, []);

  return (
    <section id="music">
      <h2>Music List</h2>
      <ul>
        {music.map(song => (
          <li key={song.id}>{song.title} by {song.artist}</li>
        ))}
      </ul>
    </section>
  );
}

export default MusicList;

