class HeroSection extends HTMLElement {

    constructor(){
        super();
        this.body = document.querySelector('body');
        this.navbar = document.querySelector('nav-bar');
        this.url = "http://localhost:1337";
        this.heroImages = [
          "./public/images/hero/1.png",
          "./public/images/hero/2.png",
          "./public/images/hero/3.png",
          "./public/images/hero/4.png",
        ];
            
                  
        this.template = `
        <div id="hero" class="carousel-container w-full md:w-9/12 lg:relative overflow-hidden pb-10">
          <div class="carousel-wrapper flex">
            <!-- Carousel items go here -->
                              
          </div>
        </div>
        `;
    }

    connectedCallback(){     
      this.loadCarousel(this.heroImages);
      this.fetchHeroImages();
        
    }

    async fetchHeroImages(){
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
        offerImagesUrl.forEach(url => {
          this.heroImages.push(url);
        });
        this.loadCarousel(this.heroImages);
      } 
      
    }    
         
    

    loadCarousel(imageUrlArray){
      this.innerHTML= this.template;
      const carouselContainer = document.querySelector('.carousel-container');
      const carouselWrapper = document.querySelector('.carousel-wrapper');
      carouselWrapper
      imageUrlArray.forEach((imageUrl) => {
        
        const img = this.createHTMLElementWithAttributes('img', 'h-full w-full object-cover object-center',{
          "src": imageUrl,
          "alt": "carousel-images-products"
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