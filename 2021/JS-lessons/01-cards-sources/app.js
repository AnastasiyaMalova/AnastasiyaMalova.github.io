function slidesPLagin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')
  
  slides[activeSlide].classList.add('active')
  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
    })
  }
  
  // function clearactiveclasses() {
  //   for (const slide of slides) {
  //     slide.classList.remove('active')
  //   }
  //
  
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidesPLagin(4)