import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">NewsHonkey</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-1">
                                <Link className="nav-link active" aria-current="page" to="/" >Business</Link>
                            </li>
                            <li className="nav-item mx-1 ">
                                <Link className="nav-link" to="/entertainment">Entaitenment</Link>
                            </li>
                            <li className="nav-item mx-1 ">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item mx-1 ">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item mx-1 ">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item mx-1 ">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item mx-1 ">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
