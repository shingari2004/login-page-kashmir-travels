const inputs = document.querySelectorAll(".contact-input");
const header = document.querySelector("header");
const toggleBtn = document.querySelector(".theme-toggle");
const allElements = document.querySelectorAll("*");
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const shadow = document.querySelector(".shadow");
const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


function stickyNavbar(){
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
}
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    allElements.forEach(el => {
        el.classList.add("transition");
        setTimeout(() => {
            el.classList.remove("transition");
        }, 1000);
    })
});

inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", () => {
    if(ipt.value == ""){
        ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});


window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();
  
  translate.forEach(element => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
})

  big_title.style.opacity =  -(scroll*0.5) / (header_height/2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

})