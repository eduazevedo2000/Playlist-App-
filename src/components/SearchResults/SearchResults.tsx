import React from 'react'
import './SearchResults.css'
import Track from '../Track/Track'

const SearchResults = (props) => {
  const onAdd = props.onAdd

  const found = props.found

  if (found === false) {
    return (
      <div className="searchResults">
        <h1 className="noResult">No results found</h1>
      </div>
    )
  }

  const results = props.results || []

  return (
    <>
      <div className="searchResults">
        {results.map((result, index) => (
          <div key={index} className="resultItem">
            <div className="resultContent">
              <h1 className="songArtist">{result.artist}</h1>
              <h2 className="songTitle">{result.song}</h2>
              <h3 className="songAlbum">{result.album}</h3>
            </div>
            <button
              className="addButton"
              onClick={() => {
                if (onAdd) onAdd(result)
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchResults
