
const sections = document.querySelectorAll("section")
const menus = document.querySelectorAll(".menu > li")
let lastScrollTop = 0;
const navBar = document.querySelector("#nav");

// 슬라이드 관련 변수
const slide = document.querySelector(".slide");
const slides = document.querySelectorAll(".slide>li>a");
const duration = 400;
let timerId=0;
let photoIndex=0;
const photoCount = slides.length;
const btnNext=document.querySelector(".next_btn");
const btnPrev=document.querySelector(".prev_btn");

// 슬라이드 버튼 클릭 이벤트
btnPrev.addEventListener("click", prevSlideImage)
btnNext.addEventListener("click", nextSlideImage)
// 포토인덱스 검사
function btnPrevToggle() {
    if(photoIndex === 0) {
        btnPrev.classList.remove("on");
        btnPrev.classList.add("disabled");
    }else if(photoIndex > 0) {
        btnPrev.classList.remove("disabled");
        btnPrev.classList.add("on");
    }
}

//다음 사진으로 슬라이드
function nextSlideImage() {
    photoIndex++;
    photoIndex %= photoCount;
    slide.style.left = -100*photoIndex + "%";
    slide.style.transition = duration+"ms";
    btnPrevToggle();
}
// 이전 사진으로 슬라이드
function prevSlideImage() {
    if(photoIndex==0) return;
    if(photoIndex>0){
        photoIndex --;
        console.log(photoIndex);
        photoIndex %= photoCount;
        slide.style.left = -100*photoIndex + "%";
        slide.style.transition = duration+"ms";
    }
    btnPrevToggle();
}
let isAction = false;
window.addEventListener("scroll", ()=> {
    // 스크롤 위치에 따라 해당하는 nav 메뉴의 색깔이 바뀜 & 섹션 등장 애니메이션
    let current="";
    
    sections.forEach(section => {
        const sectionTop = window.pageYOffset + section.getBoundingClientRect().top
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= sectionTop - sectionHeight/3) {
            current = section.getAttribute("id");
        }
        // 섹션 등장 애니메이션
        if(current=="news"){
            document.getElementById("news").classList.add("fade-in");
        }
        if(current=="magazine") {
            document.getElementById("magazine").classList.add("fade-in");
        }
        if(current=="shows") {
            document.querySelector(".shows__bg").classList.add("fade-in");
            slide.classList.add("slide-in-right");
        }
        if(current=="store") {
            document.getElementById("store").classList.add("fade-in");
        }

    })

    // 내비게이션 스크롤 이벤트
    navBar.classList.toggle("nav_fixed",window.scrollY>document.querySelector(".overlay").clientHeight/2.5);
    var scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        navBar.classList.add("is-Up");
    }else {
        navBar.classList.remove("is-Up");
        navBar.classList.add("is-Down");
    }
    lastScrollTop = scrollTop;
});




// 배경 파티클 애니메이션
function stars(){
    const count = 200;
    const main = document.querySelector("main")
    let i = 0;

    while(i < count){
        const star = document.createElement("i");
        const stars = document.createElement("div");
        const x = Math.floor(Math.random() * main.clientWidth);
        const y = Math.floor(Math.random() * main.clientHeight);

        const size = Math.random() * 3.5;
        star.style.left = x+"px";
        star.style.top = y+"px";
        star.style.width = 1+size+"px";
        star.style.height = 1+size+"px";

        const duration = Math.random() * 2;

        star.style.animationDuration = 2+duration+"s";
        star.style.animationDelay = duration+"s";

        stars.appendChild(star);
        main.appendChild(stars);
        i++
        
    }  
}
stars();