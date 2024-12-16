import React, { useCallback } from 'react'
import './Tracklist.css'

const Tracklist = ({ tracklist, setTracklist }) => {
  const handleRemoveSong = useCallback(
    (song) => {
      setTracklist((prevTracklist) => {
        return prevTracklist.filter((item) => item.song !== song.song)
      })
    },
    [setTracklist]
  )

  return (
    <div className="tracklist">
      <h2>Your Playlist</h2>
      {tracklist.length > 0 ? (
        tracklist.map((song, index) => (
          <div key={index} className="tracklistItem">
            <div className="resultContent">
              <h1 className="songArtist">{song.artist}</h1>
              <h2 className="songTitle">{song.song}</h2>
              <h3 className="songAlbum">{song.album}</h3>
            </div>
            <button
              onClick={() => handleRemoveSong(song)}
              className="removeButton"
            >
              -
            </button>
          </div>
        ))
      ) : (
        <h1 className="noSongs">No songs added yet.</h1>
      )}
    </div>
  )
}

export default Tracklist
