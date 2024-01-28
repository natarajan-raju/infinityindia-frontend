class PrimoCatalogue extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <section class="catalogue">
            <img class="w-full" src="../public/images/catalogues/primo/intro.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/1.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/2.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/3.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/4.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/5.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/6.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/7.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/8.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/9.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/10.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/11.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/12.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/13.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/14.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/15.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/16.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/17.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/18.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/19.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/20.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/21.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/22.png" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/23.png" alt="primo">
            </section>
            `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('primo-catalogue',PrimoCatalogue);