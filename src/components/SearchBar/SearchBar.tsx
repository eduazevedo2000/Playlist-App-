import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  function handleInput(e) {
    e.preventDefault()

    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!input) {
      alert('Please write a music`s name or artist')
      return
    }
    setLoading(true)
    setTimeout(() => {
      console.log(`searching for ${input}`)
      setLoading(false)
      setInput('')
    }, 2000)
  }

  console.log(input)

  return (
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
  )
}

export default SearchBar
