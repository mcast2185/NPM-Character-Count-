'use strict';



/**
 * Accepts three parameters that make up the object display
 * @param {variable} selector
 * @param {variable} selector
 * @param {integer} text_limit
 * @return {Html Object}  
 */

const sampleTextInput = document.querySelector('.SampletextInput');
const sampleCounter = document.querySelector('.Samplecounter');

const ensureContentLength = (content, max) => {
  if (content.length > max) {
    return false;
  } else {
    return true;
  };
};

const sharedChrCountFunc = (textInput, counter, maxCount) => {
  textInput.onkeyup = function(){
    counter.innerHTML = maxCount - this.value.length;
    if(!ensureContentLength(this.value, (maxCount - 1))){
      textInput.disabled = true;
    };
  };
};