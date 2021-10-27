
const sections = document.querySelectorAll("section")
const menus = document.querySelectorAll(".menu > li")

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

// 스크롤 위치에 따라 해당하는 nav 메뉴의 색깔이 바뀜 & 섹션 등장 애니메이션
window.addEventListener("scroll", ()=> {
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
            document.querySelector(".shows__bg").classList.remove("off");
            document.querySelector(".shows__bg").classList.add("on");
            slide.classList.add("slide-in-right");
        }
        if(current=="store") {
            document.getElementById("store").classList.add("fade-in");
        }

    })
});

// 메뉴에 마우스 올리면 인디케이터가 등장
// menus.forEach(menu => {
//     menu.addEventListener("mouseover", function() {
//         menu.classList.add("indicator");
//     })
// })
