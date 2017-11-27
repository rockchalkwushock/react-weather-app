import React, { Component } from 'react'

import { Landing, Layout, Logo, Search } from '../components'
import DataContainer from './DataContainer'

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
    /**
     * NOTE
     * Must persist the query to `location`
     * since resetting `query` will cause graphql
     * to receive no `variable`.
     */
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
    <DataContainer reset={this.handleOnClick} userQuery={this.state.location} />
  )
  render() {
    const { submitted } = this.state
    return (
      <Layout>
        {submitted ? this.renderWeather() : this.renderLanding()}
        {submitted ? null : this.renderSearch()}
        {submitted ? null : <Logo />}
      </Layout>
    )
  }
}

export default App
