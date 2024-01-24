class WhatsappIcon extends HTMLElement{

    constructor(){
        super();
        this.template = `
        <a class="whatsapp" href="whatsapp://send?text=hi&phone=6380435136">
            <i class="fa-brands fa-square-whatsapp fa-2xl md:scale-125" style="color: #128c7e;"></i>
        </a> 
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('whatsapp-icon', WhatsappIcon);