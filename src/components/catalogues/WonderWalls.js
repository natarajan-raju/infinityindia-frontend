class WonderWalls extends HTMLElement {

    constructor(){
        super();
        this.startIndex = this.getAttribute('start-index');
        this.endIndex = this.getAttribute('end-index');
        this.pagination = this.getAttribute('page');
        this.template = `
            <section class="catalogue">
                <img class="w-full" src="./public/images/catalogues/wonder_wall/intro.png" alt="wonder_wall">               
                <div id="pagination" class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                   
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium">${this.startIndex}</span>
                                to
                                <span class="font-medium">${this.endIndex}</span>
                                of
                                <span class="font-medium">67</span>
                                results
                            </p>
                        </div>
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#" class="previous relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Previous</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", 
                                Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                <a id="link_1" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" href="wonderwalls_1.html" aria-current="page">1</a>
                                <a id="link_2" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" href="wonderwalls_2.html">2</a>
                                <a id="link_3" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" href="wonderwalls_3.html">3</a>
                                <a href="#" class="next relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Next</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>            
            </section>
        `;        
    }

    connectedCallback(){
        this.innerHTML = this.template;        
        this.loadCatalogue();
    }

    loadCatalogue(){
        const catalogue = document.querySelector('.catalogue');
        const paginationDiv = document.querySelector('#pagination');
        const previousBtns = document.querySelector('.previous');
        const nextBtns = document.querySelector('.next');  
        const defaultClassList = 'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0';
        const focusClassList = 'relative inline-flex items-center text-sm font-semibold focus:z-20 z-10 bg-indigo-600 px-4 py-2  text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';   
        const link_1 = document.querySelector('#link_1');   
        const link_2 = document.querySelector('#link_2');   
        const link_3 = document.querySelector('#link_3');   
        for(let i=this.startIndex; i<=this.endIndex; i++){
            catalogue.insertBefore(this.createCatalogueImage(i),paginationDiv);
        }
        if(this.pagination == 1){
            link_1.classList = focusClassList;
            previousBtns.setAttribute('href','wonderwalls_3.html');
            nextBtns.setAttribute('href','wonderwalls_2.html');
        }
        if(this.pagination == 2){
            link_2.classList = focusClassList;
            previousBtns.setAttribute('href','wonderwalls_1.html');
            nextBtns.setAttribute('href','wonderwalls_3.html');
        }
        if(this.pagination == 3){
            link_3.classList = focusClassList;
            previousBtns.setAttribute('href','wonderwalls_2.html');
            nextBtns.setAttribute('href','wonderwalls_1.html');
        }
                
    }

    createCatalogueImage(fileName){
        let url = `./public/images/catalogues/wonder_wall/${fileName}.png`;
        const img = document.createElement('img');
        img.classList = 'w-full';
        img.setAttribute('src',url);
        img.setAttribute('alt','wonder wall kids wallpaper');
        return img;
    }
}

customElements.define('wonder-catalogue',WonderWalls);