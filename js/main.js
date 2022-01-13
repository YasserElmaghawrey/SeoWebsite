let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}
let theme = document.querySelector("#theme-btn")
theme.onclick = () => {
    theme.classList.toggle("fa-sun")
    if (theme.classList.contains("fa-sun")) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}


window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.header .scroll-indicator').style.width = percentage + '%'
}






var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });