class HeroSection extends HTMLElement {

    constructor(){
        super();
        this.body = document.querySelector('body');
        this.navbar = document.querySelector('nav-bar');
        this.url = "http://localhost:1337";
            
                  
        this.template = `
        <div class="section hero relative overflow-hidden bg-white">        
          <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div class="sm:max-w-lg">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Elevate Your Space with Infinity India</h1>
                <p class="mt-4 text-xl text-gray-500">Discover personalized interiors and Elevate your surroundings with Infinity India's tailored design solutions..</p>
              </div>
              <div>
                <div class="mt-10">
                  <!-- Decorative image grid -->
                  <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div class="flex items-center space-x-6 lg:space-x-8">
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img src="../public/images/hero-image (1).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="../public/images/hero-image (2).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="../public/images/hero-image (4).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="../public/images/hero-image (3).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="h-64 w-44 rounded-lg overflow-hidden">
                          <img src="../public/images/hero-image (5).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="../public/images/hero-image (6).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="../public/images/hero-image (7).jpg" alt="wallpaper" class="h-full w-full object-cover object-center">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <a id="shop-btn" href="#category" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    }

    connectedCallback(){      
      this.innerHTML= `
      <div class="carousel-container w-full md:w-9/12 lg:relative overflow-hidden pb-10">
        <div class="carousel-wrapper flex">
          <!-- Carousel items go here -->
          
          
        </div>
      </div>
      `;
      
      this.loadHeroImages();
      
      
        
    }

    async loadHeroImages(){
      let offerImagesUrl = [];
      try {      
      const { data } = await fetch(`${this.url}/api/hero-section?populate=*`)
                      .then((response) => response.json())
                      .then((data) => {return data})
                      .catch(e => console.log(e));      
      offerImagesUrl = data.attributes.hero.data.map(obj => {
          const { attributes } = obj;
          const url = `${this.url}` + attributes.url;          
          return url;  
      });
    } catch(e){
      console.log(e);
    }
      if(offerImagesUrl.length > 0){
        this.loadCarousel(offerImagesUrl);
      } else {
        
        this.innerHTML = this.template;
        console.log(this.template);
      }
      
    }    
         
    

    loadCarousel(imageUrlArray){
      const carouselContainer = document.querySelector('.carousel-container');
      const carouselWrapper = document.querySelector('.carousel-wrapper');
      imageUrlArray.forEach((imageUrl) => {
        
        const img = this.createHTMLElementWithAttributes('img', 'h-full w-full object-cover object-center',{
          "src": imageUrl,
          "alt": "latest-offers"
        });
        let carouselItem = this.createHTMLElement('div', 'carousel-item w-full');
        carouselItem.appendChild(img);        
        carouselWrapper.appendChild(carouselItem);        
      });
    
      let itemWidth = document.querySelector('.carousel-item').offsetWidth;
      let currentIndex = 0;
  
      // Function to move the carousel to the next index
      function moveToNextIndex() {
        currentIndex = (currentIndex + 1) % carouselWrapper.children.length;
        const newPosition = -currentIndex * itemWidth;
        carouselWrapper.style.transform = `translateX(${newPosition}px)`;
      }

      function moveToPrevIndex() {
        currentIndex = (currentIndex - 1 + carouselWrapper.children.length) % carouselWrapper.children.length;
        const newPosition = -currentIndex * itemWidth;
        carouselWrapper.style.transform = `translateX(${newPosition}px)`;
      }
  
      // Set interval to automatically move to the next item every 3 seconds (adjust as needed)
      let intervalId = setInterval(moveToNextIndex, 3000);
  
      // Stop the automatic slider when the mouse enters the carousel area
      carouselWrapper.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
      });
  
      // Resume the automatic slider when the mouse leaves the carousel area
      carouselWrapper.addEventListener('mouseleave', function () {
        intervalId = setInterval(moveToNextIndex, 3000);
      });
      
      // Update itemWidth on window resize
      window.addEventListener('resize', function(){
        itemWidth = document.querySelector('.carousel-item').offsetWidth;
      const newPosition = -currentIndex * itemWidth;
      carouselWrapper.style.transform = `translateX(${newPosition}px)`;
      });

      const prevBtn = this.createHTMLElement('button','carousel-btn prev-btn');
      prevBtn.innerHTML = '<i class="fa-solid fa-circle-chevron-left fa-xl"></i>';
      const nextBtn = this.createHTMLElement('button', 'carousel-btn next-btn');
      nextBtn.innerHTML = '<i class="fa-solid fa-circle-chevron-right fa-xl"></i>';
      carouselContainer.appendChild(prevBtn);
      carouselContainer.appendChild(nextBtn);
      prevBtn.addEventListener('click',moveToPrevIndex);
      nextBtn.addEventListener('click',moveToNextIndex);
      
    }
      

    createHTMLElement(tag,classes){
      const element = document.createElement(tag);
      element.className = classes;
      return element;
    }

    createHTMLElementWithAttributes(tag,classes,attributes){
      const element = document.createElement(tag);
      element.className = classes;
      for(const attribute in attributes){
        element.setAttribute(attribute,attributes[attribute]);
      }
      return element;
      
    }
}

customElements.define('hero-section',HeroSection);