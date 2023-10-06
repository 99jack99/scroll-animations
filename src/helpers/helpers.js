export function myFunction() {
    const htmlElement = document.documentElement

  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
 
  console.log(percentOfScreenHeightScrolled);
  }

/* window.addEventListener(scroll, myFunction()) */