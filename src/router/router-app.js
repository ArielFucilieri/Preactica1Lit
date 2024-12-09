import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import '../pages/login-page.js';
import '../pages/home-page.js';

export class RouterApp extends LitElement {
    firstUpdated() {
        const router = new Router(this.shadowRoot.querySelector('#outlet'));
        router.setRoutes([
            {
                path: '/home',
                component: 'home-page',
                action: () => {if (!localStorage.getItem('authenticated')) {
                        Router.go('/login');
                    }
                },
            },
            { path: '/login', component: 'login-page' },
            { path: '(.*)', redirect: '/login' },
        ]);
    }

    render() {
        return html`
            <div id="outlet"></div>
        `;
    }
}
customElements.define('router-app', RouterApp);
