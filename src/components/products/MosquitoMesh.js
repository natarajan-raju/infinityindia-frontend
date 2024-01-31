class MosquitoMesh extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <div class="bg-white">
            <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pleated Mosquito sliding doors</h2>
                    <p class="mt-4 text-gray-500">Sliding doors need the most sophisticated Mosquito Net Solutions. Normal conventional sliding mesh shutter has problems like Gap between 2 shutters & constant maintenance. Pleated Mosquito Insect Screen for Sliding doors has solved the above problems with ease and at a very budget price</p>

                    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">Material</dt>
                        <dd class="mt-2 text-sm text-gray-500">Frame: UPVC & Aluminium <br> Mesh: Durable polyester pleated mesh</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">Dimensions</dt>
                        <dd class="mt-2 text-sm text-gray-500">Available in both Standard & custom size options</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">Color</dt>
                        <dd class="mt-2 text-sm text-gray-500">Custom color options available</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">Durability</dt>
                        <dd class="mt-2 text-sm text-gray-500">Long durable materials with long losting performance and less maintenance</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">Application</dt>
                        <dd class="mt-2 text-sm text-gray-500">Residential homes, apartments, offices, and other spaces requiring insect protectio</dd>
                    </div>
                    <div class="border-t border-gray-200 pt-4">
                        <dt class="font-medium text-gray-900">Installation</dt>
                        <dd class="mt-2 text-sm text-gray-500">Free Installation by experts</dd>
                    </div>
                </dl>
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img src="./public/images/mosquito-mesh/1.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
                <img src="./public/images/mosquito-mesh/2.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
                <img src="./public/images/mosquito-mesh/3.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
                <img src="./public/images/mosquito-mesh/4.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
            </div>
        </div>
    </div>
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('mosquito-mesh',MosquitoMesh);