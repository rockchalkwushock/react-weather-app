import React from 'react'
import { mount } from 'enzyme'

import { App } from '../App'

const myProps = {
  data: {
    error: false,
    loading: true,
    getWeather: {
      current: {
        base: {
          condition: 'Hot',
          windCard: 'NNW'
        },
        standard: {
          feelsLike: 104,
          precip: 0,
          pres: 0,
          temp: 98.6,
          vis: 10,
          wind: 45
        }
      },
      location: {
        city: 'Wichita',
        country: 'USA',
        currentTime: '2017-11-25 5:54',
        region: 'Kansas'
      }
    }
  }
}

describe('DATA DELIVERY TEST SUITE', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<App {...myProps} />)
  })

  test('1. Should render loading state', () => {
    expect(wrapper.find('h1').text()).toEqual('Loading...')
    expect(wrapper).toMatchSnapshot()
  })
  test('2. Should render error state', () => {
    expect(wrapper.find('h1').text()).toEqual('Loading...')
    wrapper.setProps({
      data: {
        ...myProps.data,
        error: true,
        loading: false
      }
    })
    expect(wrapper.props().data).toHaveProperty('error', true)
    expect(wrapper.props().data).toHaveProperty('loading', false)
    expect(wrapper.find('h1').text()).toEqual('Error...')
    expect(wrapper).toMatchSnapshot()
  })
  test('2. Should render error state', () => {
    expect(wrapper.find('h1').text()).toEqual('Loading...')
    wrapper.setProps({
      data: {
        ...myProps.data,
        loading: false
      }
    })
    expect(wrapper.props().data).toHaveProperty('loading', false)
    expect(
      wrapper
        .find('h2')
        .at(0)
        .text()
    ).toEqual('Wichita, Kansas, USA')
    expect(wrapper).toMatchSnapshot()
  })
})
