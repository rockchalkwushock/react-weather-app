import React from 'react'
import { mount } from 'enzyme'

import App from '../App'

describe('Container: <App />', () => {
  let input
  let _state
  let wrapper
  beforeEach(() => {
    wrapper = mount(<App />)
    input = wrapper.find('input')
    _state = wrapper.state()
  })

  test('1. Should render without exploding', () => {
    expect(wrapper.state('location')).toEqual('')
    expect(wrapper.state('query')).toEqual('')
    expect(wrapper.state('submitted')).toEqual(false)
  })
  test('2. Should update state onChange event', () => {
    input.simulate('change', { target: { value: 'Mos' } }) // Very nice, enzyme, very nice ;-)
    wrapper.update()
    expect(wrapper.state('query')).toEqual('Mos')
  })
  test('3. Should update state onClick event', () => {
    wrapper.setState({
      ..._state,
      location: 'Moscow'
    })
    _state = wrapper.state()
    expect(_state.location).toEqual('Moscow')
    wrapper.instance().handleOnClick()
    _state = wrapper.state()
    expect(_state.location).toEqual('')
  })
})
