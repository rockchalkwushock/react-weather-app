import React, { Component } from 'react'

import { Search } from '../components'
import Weather from './Weather'

class App extends Component {
  state = {
    location: '',
    query: '',
    submitted: false,
    units: 'standard'
  }
  handleOnChange = e => {
    const query = e.target.value
    this.setState(state => ({ ...state, query }))
  }
  handleOnClick = e => {
    this.setState(state => ({ ...state, location: '', submitted: false }))
  }
  handleOnSubmit = e => {
    e.preventDefault()
    this.setState(state => ({
      ...state,
      location: state.query,
      query: '',
      submitted: true
    }))
  }
  renderHome = () => <h1>Home View</h1>
  renderSearch = () => (
    <Search
      onChange={this.handleOnChange}
      onSubmit={this.handleOnSubmit}
      query={this.state.query}
    />
  )
  renderWeather = () => (
    <Weather units={this.state.units} userQuery={this.state.location} />
  )
  render() {
    const { submitted } = this.state
    return (
      <div className="application">
        {submitted ? null : this.renderSearch()}
        <div className="view">
          {submitted ? this.renderWeather() : this.renderHome()}
        </div>
      </div>
    )
  }
}

export default App
