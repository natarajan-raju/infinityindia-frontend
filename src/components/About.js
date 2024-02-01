class AboutUs extends HTMLElement{

    constructor(){
        super();
        this.template = `
        <section class="bg-white">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Infinity India: Where Creativity Meets Innovation</h2>
                    <p class="mb-4">At Infinity India, we've mastered the art of transforming spaces with our room wallpapers, mosquito mesh sliding doors, 3D murals, toughened glass works, and frame paints. As a team of strategists, designers, and developers, we're innovators and problem solvers, offering personalized solutions at the speed you need. Small enough to be swift, yet big enough to deliver your envisioned scope, we're here to redefine your living experience with seamless elegance. Welcome to Infinity India – where your vision finds its perfect expression!</p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img class="w-full rounded-lg" src="./public/images/about/1.jpg" alt="office content 1">
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="./public/images/about/2.jpg" alt="office content 2">
                </div>
            </div>
        </section>
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('about-section',AboutUs);