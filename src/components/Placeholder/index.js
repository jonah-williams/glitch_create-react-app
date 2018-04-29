import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './Placeholder.css';

const Placeholder = ({ animating, toggleAnimation }) => (
  <div className="Placeholder">
    <div className="Placeholder-header">
      <img src={logo} className={"Placeholder-logo" + (animating ? ' animating' : '')} alt="logo" />
      <h2>Welcome to React</h2>
      <h3>Powered by Redux</h3>
      <button onClick={() => toggleAnimation(!animating)}>
        toggle animation
      </button>
    </div>
  </div>
)

Placeholder.propTypes = {
  animating: PropTypes.bool.isRequired,
  toggleAnimation: PropTypes.func.isRequired
}

export default Placeholder