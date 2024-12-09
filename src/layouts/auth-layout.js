import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: grid;
                grid-template-rows: auto 1fr auto;
                gap: 16px;
            }
            header, footer{
                background: blue;
                padding: 10px;
            }

            main{
                background: green;
                padding: 16px
            }
        `
    ];

    render() {
        return html`
            <header>
            <slot name="header"></slot>
            </header>
            <main>
            <slot name="main"></slot>
            </main>
            <footer>
            <slot name="footer"></slot>
            </footer>
        `;
    }
}
customElements.define('auth-layout', AuthLayout);
