import React, { Component } from "react";
import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer relative w-full p-10 grid justify-items-center flex items-center mt-12">
          <div>© 2022 Onedio. All rights reserved</div>
        </div>
      </>
    );
  }
}
