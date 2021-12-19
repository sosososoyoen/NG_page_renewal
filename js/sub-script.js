const dropdown = document.querySelector(".dropdown-select");
const dropdownList = document.querySelector(".dropdown-list");
const dropdownWrap = document.querySelector(".dropdown")
const navBar = document.querySelector("#nav");
let lastScrollTop = 0;
const header = document.querySelector(".sub__header");

dropdown.addEventListener("click",function(){
    dropdownList.classList.toggle("visible")
})

window.addEventListener("scroll",()=>{
        // 내비게이션 스크롤 이벤트
    // 내비게이션 스크롤 이벤트
    navBar.classList.toggle("nav--fixed",window.scrollY>document.querySelector(".header__overlay").clientHeight/2.5);
    var scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        navBar.classList.add("is-Up");
    }else {
        navBar.classList.remove("is-Up");
        navBar.classList.add("is-Down");
    }
    lastScrollTop = scrollTop;
})

//페이지 넘버 active
const numbers = document.querySelectorAll(".pagination>.page-number");
const pageNumbers = [...numbers]
console.log(pageNumbers);

pageNumbers.forEach(number => {
    number.addEventListener("click",function(e){
    e.preventDefault();
    for(let i=0; i<pageNumbers.length; i++) {
        pageNumbers[i].classList.remove("active");
        number.classList.add("active");
    }
    })
})

