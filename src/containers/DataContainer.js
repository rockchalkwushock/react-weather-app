import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import { query } from '../data'
import { ErrorView, LoadingView, Weather } from '../components'

class DataContainer extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired,
    userQuery: PropTypes.string.isRequired
  }
  state = {
    units: 'standard'
  }
  handleOnClick = e => {
    if (this.state.units === 'standard') {
      this.setState(state => ({ ...state, units: 'metric' }))
      return
    }
    this.setState(state => ({ ...state, units: 'standard' }))
  }
  render() {
    const { error, getWeather, loading } = this.props.data
    if (error) {
      return (
        <ErrorView
          message={error.graphQLErrors[0].message}
          reset={this.props.reset}
        />
      )
    } else if (loading) {
      return <LoadingView />
    } else {
      return (
        <Weather
          {...getWeather}
          reset={this.props.reset}
          toggle={this.handleOnClick}
          units={this.state.units}
        />
      )
    }
  }
}

export default graphql(query, {
  options: props => ({
    variables: {
      location: props.userQuery
    }
  })
})(DataContainer)
