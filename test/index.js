import assert from 'power-assert'
import Vue from 'vue'
import plugin from '../src/index.js'

describe('$add', () => {
  let vm

  before(() => {
    Vue.use(plugin)
  })

  beforeEach(() => {
    vm = new Vue()
  })

  describe('1 + 1', () => {
    it('should be 2', () => {
      assert(vm.$add(1, 1) === 3)
    })
  })
})

