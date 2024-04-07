const all_accordions = document.getElementsByClassName("accordion");
Array.from(all_accordions).forEach((single_accordion)=>{
    let accordion_titlebox = single_accordion.querySelector(".accordion-titlebox");
    accordion_titlebox.addEventListener("click",()=>{
        Array.from(all_accordions).forEach((each_accordion)=>{
            // ======================================== when the user clicks on the iterated element's single/each accordion then it will expand otherwise collapsed by default ========================================
            if(each_accordion !== single_accordion) {
                // ======================================== if both of the iterations aren't same then hide the existing openeed element's description otherwise show it ========================================
                each_accordion.classList.remove("showhide-accordion-content");
            }
        })
        single_accordion.classList.toggle("showhide-accordion-content");
    })
})