class PrimoCatalogue extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <section class="catalogue">
            <img class="w-full" src="../public/images/catalogues/primo/intro.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/1.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/2.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/3.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/4.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/5.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/6.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/7.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/8.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/9.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/10.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/11.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/12.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/13.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/14.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/15.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/16.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/17.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/18.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/19.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/20.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/21.jpg" alt="primo">
            <img class="w-full" src="../public/images/catalogues/primo/22.jpg" alt="primo">
            </section>
            `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('primo-catalogue',PrimoCatalogue);