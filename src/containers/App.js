import React, { Component } from 'react'

import { Landing, Layout, Search } from '../components'
import Weather from './Weather'

class App extends Component {
  state = {
    location: '',
    query: '',
    submitted: false
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
  renderLanding = () => <Landing />
  renderSearch = () => (
    <Search
      onChange={this.handleOnChange}
      onSubmit={this.handleOnSubmit}
      query={this.state.query}
    />
  )
  renderWeather = () => (
    <Weather reset={this.handleOnClick} userQuery={this.state.location} />
  )
  render() {
    const { submitted } = this.state
    return (
      <Layout>
        {submitted ? this.renderWeather() : this.renderLanding()}
        {submitted ? null : this.renderSearch()}
      </Layout>
    )
  }
}

export default App
