import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

describe('Stupid Test', () => {
  test('should behave...', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toEqual('Hello World')
    expect(wrapper).toMatchSnapshot()
  })
})
