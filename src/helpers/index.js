/**
 * Mock Objects for Test Suite
 */

const forecastData = {
  base: {
    condition: 'Hot',
    date: '',
    icon: '//cdn.apixu.com/weather/64x64/day/116.png'
  },
  metric: {
    maxTemp: 30,
    minTemp: 28,
    precip: 0
  },
  standard: {
    maxTemp: 110,
    minTemp: 90,
    precip: 0
  }
}

export const getWeather = {
  current: {
    base: {
      condition: 'Hot',
      icon: '//cdn.apixu.com/weather/64x64/day/116.png',
      windCard: 'NNW'
    },
    metric: {
      feelsLike: 30,
      precip: 0,
      temp: 29,
      wind: 22
    },
    standard: {
      feelsLike: 104,
      precip: 0,
      temp: 98.6,
      wind: 45
    }
  },
  forecast: new Array(7).fill(forecastData).map((obj, i) => ({
    ...obj,
    base: { ...obj.base, date: `${new Date().getDate() + i}` }
  })),
  location: {
    city: 'Wichita',
    country: 'USA',
    currentTime: '2017-11-25 5:54',
    region: 'Kansas'
  }
}
