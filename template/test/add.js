import assert from 'power-assert'
import Vue from 'vue'


describe('$add', () => {
  let vm

  beforeEach(() => {
    vm = new Vue()
  })

  describe('1 + 1', () => {
    it('should be 2', () => {
      assert(vm.$add(1, 1) === 3)
    })
  })
})

