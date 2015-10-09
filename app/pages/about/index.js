'use strict';

import React from 'react';
import {Jumbotron, Fade, ListGroup, ListGroupItem} from 'react-bootstrap';
import Service from '../../services/mainService';

export default React.createClass({

    displayName: 'app/pages/about/index.js',

    getInitialState(){
        return ({
            apiCalled: false,
            apiAwake: false
        })
    },

    componentWillMount(){
        this.setState({apiCalled: true});
        //wake up api, as Heroku mast likely has put it to sleep :(
        new Service()
            .getRequest('https://knett-api.herokuapp.com/wakeup/')
            .then((response) => {
                this.setState({apiAwake: true})
            })
    },

    fadeWakeUpCall(){
        let _this = this;
        setTimeout(function () {
            _this.setState(
                {
                    apiCalled: false
                }
            )
        }, 1500)
    },

    render() {
        return (
            <div>
                <Jumbotron>
                    <h4>
                        Acando React Boilerplate (extended) er en eksempel-applikasjon til bruk internt i Acando i
                        opplæringsøyemed.
                    </h4>
                </Jumbotron>

                <ListGroup>
                    <ListGroupItem bsStyle={this.state.apiAwake?'success':'danger'}>
                        <h4>
                            Authentiserings-api {this.state.apiAwake ? 'svarer, du kan bruke logg-inn eksemplene' : 'sover, vent med å bruke logg-inn eksemplene til APIet har våknet!'}
                            <Fade
                                in={this.state.apiCalled && !this.state.apiAwake}
                                transitionAppear={true}
                                unmountOnExit={true}
                                onEntered={this.fadeWakeUpCall()}>
                                <span> - Wakeup-call sendt!</span>
                            </Fade>
                        </h4>

                    </ListGroupItem>
                </ListGroup>

                <p>Applikasjonen inneholder:</p>
                <ul>
                    <li>Utviklingsverktøy som:
                        <ul>
                            <li>Webpack</li>
                            <li>React-hot-loader</li>
                            <li>Node-Express server</li>
                            <li>Babel</li>
                            <li>Autoprefiksing av css</li>
                        </ul>
                    </li>
                    <li>React; rendering</li>
                    <li>Reflux; dataflyt-arkitetkur</li>
                    <li>{'React-bootstrap; CSS, scaffolding og look&feel'}</li>
                    <li>React-Router; for ruting av sider</li>
                    <li>Eksempelsider:
                        <ul>
                            <li>Hjem - denne siden</li>
                            <li>Enkelt eksempel med GET med SuperAgent - oppslag i en tjeneste som oppretter
                                brukernavn
                            </li>
                            <li>Oppslag i knett.evita.no, les nyhetsfeed og se telefonliste
                                <ul>
                                    <li>Autentiser med cookie (via et eksternt node api)</li>
                                    <li>Autentiser med basic authentication, dette er vanlig login med ditt knett
                                        brukernavn og passord (også via et eksternt ode api)
                                    </li>
                                </ul>
                            </li>
                            <li>Enkelt eksempel som viser pålogging mot Google</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
});