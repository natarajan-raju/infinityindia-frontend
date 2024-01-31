class FeatureSection extends HTMLElement {
    constructor(){
        super();
        this.template = `
        <div id="feature-section" class="overflow-hidden bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-lg">
                    <h2 class="text-base font-semibold leading-7 text-indigo-600">Reimagine your space</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Dream space anytime & anywhere!</p>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Discover endless possibilities as your dreams unfold in the canvas of your space with Infinity India's transformative designs and decor solutions.</p>
                    <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">                      
                        <i class="fa-solid fa-house absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"></i>
                        Home makeovers in just 3 hours
                        </dt>
                        <dd class="inline">Say goodbye to the days of lengthy renovations and disruptions as we bring you quick and swift transformations tailored to your style</dd>
                    </div>
                    <div class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                        <i class="fa-solid fa-palette absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"></i>
                        10000+ designs & counting!
                        </dt>
                        <dd class="inline">Explore a diverse range of styles and inspirations to find the perfect design that speaks to your unique taste, ensuring a personalized touch for every corner of your home.</dd>
                    </div>
                    <div class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                        <i class="fa-solid fa-indian-rupee-sign absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"></i>
                        Pocket friendly & Cost effective..
                        </dt>
                        <dd class="inline">Redefine your space on a budget, as we offer stylish solutions and budget-friendly options, ensuring that your home makeover is both stunning and financially sensible.</dd>
                    </div>

                    </dl>
                </div>
                </div>
                <img id="feature-image" src="../public/images/feature-image.jpg" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
            </div>
        </div>
      </div>
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
    }
}

customElements.define('feature-section',FeatureSection);