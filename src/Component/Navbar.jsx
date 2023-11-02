import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsHonkey</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/" >Business</Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <Link className="nav-link" to="/entaitenment">Entaitenment</Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
