import {
  SET_PLACEHOLDER_SPINNER_ANIMATION
} from '../constants/ActionTypes'

const initialState = {
  animating: true
}

export default function placeholder(state = initialState, action) {
  switch (action.type) {
    case SET_PLACEHOLDER_SPINNER_ANIMATION:
      return {
        animating: action.animate
      }
    default:
      return state
 }
}