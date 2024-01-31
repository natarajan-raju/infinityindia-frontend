class WhatsappIcon extends HTMLElement{

    constructor(){
        super();
        this.template = `
        <a class="whatsapp" href="whatsapp://send?text=Hi I'm interested in your services. Please share more details&phone=6369156261">
            <i class="fa-brands fa-square-whatsapp fa-2xl md:scale-125" style="color: #128c7e;"></i>
            <img src="./public/images/WhatsAppButtonGreenLarge.png" alt="Whatsapp">
        </a> 
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('whatsapp-icon', WhatsappIcon);