import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return(
                <div class="jumbotron jumbotron-fluid">
                    <div class="container text-center">
                        <h1>¿que deseas aprender?</h1>
                        <p>Aprende sobre programación desde cero, diseño UI/UX y mucho mas con Knowledge DB</p>
                        <i class="fas fa-search"></i>
                        <input class="mt-4" type="text" placeholder="¿Que deseas aprender hoy?"></input>
                        <br></br>
                        <button class="mt-5 btn-lg">Buscar recursos</button>
                    </div>
                </div>
         );
    }
}