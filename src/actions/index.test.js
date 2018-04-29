/* global it describe expect */

import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('animatePlaceholderSpinner action creator', () => {
  it('creates a SET_PLACEHOLDER_SPINNER_ANIMATION action', () => {
    let action = {
      type: types.SET_PLACEHOLDER_SPINNER_ANIMATION,
      animate: true
    }
    expect(actions.animatePlaceholderSpinner(true)).toEqual(action)
  })
})