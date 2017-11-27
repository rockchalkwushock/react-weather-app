import gql from 'graphql-tag'

export const query = gql`
  query getWeather($location: String!) {
    getWeather(location: $location) {
      current {
        base {
          condition
          icon
          windCard
        }
        metric {
          feelsLike
          precip
          temp
          wind
        }
        standard {
          feelsLike
          precip
          temp
          wind
        }
      }
      forecast {
        base {
          condition
          date
          icon
        }
        metric {
          maxTemp
          minTemp
          precip
        }
        standard {
          maxTemp
          minTemp
          precip
        }
      }
      location {
        city
        country
        currentTime
        region
      }
    }
  }
`
