class QuotationMaker extends HTMLElement{

    constructor(){
        super();
        
        this.template = `
            <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Quotation Maker</h1>
                </div>
            </header>
            <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                <!-- Start coding here -->
                    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <button type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" class="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    Add Item
                                </button>                   
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-4 py-4">S.No</th>
                                        <th scope="col" class="px-4 py-4">Description</th>
                                        <th scope="col" class="px-4 py-3">Frame color</th>
                                        <th scope="col" class="px-4 py-3">Mesh color</th>
                                        <th scope="col" class="px-4 py-3">Location</th>
                                        <th scope="col" class="px-4 py-3">Quantity</th>
                                        <th scope="col" class="px-4 py-3">Total Sq.ft</th>
                                        <th scope="col" class="px-4 py-3">Actual Rate</th>
                                        <th scope="col" class="px-4 py-3">Amount</th>
                                        <th scope="col" class="px-4 py-3">Discounted rate</th>
                                        <th scope="col" class="px-4 py-3">Discounted Amount</th>
                                        <th scope="col" class="px-4 py-3">
                                            <span class="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id="tableBody">
                                <tr class="border-b dark:border-gray-700 hover:bg-blue-100">
                                <th scope="row" class="px-4 py-3" >1</th>                                                                                
                                    <td class="px-4 py-3 text-center max-w-[12rem] truncate font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                                    <td class="px-4 py-3 text-center">Mesh</td>
                                    <td class="px-4 py-3 text-center">White</td>
                                    <td class="px-4 py-3 text-center">Brown</td>
                                    <td class="px-4 py-3 text-center">Balcony</td>
                                    <td class="px-4 py-3 text-center">2</td>
                                    <td class="px-4 py-3 text-center">9</td>
                                    <td class="px-4 py-3 text-center">10</td>
                                    <td class="px-4 py-3 text-center">11</td>
                                    <td class="px-4 py-3 text-center">120</td>
                                    <td class="px-4 py-3 text-center flex items-center justify-end">
                                        <button type="button" data-modal-target="createProductModal" data-modal-toggle="createProductModal" class="flex items-center justify-center text-sm px-4 py-2">
                                            <i class="editRowItem fa-regular fa-pen-to-square cursor-pointer" style="color: #0000ff;"></i>    
                                        </button>
                                        <button type="button" class="flex items-center justify-center text-sm px-4 py-2"> 
                                            <i class="deleteRowItem fa-solid fa-trash-can fa-rotate-by mx-2 cursor-pointer" style="color: #ff0000; --fa-rotate-angle: 0deg;""></i>                                                                                
                                        </button>
                                    </td>
                                </tr>
                                                                    
                                </tbody>
                                <tfoot>
                                    <tr class="font-semibold text-gray-900 dark:text-white">
                                        <th scope="row" class="px-6 py-3 text-base">Total</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class="px-6 py-3">3</td>
                                        <td class="px-6 py-3">21,000</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>            
                    </div>
                </div>
            </section>
            <!-- End block -->
            <!-- Create modal -->
            <div id="createProductModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <!-- Modal header -->
                        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <form id="createProductForm">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="text" name="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type product description" required="">
                                </div>
                                <div>
                                    <label for="frameColor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frame color</label>
                                    <input type="text" name="frameColor" id="frameColor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Frame color" required="">
                                </div>
                                <div>
                                    <label for="meshColor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mesh color</label>
                                    <input type="text" name="meshColor" value="Black" id="meshColor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mesh color" required="">
                                </div>
                                <div>
                                    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <input type="text" name="location" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required="">
                                </div>
                                <div>
                                    <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                    <input type="number" name="quantity" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qty" required="">
                                </div>
                                <div>
                                    <label for="measurement" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Measurement</label>
                                    <div class="relative mt-2 rounded-md shadow-sm">                    
                                        <input type="text" name="measurement" id="measurement" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.00">
                                        <div class="absolute inset-y-0 right-0 flex items-center">
                                            <label for="measurementUnit" class="sr-only">measurement</label>
                                            <select id="measurementUnit" name="measurementUnit" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                                <option>Sq.ft</option>
                                                <option>mm</option>                                    
                                            </select>
                                        </div>                            
                                    </div>
                                </div>
                                <div>
                                    <label for="actualRate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actual Rate⟨₹⟩</label>                        
                                    <input type="number" name="actualRate" id="actualRate" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Actual Rate" required="" disabled>
                                </div>
                                <div>
                                    <label for="actualAmount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Actual Amount⟨₹⟩</label>                        
                                    <input type="number" name="actualAmount" id="actualAmount" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Actual Amount" required="" disabled>
                                </div>
                                <div>
                                    <label for="discountedRate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discounted rate⟨₹⟩</label>                        
                                    <input type="number" name="discountedRate" id="discountedRate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discounted rate" required="">
                                </div>
                                <div>
                                    <label for="discountedAmount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discounted Amount⟨₹⟩</label>                        
                                    <input type="number" name="discountedAmount" id="discountedAmount" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discounted Amount" required="" disabled>
                                </div>
                                
                                
                            </div>
                            <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        `;
    }

    connectedCallback(){
        this.innerHTML = this.template;
        const createProductModalButton = document.querySelector('#createProductModalButton');
        const form = document.querySelector('#createProductForm');
        createProductModalButton.addEventListener('click',this.validateFormValues); 
        form.addEventListener('submit',this.addProductToTable);       
    }

    addProductToTable(e){
        e.preventDefault();
        const tableBody = document.querySelector('#tableBody');        
        let rowNo = tableBody.childElementCount + 1;
        const tr = document.createElement('tr');
        tr.classList = 'border-b dark:border-gray-700 hover:bg-blue-100';
        const th = document.createElement('th');
        th.setAttribute('scope','row');
        th.classList = 'px-4 py-3';
        th.innerText = `${rowNo}`;
        const descriptionTd = document.createElement('td');
        descriptionTd.classList = 'px-4 py-3 max-w-[12rem] truncate font-medium text-gray-900 whitespace-nowrap dark:text-white';
        descriptionTd.innerText = `${e.target.description.value}`;
        Array.from(e.target).forEach((element,index) => {
            
        });
        tr.appendChild(th);    
        const tableRowItem = `
        <tr class="border-b dark:border-gray-700 hover:bg-blue-100">
            <th scope="row" class="px-4 py-3" >${rowNo}</th>                                                                                
                <td class="px-4 py-3 max-w-[12rem] truncate font-medium text-gray-900 whitespace-nowrap dark:text-white">${e.target.description.value}</th>
                <td class="px-4 py-3">${e.target.frameColor.value}</td>
                <td class="px-4 py-3">${e.target.meshColor.value}</td>
                <td class="px-4 py-3">${e.target.location.value}</td>
                <td class="px-4 py-3">${e.target.quantity.value}</td>
                <td class="px-4 py-3">${e.target.measurement.value}</td>
                <td class="px-4 py-3">${e.target.actualRate.value}</td>
                <td class="px-4 py-3">${e.target.actualAmount.value}</td>
                <td class="px-4 py-3">${e.target.discountedRate.value}</td>
                <td class="px-4 py-3">${e.target.discountedAmount.value}</td>
                <td class="px-4 py-3 flex items-center justify-end">
                    <button type="button" data-modal-target="createProductModal" data-modal-toggle="createProductModal" class="flex items-center justify-center text-sm px-4 py-2">
                        <i class="editRowItem fa-regular fa-pen-to-square cursor-pointer" style="color: #0000ff;"></i>    
                    </button>
                    <button type="button" class="flex items-center justify-center text-sm px-4 py-2"> 
                        <i class="deleteRowItem fa-solid fa-trash-can fa-rotate-by mx-2 cursor-pointer" style="color: #ff0000; --fa-rotate-angle: 0deg;""></i>                                                                                
                    </button>                                        
                </td>               
            </tr>
        `;
        tableBody.innerHTML += tableRowItem;
    }
    

    validateFormValues(e){
        e.preventDefault();
        const discountedRate = document.querySelector('#discountedRate');
        const actualRate = document.querySelector('#actualRate');        
        const quantity = document.querySelector('#quantity');
        const measurementUnitSelect = document.querySelector('#measurementUnit');
        
        let measurementUnit = measurementUnitSelect.value;
        let measurement = document.querySelector('#measurement');        
        const calculateProductAmounts = function(quantity,measurementValue,measurementUnit,actualRate,discountedRate){
            const actualAmount = document.querySelector('#actualAmount');
            let discountedAmount = document.querySelector('#discountedAmount');
            let measurementInSqft;
            measurementUnit == 'mm' ? measurementInSqft = (measurementValue / 304.8) : measurementInSqft = measurementValue;
            actualAmount.value = (quantity * measurementInSqft * actualRate).toFixed(2);  
            discountedAmount.value = (quantity * measurementInSqft * discountedRate).toFixed(2);            
        }

        measurementUnitSelect.addEventListener('change',function(){
            measurementUnit = measurementUnitSelect.value;            
            calculateProductAmounts(quantity.value,measurement.value,measurementUnit,actualRate.value,discountedRate.value);
        });       
        
        discountedRate.addEventListener('keyup',function(){            
            actualRate.value = Math.ceil(discountedRate.value * 1.1);
            calculateProductAmounts(quantity.value,measurement.value,measurementUnit,actualRate.value,discountedRate.value);          
        });
        discountedRate.addEventListener('change',function(){            
            actualRate.value = Math.ceil(discountedRate.value * 1.1);
            calculateProductAmounts(quantity.value,measurement.value,measurementUnit,actualRate.value,discountedRate.value);            
        });

        quantity.addEventListener('change',function(){
            calculateProductAmounts(quantity.value,measurement.value,measurementUnit,actualRate.value,discountedRate.value);
        });
        quantity.addEventListener('keyup',function(){
            calculateProductAmounts(quantity.value,measurement.value,measurementUnit,actualRate.value,discountedRate.value);
        });

        measurement.addEventListener('keyup',function(){
            calculateProductAmounts(quantity.value,measurement.value,measurementUnit,actualRate.value,discountedRate.value);
        });              


    }

    

    
    
}

customElements.define('quotation-maker',QuotationMaker);