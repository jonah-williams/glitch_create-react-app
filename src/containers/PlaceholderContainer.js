import { connect } from 'react-redux'
import { animatePlaceholderSpinner } from '../actions'
import Placeholder from '../components/Placeholder'

const mapStateToProps = state => ({
  animating: state.placeholder.animating
})

const mapDispatchToProps = (dispatch) => ({
  toggleAnimation: (animating) => dispatch(animatePlaceholderSpinner(animating))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Placeholder)