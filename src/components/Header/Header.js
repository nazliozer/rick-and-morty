import React, { Component } from 'react'
import './Header.scss'
import logo from "../../assets/images/Logo.png"

export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header static w-full p-4 grid justify-items-center flex items-center ">
          <img alt='logo' src={logo}></img>
        </div>
      </>
    );
  }
}
