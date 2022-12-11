"use strict";


// getting the range input 
const rangeSlide = document.querySelector('.range-slide');

// when the range slide moves this function executes
rangeSlide.addEventListener('mousemove',function() {
    const rangeValue = rangeSlide.value;
    // get the current value and insert it into css variable 
    document.documentElement.style.cssText = `--blur: ${rangeValue}px`;
 })


