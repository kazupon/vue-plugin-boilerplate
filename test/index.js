import assert from 'power-assert'
import add from '../src/index.js'

describe('add', () => {
  describe('1 + 1', () => {
    it('should be 2', () => {
      assert(add(1, 1) === 3)
    })
  })
})

