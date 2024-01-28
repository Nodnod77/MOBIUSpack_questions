class CustomMessageElement extends HTMLElement {
    constructor() {
        super();
        const messageSpan = document.createElement('span');
        messageSpan.textContent = '';

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(messageSpan);

        const welcomeButton = document.querySelector('#welcomeButton');
        welcomeButton.addEventListener('click', () => this.handleWelcomeButtonClick());
    }

    handleWelcomeButtonClick() {
        const name = document.getElementById('name').value;
        const messageSpan = this.shadowRoot.querySelector('span');
        if (!name) {
            messageSpan.textContent = "Veuillez rentrer un nom";
            return;
        }
        messageSpan.textContent = `Bienvenue ${name}`;
    }
}

customElements.define('custom-element', CustomMessageElement);
