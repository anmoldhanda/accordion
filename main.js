const all_accordions = document.querySelectorAll(".accordion");
all_accordions.forEach((single_accordion) => {
  let accordion_titlebox = single_accordion.querySelector(".accordion-titlebox");
  accordion_titlebox.addEventListener("click", () => {
      all_accordions.forEach((each_accordion) => {
        // ======================================== loop throught all accordions elements again ========================================
      if (each_accordion !== single_accordion) {
        // ======================================== check if the current accordion is not the one being clicked then remove the showhide-accordion-content class from the accordion element ========================================
        each_accordion.classList.remove("showhide-accordion-content");
      } else {
        // ======================================== if the current accordion is the one being clicked then toggle the particular showhide-accordion-content class for further operations ========================================
        single_accordion.classList.toggle("showhide-accordion-content");
      }
    });
  });
  // ======================================== by doing this it means a single accordions is clicked once by default automatically ========================================
  accordion_titlebox.click();
});
