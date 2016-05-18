import test from 'ava'
import isRoot from '../src'

test('should be root path in Unix', assert => {
  assert.is(isRoot('/'), true)
})

test('should be not root path in Unix', assert => {
  assert.is(isRoot('/x'), false)
})


test('should be root path in Win', assert => {
  assert.is(isRoot('C:/'), true)
})

test('should be not root path in Win', assert => {
  assert.is(isRoot('C:/x'), false)
})
