class NavBar extends HTMLElement {
    
    constructor(){
        super();
        this.navbar = document.querySelector('nav-bar');
        this.template = `
        <header>
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="index.html" class="-m-1.5 p-1.5">
                    <span class="sr-only">Infinity India</span>
                    <img class="h-8 w-auto border-solid border-2 rounded-full border-red-600" src="./public/images/logo/logo.jpeg" alt="Infinity India">                    
                </a>
                
                </div>
                <div class="flex lg:hidden"> 
                <button id="hamburger" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-50" hover:text-blue-400>
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :aria-hidden="isOpen">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                <div x-data="{
                    open: false,
                    toggle() {
                        if (this.open) {
                            return this.close()
                        }
         
                        this.$refs.button.focus()
         
                        this.open = true
                    },
                    close(focusAfter) {
                        if (! this.open) return
         
                        this.open = false
         
                        focusAfter && focusAfter.focus()
                    }
                }"
                x-on:keydown.escape.prevent.stop="close($refs.button)"
                x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                x-id="['dropdown-button']" class="relative">
                    <button             
                    x-ref="button"
                    x-on:click="toggle()"
                    :aria-expanded="open"
                    :aria-controls="$id('dropdown-button')" 
                    class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-100 hover:text-blue-400">
                    Our Services
                    <svg class="h-5 w-5 flex-none text-blue-100 hover:text-blue-400 chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>

                    <!--
                    'Product' flyout menu, show/hide based on flyout menu state.

                    Entering: "transition ease-out duration-200"
                        From: "opacity-0 translate-y-1"
                        To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                        From: "opacity-100 translate-y-0"
                        To: "opacity-0 translate-y-1"
                    -->
                    <div 
                    x-ref="panel"
                    x-show="open"
                    x-transition.origin.top.left
                    x-on:click.outside="close($refs.button)"
                    :id="$id('dropdown-button')"
                    style="display: none
                    x-transition:enter="transition ease-out duration-200"                    
                    x-transition:leave="transition ease-in duration-150";"
                    class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div class="p-4">
                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class="fa-solid fa-mosquito-net fa-shake text-gray-900 fa-xl group-hover:text-indigo-600"></i>                            
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            </svg>
                        </div>
                        <div class="flex-auto">
                            <a href="mosquitomesh.html" class="block font-semibold text-gray-900">
                            Mosquito Mesh
                            <span class="absolute inset-0"></span>
                            </a>
                            <p class="mt-1 text-gray-600">Bug-proof sleep with our protective mosquito net</p>
                        </div>
                        </div>
                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <i class="fa-regular fa-image fa-xl text-gray-900 group-hover:text-indigo-600"></i>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                            </svg>
                        </div>
                        <div class="flex-auto">
                            <a href="wallpapers.html" class="block font-semibold text-gray-900">
                            Interior Wallpapers
                            <span class="absolute inset-0"></span>
                            </a>
                            <p class="mt-1 text-gray-600">Transform your space effortlessly with our stunning interior wallpapers</p>
                        </div>
                        </div>
                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class="fa-solid fa-brush fa-xl text-gray-900 group-hover:text-indigo-600"></i>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                            </svg>
                        </div>
                        <div class="flex-auto">
                            <a href="3dmural_1.html" class="block font-semibold text-gray-900">
                            Murals
                            <span class="absolute inset-0"></span>
                            </a>
                            <p class="mt-1 text-gray-600">Elevate your space with captivating stories on your walls through our bespoke mural art</p>
                        </div>
                        </div>
                        <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i class="fa-solid fa-warehouse fa-xl text-gray-900 group-hover:text-indigo-600"></i>
                        </div>
                        <div class="flex-auto">
                            <a href="https://bmwall.in" class="block font-semibold text-gray-900">
                            Interior & Exterior glass works
                            <span class="absolute inset-0"></span>
                            </a>
                            <p class="mt-1 text-gray-600">Transform your interiors & exteriors with our elegant glass works</p>
                        </div>
                        </div>
                        
                    </div>
                    <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
                        </svg>
                        Watch demo
                        </a>
                        <a href="#contact-form" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                        </svg>
                        Contact sales
                        </a>
                    </div>
                    </div>
                </div>

                <a href="index.html/#category" class="text-sm font-semibold leading-6 text-blue-100 hover:text-blue-400">Collections</a>
                <a href="commercials.html" class="text-sm font-semibold leading-6 text-blue-100 hover:text-blue-400">Pricing</a>
                <a href="index.html/#contact-form" class="text-sm font-semibold leading-6 text-blue-100 hover:text-blue-400">Contact us</a>
 
                </div>
                <!--<div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm font-semibold leading-6 text-blue-100 hover:text-blue-400">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>-->
            </nav>


            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="lg:hidden" role="dialog" aria-modal="true">
            
                <!-- Background backdrop, show/hide based on slide-over state. -->
                
                <div id="mobileMenu" class="fixed hidden inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="index.html" class="-m-1.5 p-1.5">
                    <span class="sr-only">Infinity India</span>
                    <img class="h-8 w-auto" src="./public/images/logo/logo.jpeg" alt="Infinity India">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                        <div x-data="{
                            open: false,
                            toggle() {
                                if (this.open) {
                                    return this.close()
                                }
                 
                                this.$refs.button.focus()
                 
                                this.open = true
                            },
                            close(focusAfter) {
                                if (! this.open) return
                 
                                this.open = false
                 
                                focusAfter && focusAfter.focus()
                            }
                        }"
                        x-on:keydown.escape.prevent.stop="close($refs.button)"
                        x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                        x-id="['dropdown-button']" class="-mx-3">
                        <button type="button" x-ref="button"
                        x-on:click="toggle()"
                        :aria-expanded="open"
                        :aria-controls="$id('dropdown-button')" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                            Our Services
                            <!--
                            Expand/collapse icon, toggle classes based on menu open state.

                            Open: "rotate-180", Closed: ""
                            -->
                            <svg class="h-5 w-5 chevron flex-none" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <!-- 'Product' sub-menu, show/hide based on menu state. -->
                        <div x-ref="panel"
                        x-show="open"
                        x-transition.origin.top.left
                        x-on:click.outside="close($refs.button)"
                        :id="$id('dropdown-button')"
                        style="display: none;" class="mt-2 space-y-2" id="disclosure-1">
                            <a href="mosquitomesh.html" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Mosquito Mesh</a>
                            <a href="wallpapers.html" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Interior Wallpapers</a>
                            <a href="3dmural_1.html" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Murals</a>
                            <a href="https://bmwall.in" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Interior & Exterior glassworks</a>
                            
                        </div>
                        </div>
                        <a href="index.html/#category" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Collections</a>
                        <a href="commercials.html" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pricing</a>
                        <a href="#contact-form" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact us</a>
                    </div>
                    <!--<div class="py-6">
                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                    </div>-->
                    </div>
                </div>
                </div>
            </div>
        </header>
        `;
               

    }
    
    connectedCallback(){
        this.innerHTML = this.template;
        this.loadEventListeners();       
    }

    loadEventListeners(){
        const hamburger = document.querySelector('#hamburger'); 
        const chevrons = document.querySelectorAll('.chevron');
        chevrons.forEach(chevron => {
            chevron.addEventListener('mouseup',this.animateChevron);
        })
        hamburger.addEventListener('click',this.toggleMobileMenu);
    }

    toggleMobileMenu(){
        const mobileMenu = document.querySelector('#mobileMenu');
        mobileMenu.classList.toggle('hidden');
        hamburger.classList.toggle('opacity-0');  

    }

    animateChevron(e){
        if(e.target.parentElement.classList.contains('chevron')){
            e.target.parentElement.classList.toggle('rotate-180');
            return;
        }
        e.target.classList.toggle('rotate-180');      
    }

    
}

customElements.define('nav-bar',NavBar);