import * as mocha from 'mocha'
import assert from 'power-assert'
import { mount } from '@vue/test-utils'

const MyComp = {
  name: 'my-comp',
  template: `
    <p>add: $add(1, 1)</p>
  `
}

describe('$add', () => {
  describe('1 + 1', () => {
    describe('with mount', () => {
      it('should be 2', () => {
        const wrapper = mount(MyComp)
        assert(wrapper.html(), '<p>add: 2</p>')
      })
    })
  })
})
