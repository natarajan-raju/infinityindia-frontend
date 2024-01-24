class Testimonials extends HTMLElement {

    constructor(){
        super();
        this.template = `
        <section class="relative isolate overflow-hidden mx-auto bg-white px-6 py-24 sm:py-32 lg:px-8 scroller" data-speed="medium">            
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 mb-10 sm:text-4xl">What do our clients say?</h2>            
            </div>
            <div class="scroller__inner">
                <div class="testimonial mx-auto max-w-2xl lg:max-w-4xl">
                    <div class="mx-auto flex w-full justify-center items-center">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Judith Black</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div class="testimonial mx-auto max-w-2xl lg:max-w-4xl">
                    <div class="mx-auto flex w-full justify-center items-center">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Judith Black</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>            
        </section>
        `;

    }

    connectedCallback(){
        this.innerHTML = this.template;
        // If a user hasn't opted in for recuded motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
  
    function addAnimation() {
        const scrollers = document.querySelectorAll(".scroller");        
        scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
    
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
    
        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
        });
    }
        
        
    }


}

customElements.define('testimonials-section',Testimonials);