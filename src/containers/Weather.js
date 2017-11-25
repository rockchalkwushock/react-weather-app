import React from 'react'
import { graphql } from 'react-apollo'

import { query } from '../data'
import {
  CurrentWeather,
  ErrorView,
  ForecastList,
  LoadingView
} from '../components'

export const Weather = ({ data, units }) => {
  const { error, getWeather, loading } = data
  console.log(error)
  let view
  if (error) {
    view = <ErrorView message={error.graphQLErrors[0].message} />
  } else if (loading) {
    view = <LoadingView />
  } else {
    const { current, forecast } = getWeather
    view = (
      <div>
        <CurrentWeather {...current} toggle={units} />
        <ForecastList forecast={forecast} toggle={units} />
      </div>
    )
  }
  return view
}

export default graphql(query, {
  options: props => ({
    variables: {
      location: props.userQuery
    }
  })
})(Weather)
