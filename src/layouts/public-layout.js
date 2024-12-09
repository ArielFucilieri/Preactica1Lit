import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background: yellow;
                width: 100vh;
            }
        `
    ];

    render() {
        return html`
        <div>
        <slot> </slot>
        </div>`;
    }
}
customElements.define('public-layout', PublicLayout);
