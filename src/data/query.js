import gql from 'graphql-tag'

export const query = gql`
  query {
    getWeather(location: "67202") {
      location {
        city
        country
        currentTime
        region
      }
      current {
        base {
          cloud
          code
          condition
          humidity
          icon
          windCard
        }
        standard {
          feelsLike
          precip
          pres
          temp
          vis
          wind
        }
      }
    }
  }
`
