/* global it describe expect */

import reducer from './Placeholder'
import * as types from '../constants/ActionTypes'

describe('Placeholder reducer', () => {
  it('returns the initial state', () => {
    let expectedState = {
      animating: true
    }
    expect(reducer(undefined, {})).toEqual(expectedState)
  })
  
  describe('SET_PLACEHOLDER_SPINNER_ANIMATION', () => {
    it('updates the animating state', () => {
      let initialState = {
        animating: false
      }
      let action = {
        type: types.SET_PLACEHOLDER_SPINNER_ANIMATION,
        animate: true
      }
      let expectedState = {
        animating: true
      }
      expect(reducer(initialState, action)).toEqual(expectedState)
    })
  })
})