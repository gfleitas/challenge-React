import React, { Component } from 'react';
import logo from './img/study.png'

export default class NavBar extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top mr-2" alt=""></img>
                        <b> KnowledgeDB </b>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorias
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Frontend</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Backend</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Android</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">UI/UX Diseño</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">IOS</a>
                        </div>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Recursos</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Q&A</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Acerca de</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
         );
    }
}