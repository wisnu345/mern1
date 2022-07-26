import React, { Component } from 'react'

import Header from 'parts/Header'
import { withRouter } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    )
  }
}

export default withRouter(LandingPage)
