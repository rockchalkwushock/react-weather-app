import React from 'react'

const Search = ({ onChange, onSubmit, query }) => (
  <div className="row">
    <form className="col s12" onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            id="search"
            onChange={onChange}
            style={{ borderBottomColor: '#ffffff', color: '#ffffff' }}
            type="text"
            value={query}
          />
          <label style={{ color: '#ffffff' }} htmlFor="search">
            Search by city name, zip code, or airport code
          </label>
        </div>
      </div>
    </form>
  </div>
)

export default Search
