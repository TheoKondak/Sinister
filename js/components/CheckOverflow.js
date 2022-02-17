// Inspiration: https://www.designcise.com/web/tutorial/how-to-fix-issues-with-css-position-sticky-not-working

export const CheckOverflow = (elementQuerySelector) => {
  // console.log(document.querySelector(elementQuerySelector));
  if (!document.querySelector(elementQuerySelector)) {
    console.warn('There is no "' + elementQuerySelector + '" in the DOM');
  } else {
    let parent = document.querySelector(elementQuerySelector).parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== 'visible') {
        console.log('Problematic overflow detected: ' + hasOverflow);
        console.log('On element: ');
        console.log(parent);
      }
      parent = parent.parentElement;
    }
  }
};