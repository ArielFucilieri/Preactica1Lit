export const AuthMixin = (superclass) =>
    class extends superclass {
        constructor() {
            super();
            this.isAuthenticated = this.checkAuthentication();
        }

        checkAuthentication() {
            return localStorage.getItem('authenticated') === 'true';
        }

        login() {
            localStorage.setItem('authenticated', 'true');
        }

        logout() {
            localStorage.removeItem('authenticated');
        }
    };
