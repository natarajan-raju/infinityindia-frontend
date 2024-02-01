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
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                    </div>
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Infinity India has truly redefined my living space! I'm Priya from Chennai, and the room wallpapers they provided have added a touch of elegance and charm to my home. The perfect blend of aesthetics and functionality makes Infinity India my go-to for home decor.”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-20 w-20 rounded-full" src="./public/images/testimonials/priya.jpg" alt="Priya">
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Priya Manoharan</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">Pallavaram, Chennai</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div class="testimonial mx-auto max-w-2xl lg:max-w-4xl">
                    <div class="mx-auto flex w-full justify-center items-center">
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                    </div>
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“Living in Coimbatore, I needed reliable mosquito mesh sliding doors, and Infinity India delivered beyond my expectations. The doors not only keep pests out but also add a modern touch to my home. The prompt and efficient service from the team made the entire process a breeze..”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-20 w-20 rounded-full" src="./public/images/testimonials/karthick.jpg" alt="Karthick">
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Karthick Jeyaram</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">Peelamedu, Coimbatore</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div class="testimonial mx-auto max-w-2xl lg:max-w-4xl">
                    <div class="mx-auto flex w-full justify-center items-center">
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star text-blue-900"></i>
                        <i class="fa-solid fa-star-half text-blue-800"></i>
                    </div>
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“I'm Suresh from Madurai, and I wanted something truly unique for my home. Infinity India's 3D murals have turned my walls into a captivating masterpiece. Their commitment to innovation and creativity sets them apart. I highly recommend Infinity India for those seeking sophistication in home decor”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-20 w-20 rounded-full" src="./public/images/testimonials/suresh.jpg" alt="Suresh">
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Suresh Rathnasamy</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">Doak Nagar, Madurai</div>
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