class DuneCatalogue extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <section class="catalogue">
            <img class="w-full" src="../public/images/catalogues/dune/intro.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/about.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/1.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/2.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/3.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/4.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/5.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/6.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/7.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/8.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/9.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/10.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/11.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/12.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/13.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/14.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/15.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/16.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/17.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/18.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/19.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/20.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/21.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/22.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/23.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/24.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/25.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/26.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/27.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/28.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/29.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/30.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/31.png" alt="dune">
            <img class="w-full" src="../public/images/catalogues/dune/32.png" alt="dune">
            </section>
            `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('dune-catalogue',DuneCatalogue);