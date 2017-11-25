import React from 'react'

const Search = ({ onChange, onSubmit, query }) => (
  <div className="searchForm">
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" value={query} />
    </form>
  </div>
)

export default Search
