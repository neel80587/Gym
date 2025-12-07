import React from 'react'
import './playlist.css'
import PLAY from '../../assets/logos/spotify.png'

const Playlist = () => {
  return (
    <div className='playlist-container'>
        <div className="playlist-text">
            <h2>Beats for <span className='pink'>gains</span></h2>
            <p>Get pumped up with our <br />
            workout playlist!</p>
        </div>
        <button className='play-btn'><img src={PLAY} alt="play" /> <a href ="https://open.spotify.com/playlist/41PZG18MrSTagagiIaiG4X?si=AMChTJnLS-unzyNQJtn0vg&pi=a-0sinXRwuR9Kd">Play</a></button>
    </div>
  )
}

export default Playlist