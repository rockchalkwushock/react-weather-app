import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { query } from '../data'
import {
  Button,
  Container,
  CurrentWeather,
  ErrorView,
  ForecastList,
  LoadingView
} from '../components'

const Weather = ({ current, forecast, location, reset, toggle, units }) => {
  const data =
    units === 'standard'
      ? { ...current.base, ...current.standard }
      : { ...current.base, ...current.metric }
  const display = units === 'standard' ? ['F', 'in', 'mph'] : ['C', 'mm', 'kph']
  return (
    <Container>
      <CurrentWeather {...data} {...location} display={display} />
      <Button toggle={toggle} reset={reset} units={units} />
      <ForecastList display={display} forecast={forecast} units={units} />
    </Container>
  )
}

class DataContainer extends Component {
  state = {
    units: 'standard'
  }
  handleOnClick = e => {
    console.log('clicked')
    console.log(this.state.units === 'standard')
    if (this.state.units === 'standard') {
      this.setState(state => ({ ...state, units: 'metric' }))
      return
    }
    this.setState(state => ({ ...state, units: 'standard' }))
  }
  renderData = getWeather => (
    <Weather
      {...getWeather}
      reset={this.props.reset}
      toggle={this.handleOnClick}
      units={this.state.units}
    />
  )
  renderError = error => (
    <ErrorView
      message={error.graphQLErrors[0].message}
      reset={this.props.reset}
    />
  )
  renderLoader = () => <LoadingView />
  render() {
    const { error, getWeather, loading } = this.props.data
    if (error) {
      return this.renderError(error)
    } else if (loading) {
      return this.renderLoader()
    } else {
      return this.renderData(getWeather)
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
