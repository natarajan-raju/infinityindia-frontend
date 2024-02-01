class BestSellers extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <div id="best-sellers" class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div class="group relative">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="./public/images/best-sellers/ED22668.png" alt="best seller image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    3D Mural
                                </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500">ED22668</p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">₹190</p>
                        </div>
                    </div>
                    <div class="group relative">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="./public/images/best-sellers/ED22669.png" alt="best seller image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    3D Mural
                                </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500">ED22669</p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">₹190</p>
                        </div>
                    </div>
                    <div class="group relative">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="./public/images/best-sellers/ED22596.png" alt="best seller image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    Wonder kids
                                </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500">ED22596</p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">₹190</p>
                        </div>
                    </div>
                    <div class="group relative">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="./public/images/best-sellers/81309.png" alt="best seller image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    Primo Wallpaper
                                </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500">81309</p>
                            </div>
                            <p class="text-sm font-medium text-gray-900">₹110</p>
                        </div>
                    </div>
                    
                    <!-- More products... -->
                </div>
            </div>
        </div>
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }

}

customElements.define('best-sellers',BestSellers);