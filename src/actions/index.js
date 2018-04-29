import * as types from '../constants/ActionTypes'

export const animatePlaceholderSpinner = animate => ({
  type: types.SET_PLACEHOLDER_SPINNER_ANIMATION,
  animate
})