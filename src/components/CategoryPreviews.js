class CategoryPreviews extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div id="category" class="bg-gray-100 section">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
      
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="../public/images/wallpaper.jpg" alt="Wallpapers" class="h-full w-full object-cover object-center">
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Wallpapers
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Customized wallpapers for your bedroom & living room</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="../public/images/mural.jpg" alt="wallmurals" class="h-full w-full object-cover object-left">
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Wall Murals
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Visually striking digitally printed Artwork</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img src="../public/images/mosquitomesh.jpg" alt="mosquito mesh" class="h-full w-full object-cover object-center">
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Mosquito mesh slider doors
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Breeze in, Mosquitoes out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    }
}

customElements.define('category-previews',CategoryPreviews);