import React, { Component } from "react"
import { Helmet } from "react-helmet"
import {WOW} from "wowjs";
class External extends Component {
  componentDidMount() {
    const wow = new WOW({
        offset: 100,
        mobile: false,
        live: false
    })
    wow.init();
  }
  render(props) {
    return (
      <React.Fragment>
        <Helmet>
          
        </Helmet>
      </React.Fragment>
    )
  }
}

export default External;