import React from 'react'
import { mount } from 'enzyme'

import { DataContainer } from '../DataContainer'
import { getWeather } from '../../helpers'

const initialProps = {
  data: {
    error: null,
    loading: true
  },
  reset: () => {},
  userQuery: '67202'
}

describe('Container: <DataContainer />', () => {
  let _props
  let _state
  let wrapper
  beforeEach(() => {
    wrapper = mount(<DataContainer {...initialProps} />)
    _props = wrapper.props()
    _state = wrapper.state()
  })
  test('1. Should render with declared props & container state', () => {
    expect(_state).toHaveProperty('units', 'standard')
    expect(_props).toHaveProperty('data')
    expect(_props).toHaveProperty('reset')
    expect(_props).toHaveProperty('userQuery', '67202')
  })
  test('2. Should render without exploding: Error State', () => {
    wrapper.setProps({
      data: {
        error: {
          graphQLErrors: [{ message: 'Oops I did it again!' }]
        },
        loading: false
      }
    })
    _props = wrapper.props()
    const arr = wrapper.props().data.error.graphQLErrors
    expect(arr[0]).toHaveProperty('message', 'Oops I did it again!')
    expect(_props.data).toHaveProperty('loading', false)
  })
  test('3. Should render without exploding: Loading State', () => {
    expect(_props.data).toHaveProperty('loading', true)
  })
  test('4. Should render without exploding: Success State', () => {
    wrapper.setProps({
      data: {
        error: null,
        getWeather: { ...getWeather },
        loading: false
      }
    })
    _props = wrapper.props()
    expect(_props.data).toHaveProperty('loading', false)
    expect(_props.data.getWeather).toHaveProperty('current')
    expect(_props.data.getWeather).toHaveProperty('forecast')
    expect(_props.data.getWeather).toHaveProperty('location')
    expect(_props.data.getWeather.forecast).toHaveLength(7)
  })
  test('5. Should toggle state on click event', () => {
    expect(_state.units).toEqual('standard')
    wrapper.setProps({
      data: {
        error: null,
        getWeather: { ...getWeather },
        loading: false
      }
    })
    wrapper
      .find('a')
      .first()
      .simulate('click')
    _state = wrapper.state()
    expect(_state.units).toEqual('metric')
    wrapper
      .find('a')
      .first()
      .simulate('click')
    _state = wrapper.state()
    expect(_state.units).toEqual('standard')
  })
})
