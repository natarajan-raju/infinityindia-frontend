class Wallpapers extends HTMLElement{

    constructor(){
        super();
        this.template = `
        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="./public/images/wallpaper-landing.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Wallpapers</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">Tired of Boring space? Transform your room into your Dream space with our premium wallpaper of your choice!</p>
                </div>
                <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a href="primo.html">Nature inspired <span aria-hidden="true">&rarr;</span></a>
                        <a href="aventus.html">Elite collection <span aria-hidden="true">&rarr;</span></a>
                        <a href="dune.html">Eco premium <span aria-hidden="true">&rarr;</span></a>
                        <a href="wonderwalls_1.html">Kids collection <span aria-hidden="true">&rarr;</span></a>
                    </div>
                <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">Cities covered</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">32</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">Interior designs</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">10k+</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">Hours fastest installation</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">2</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                        <dt class="text-base leading-7 text-gray-300">years durable</dt>
                        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">7</dd>
                    </div>
                </dl>
                </div>
            </div>
        </div>
        
        <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 class="text-2xl font-bold text-gray-900">Premium Wallpapers Catalogue</h2>
                    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div class="group relative">
                            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="./public/images/catalogues/primo/intro.png" alt="Primo premium wallpaper" class="h-full w-full object-cover object-center">
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a href="primo.html">
                                    <span class="absolute inset-0"></span>
                                    Inspired by the beauty of nature
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">Primo</p>
                        </div>
                        <div class="group relative">
                            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="./public/images/catalogues/aventus/intro.png" alt="Aventus premium wallpaper" class="h-full w-full object-cover object-center">
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a href="aventus.html">
                                    <span class="absolute inset-0"></span>
                                    Fabulous wallcovering for every room
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">Aventus</p>
                        </div>
                    <div class="group relative">
                    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img src="./public/images/catalogues/dune/intro.png" alt="Dune premium wallpapers" class="h-full w-full object-cover object-center">
                    </div>
                    <h3 class="mt-6 text-sm text-gray-500">
                        <a href="dune.html">
                        <span class="absolute inset-0"></span>
                        Eco-premium silk wall covering
                        </a>
                    </h3>
                    <p class="text-base font-semibold text-gray-900">Dune</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div id="kidsWallpaperSection">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 class="text-2xl font-bold text-gray-900">Kids Wallpapers Catalogue</h2>
                    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        
                        <div class="group relative">
                            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img src="./public/images/catalogues/wonder_wall/intro.png" alt="Wonder wall kids wallpaper" class="h-full w-full object-cover object-center">
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a href="wonderwalls_1.html">
                                    <span class="absolute inset-0"></span>
                                    Exclusive creative walls for your super star kiddos
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">Wonder Walls</p>
                        </div>
                    <div class="group relative">
                    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img src="./public/images/catalogues/little_love/intro.png" alt="Little love kids wallpapers" class="h-full w-full object-cover object-center">
                    </div>
                    <h3 class="mt-6 text-sm text-gray-500">
                        <a href="littlelove_1.html">
                        <span class="absolute inset-0"></span>
                        Conjure up a fantasy world for Children
                        </a>
                    </h3>
                    <p class="text-base font-semibold text-gray-900">Little Love</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('wallpapers-listing',Wallpapers);