import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
    static get properties() {
        return {
            type: { type: String },
            message: { type: String },
        };
    }

    static styles = css`
        :host {
            display: block;
            padding: 8px;
            margin: 8px 0px;
            border-radius: 4px;
        }
        .alert {
            border-radius: 8px;
            padding: 8px;
            text-align: center;
            color: #fff;
        }
        .error {
            background: red;
        }
        .success {
            background: green;
        }
    `;

    render() {
        return html`
            <div class="alert ${this.type}">${this.message}</div>
        `;
    }
}
customElements.define('alert-component', AlertComponent);

