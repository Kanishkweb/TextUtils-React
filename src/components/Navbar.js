import React from 'react'       // shortcut {rfc + tab}
import PropTypes from 'prop-types'   // {impt}
export default function Navbar(props) {
  return (
    <nav className={`navbar-dark navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand mx-4" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
=
            </li>
          </ul> */}

          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <div className={`mx-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
          <div className={`mx-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.navyMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Navy Blue</label>
          </div>
          <div className={`mx-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.purpleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Purple</label>
          </div>
          <div className={`mx-2 form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.forestGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Forest Green</label>
          </div>
        </div>
      </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string
}// 

Navbar.defaultProps = {
  title: 'Text-To-UpperCase',
  abouttext: 'About text here'
}