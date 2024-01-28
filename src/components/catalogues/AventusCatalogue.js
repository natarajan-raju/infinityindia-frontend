class AventusCatalogue extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <section class="catalogue">
            <img class="w-full" src="../public/images/catalogues/aventus/intro.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/about.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/1.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/2.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/3.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/4.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/5.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/6.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/7.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/8.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/9.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/10.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/11.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/12.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/13.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/14.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/15.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/16.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/17.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/18.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/19.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/20.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/21.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/22.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/23.png" alt="aventus">
            <img class="w-full" src="../public/images/catalogues/aventus/24.png" alt="aventus">
            </section>
            `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('aventus-catalogue',AventusCatalogue);