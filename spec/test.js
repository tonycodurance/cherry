import React from 'react'
import App from '../src/client/app'
import { shallow } from 'enzyme'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

test('welcomes the user to React', function () {
  const wrapper = shallow(<App />)

  expect(wrapper.text()).toContain("Hi there!!")
})