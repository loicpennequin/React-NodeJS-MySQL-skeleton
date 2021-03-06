import * as React from 'react';
import * as _ from 'lodash';
import AuthService from '../../services/Authservice.js';
export default function () {
    function onClick1() {
        AuthService.logout();
    }
    return React.createElement('div', {}, React.createElement('header', { 'className': 'header is-big is-secondary txt-white' }, React.createElement('h1', { 'className': 'heading is-6' }, 'Welcome, ', this.props.activeUser.username, ' !')), React.createElement('main', { 'className': 'section' }, React.createElement('button', {
        'className': 'button is-accent is-rounded',
        'onClick': onClick1.bind(this)
    }, 'LOGOUT')));
}