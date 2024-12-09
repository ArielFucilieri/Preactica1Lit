import { LitElement, html, css } from 'lit';
import '@dile/dile-button/dile-button.js';
import { Router } from '@vaadin/router';
import '../layouts/auth-layout.js';

export class HomePage extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
        dile-button {
            margin: 20px;
            --dile-button-background-color: #ff4757;
            --dile-button-color: white;
            --dile-button-border-radius: 8px;
        }
    `;

    handleLogout() {
        localStorage.removeItem('authenticated');
        Router.go('/login');
    }

    render() {
        return html`
            <auth-layout>
                <h1 slot="header">Bienvenido al Home</h1>
                <main slot="main">
                    <p>Hola te logeaste correctamente</p>
                    <dile-button @click="${this.handleLogout}">Cerrar sesión</dile-button>
                </main>
                <p slot="footer">Todos los derechos reservados</p>
            </auth-layout>
        `;
    }
}
customElements.define('home-page', HomePage);

