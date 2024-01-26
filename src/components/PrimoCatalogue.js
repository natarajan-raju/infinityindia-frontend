class PrimoCatalogue extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <section class="catalogue">
            <img src="../public/images/catalogues/primo/1.jpg" alt="primo">
        </section>
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('primo-catalogue',PrimoCatalogue);