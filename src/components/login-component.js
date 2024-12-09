import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {
    constructor() {
        super();
        this.initProperties();
    }

    static get properties() {
        return {
            email: { type: String },
            password: { type: String },
        };
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 400px;
            max-width: 100%;
            border: 1px solid #ccc;
            align-items: center;
            background: grey;
            border-radius: 10px;
            padding: 20px;
        }

        input {
            border: 3px solid #ccc;
            background: green;
            border-radius: 10px;
        }
    `;

    handleSubmit(event) {
        event.preventDefault();

        const validEmail = 'admin@gmail.com';
        const validPassword = '1234';

        if (this.email === validEmail && this.password === validPassword) {
            this.dispatchCustomEvent('login-success', { email: this.email });
        } else {
            this.dispatchCustomEvent('login-error', { error: 'Correo o contraseña incorrectos' });
        }

        this.initProperties();
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this[name] = value;
    }

    dispatchCustomEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    initProperties() {
        this.email = '';
        this.password = '';
    }

    render() {
        return html`
            <h1>Login</h1>
            <form @submit="${this.handleSubmit}">
                <label for="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    .value="${this.email}"
                    @input="${this.handleInputChange}"
                />
                <label for="password">Contraseña: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    .value="${this.password}"
                    @input="${this.handleInputChange}"
                />
                <button type="submit">Login</button>
            </form>
        `;
    }
}
customElements.define('login-component', LoginComponent);



