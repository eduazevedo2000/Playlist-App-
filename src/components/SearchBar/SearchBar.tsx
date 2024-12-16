import React, { useCallback, useState } from 'react'
import './SearchBar.css'
import tracks from '../../data'
import SearchResults from '../SearchResults/SearchResults'
import Tracklist from '../Tracklist/Tracklist'
//import SearchResults from '../SearchResults/SearchResults'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [songs, setSongs] = useState([])
  const [found, setFound] = useState(null)
  const [tracklist, setTracklist] = useState([])

  function handleInput(e) {
    e.preventDefault()

    setInput(e.target.value)
  }

  function handleResult() {
    let results = []
    tracks.forEach((element) => {
      if (
        input === element.name ||
        input === element.artist ||
        input === element.album
      ) {
        const songInfo = {
          song: element.name,
          artist: element.artist,
          album: element.album,
        }
        results.push(songInfo)
      }
    })

    if (results.length > 0) {
      setSongs(results)
      setFound(true)
    } else {
      setSongs([])
      setFound(false)
    }
  }

  const handleAddSong = useCallback((song) => {
    setTracklist((prevTracklist) => {
      if (!prevTracklist.some((item) => item.song === song.song)) {
        return [...prevTracklist, song]
      }
      return prevTracklist
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!input) {
      alert('Please write a music`s name or artist')
      return
    }
    setLoading(true)
    console.log(`searching for ${input}`)
    setTimeout(() => {
      setLoading(false)
      handleResult()
    }, 2000)
  }

  return (
    <>
      <div id="searchBar">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            name="searchInput"
            value={input}
            onChange={handleInput}
            placeholder="Search a music / artist"
            className="searchInput"
          />
          <button type="submit" className="searchButton" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
      <div className="songsAndPlaylist">
        <SearchResults results={songs} found={found} onAdd={handleAddSong} />
        <Tracklist tracklist={tracklist} setTracklist={setTracklist} />
      </div>
    </>
  )
}

export default SearchBar
