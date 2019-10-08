import React, { Component } from 'react';

//IMAGENES
import reactS from './reactS.png'
import angularS from './img/angularS.png'
import reactHooksS from './img/reactHooksS.png'
import angularJsS from './img/angularJsS.png'
import otlinS from './img/otlinS.png'
import vueS from './img/vueS.png'

export default class Cards extends Component {
    render() {
        return(
            <div class="container">
                <h5 class="rdtitle">Recursos destacados</h5>
                <div class="row">
                    <div class="cards">
                        <div class="container">              
                            <div class="card">
                                <img src={reactS} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="mt-2">Aprende React desde cero</h5>
                                    <a href="#" class="btn-primary p-1">Ver el curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="container">              
                            <div class="card">
                                <img src={angularS} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="mt-2">Aprende Angular desde cero</h5>
                                    <a href="#" class="btn-primary p-1">Ver el curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="container">              
                            <div class="card">
                                <img src={reactHooksS} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="mt-2">Aprende nuevos Hooks desde cero</h5>
                                    <a href="#" class="btn-primary p-1">Ver el curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="container">              
                            <div class="card">
                                <img src={angularJsS} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="mt-2">Curso basico de Angular</h5>
                                    <a href="#" class="btn-primary p-1">Ver el curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="container">              
                            <div class="card">
                                <img src={otlinS} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="mt-2">Aprende Kotlin desde cero</h5>
                                    <a href="#" class="btn-primary p-1">Ver el curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="container">              
                            <div class="card">
                                <img src={vueS} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="mt-2">Curso de Vue.js desde cero</h5>
                                    <a href="#" class="btn-primary p-1">Ver el curso</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="mt-5 btn-lg">Ver más</button>
            </div>
         );
    }
}