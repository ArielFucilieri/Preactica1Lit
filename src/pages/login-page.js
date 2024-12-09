import { LitElement, html, css, nothing } from 'lit';
import { Router } from '@vaadin/router';
import { AuthMixin } from '../mixin/auth-mixin.js';
import '../components/alert-component.js';
import '../components/login-component.js';
import '../layouts/public-layout.js';

class LoginPage extends AuthMixin(LitElement) {

    constructor() {
        super();
        this.alertType = '';
        this.alertMessage = '';
    }

    static get properties() {
        return {
            alertType: { type: String },
            alertMessage: { type: String },
        };
    }

    handleLoginSuccess(event) {
        this.login();
        Router.go('/home');
    }

    handleLoginError(event) {
        const { error } = event.detail || {};
        this.alertType = 'error';
        this.alertMessage = `Error: ${error || 'Credenciales incorrectas'}`;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('login-success', this.handleLoginSuccess);
        this.addEventListener('login-error', this.handleLoginError);
    }

    disconnectedCallback() {
        this.removeEventListener('login-success', this.handleLoginSuccess);
        this.removeEventListener('login-error', this.handleLoginError);
        super.disconnectedCallback();
    }

    render() {
        return html`
            <public-layout>
                <login-component></login-component>
                ${this.alertType
                    ? html`<alert-component
                          .type="${this.alertType}"
                          .message="${this.alertMessage}">
                      </alert-component>`
                    : nothing}
            </public-layout>
        `;
    }
}
customElements.define('login-page', LoginPage);


