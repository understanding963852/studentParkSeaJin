/* 스크롤애니메이션 */
$('.animate').scrolla({
  // default
  mobile: true, // 모바일버전에서 활성화
  once: false, // 스크롤시 한번또는 여러번 실행을 설정
  animateCssVersion: 4 // scrolla animate.css 버전 (3 or 4)
});

/* header */

let header;

let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;
header = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    document.getElementById('logo').style.display = 'inline-block';
  } else {
    navbar.classList.remove('sticky')
    document.getElementById('logo').style.display = 'none';
  }
}
window.onscroll = header;


/* slidenav */

function openNav() {
  document.getElementById('slideNav').style.width = "100vw"
}

function closeNav() {
  document.getElementById('slideNav').style.width = "0vh"
}

/* header_menu */

let mainMenu = document.querySelectorAll('.main_menu>li'),
  navBar = document.querySelector('.navbar');


mainMenu.forEach((item) => {
  item.addEventListener('mouseover', function () {
    let submenuHeight = this.querySelector('.sub_menu').offsetHeight;
    console.log(submenuHeight)
    navBar.style.height = `${submenuHeight + 90}px`;
  })
  item.addEventListener('mouseout', () => {
    navBar.style.height = `90px`;
  })
})



/* section1-left 새창열기 */
function openVideo() {
  let newWindow = window.open('', '_blank', 'width=900px height=700px');
  //newWindow.document.body.style.background = '#000';

  if (newWindow) {
    // 팝업 차단 기능이 해제된 경우
    let html = `
        <html>
          <head>
            <title>MIUMIU Perfumes</title>
          </head>
          <body>
            <iframe width=860px height=660px src="https://www.youtube.com/embed/njyoDYpWGfQ?autoplay=1&mute=1&controls=0&loop=1&playlist=njyoDYpWGfQ" title="YouTube video player"></iframe>
          </body>
        </html>
      `;

    newWindow.document.write(html);
    newWindow.document.close();
  } else {
    // 팝업 차단 기능이 활성화된 경우
    alert('팝업 차단 기능이 활성화되어 있습니다.팝업 차단 기능을 해제해주세요.');
  }
}



/* section1-left 카드 */
let limits = 15.0;

$(".card").mousemove(function (e) {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top; //y position within the element.
  let offsetX = x / rect.width;
  let offsetY = y / rect.height;

  let rotateY = (offsetX) * (limits * 2) - limits;
  let rotateX = (offsetY) * (limits * 2) - limits;

  let shadowOffsetX = (offsetX) * 32 - 16;
  let shadowOffsetY = (offsetY) * 32 - 16;

  $(this).css({
    "box-shadow": (1 / 6) * -shadowOffsetX + "px " + (1 / 6) * -shadowOffsetY + "px 3px rgba(0, 0, 0, 0.051), " +
      (2 / 6) * -shadowOffsetX + "px " + (2 / 6) * -shadowOffsetY + "px 7.2px rgba(0, 0, 0, 0.073), " +
      (3 / 6) * -shadowOffsetX + "px " + (3 / 6) * -shadowOffsetY + "px 13.6px rgba(0, 0, 0, 0.09), " +
      (4 / 6) * -shadowOffsetX + "px " + (4 / 6) * -shadowOffsetY + "px 24.3px rgba(0, 0, 0, 0.107), " +
      (5 / 6) * -shadowOffsetX + "px " + (5 / 6) * -shadowOffsetY + "px 45.5px rgba(0, 0, 0, 0.129), " +
      -shadowOffsetX + "px " + -shadowOffsetY + "px 109px rgba(0, 0, 0, 0.18)",
    transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });

  let glarePos = rotateX + rotateY + 90;
  $(this)
    .children()
    .children()
    .css("left", glarePos + "%");
});

$(".card").mouseleave(function (e) {
  $(".card").css({
    "box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)",
    "transform": "scale(1.0)"
  });
  $(".glare").css("left", "100%");
});


/* section1 left_sub */

var movingImage = document.getElementById('movingImage');
var left = document.querySelector('.left');
var distance = 200; // 이미지와 마우스 커서 사이의 거리 조절

left.addEventListener('mousemove', function (event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var imageWidth = movingImage.offsetWidth;
  var imageHeight = movingImage.offsetHeight;

  var imageX = mouseX - (imageWidth / 2) - distance;
  var imageY = mouseY - (imageHeight / 2) - distance;

  movingImage.style.transform = `translate(${imageX}px, ${imageY}px)`;
});

/* section1 center */
setInterval(function () {
  $('nav .next').click();
}, 4000)


/* section1 right */
let showIndex = 1;
showImg(showIndex);

function showImg(n) {
  let modelImg = document.querySelectorAll('#model_img');
  let boxImg = document.querySelectorAll('.demo');

  if (n > modelImg.length) {
    showIndex = 1;
  }
  if (n < 1) {
    showIndex = modelImg.length;
  }

  // 1. modelImg의 모든 이미지 숨기기
  modelImg.forEach(image => {
    image.style.display = "none";
  });

  // 2. modelImg에서 showIndex에 해당하는 이미지 보이기
  modelImg[showIndex - 1].style.display = "block";

  // 3. boxImg에서 클래스명 active 추가 및 제거하기
  boxImg.forEach(box => {
    box.classList.remove('active');
  });
  boxImg[showIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
  let boxImg = document.querySelectorAll('.demo');
  boxImg.forEach((box, index) => {
    box.addEventListener('click', function () {
      showIndex = index + 1;
      showImg(showIndex);
    });
  });
});

/* section1-right accordion menu */
let acc = document.getElementsByClassName('accordion');
let panels = document.getElementsByClassName('panel');

// 첫 번째 패널 초기 높이값 설정
panels[0].style.maxHeight = panels[0].scrollHeight + 'px';

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    let isOpen = this.classList.contains('active');

    // 모든 패널 닫기
    for (let j = 0; j < panels.length; j++) {
      panels[j].style.maxHeight = null;
      acc[j].classList.remove('active');
    }

    if (!isOpen) {
      this.classList.toggle('active');
      let panel = this.nextElementSibling; // 나의 다음 요소 (동생)
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}


/* section3 right*/
let allText = document.querySelectorAll('#section3 .text');
let delay = 0;

//allText.forEach(function(el,idx){}); //el 각각의 아이템, idx는 아이템의 index번호


allText.forEach((el, idx) => {
  el.style.animationDelay = `${delay}s`;
  el.style.zIndex = allText.length - idx;
  el.classList.add('base-anim');

  delay += 0.15;
});


document.getElementById('five').addEventListener('mousemove', (e) => {
  let innerWidth = window.innerWidth; //viewport의 넓이값
  let innerHeight = window.innerHeight; //viewport의 높이값
  let clientX = e.clientX;
  let clientY = e.clientY;
  //console.log(clientX,clientY)

  let percentX = clientX / innerWidth;
  //console.log(percentX)
  let maxRangeX = innerWidth * 0.15;
  let minX = innerWidth / 3 - maxRangeX;
  let maxX = innerWidth / 3 + maxRangeX;
  let difX = maxX - minX;
  let pxOffset = difX * percentX;

  let left = minX + pxOffset;

  let percentY = clientY / innerHeight;
  //console.log(percentX)
  let maxRangeY = innerHeight * 0.15;
  let minY = innerHeight / 3 - maxRangeY;
  let maxY = innerHeight / 3 + maxRangeY;
  let difY = maxY - minY;
  let pxOffsetY = difY * percentY;

  let top = minY + pxOffsetY;

  allText.forEach((el, idx) => {
    //el.animate([],{})

    el.animate([{
      top: `${top}px`,
      left: `${left}px`
    }], {
      duration: 1000,
      fill: 'forwards',
      delay: idx * 50
    })
  })

})

/* section3 left */
window.addEventListener('mousemove', function (e) {
  document.querySelector('#slidephoto').style.top = `${e.clientY}px`;
  document.querySelector('#slidephoto').style.left = `${e.clientX}px`;
  document.querySelector('#slidephoto').style.transform = `translate(${-e.clientX*0.7}px,${-e.clientY*0.7}px)`;
})


document.querySelector('#clothes').addEventListener('mousemove', function (e) {
  document.querySelector('#slidephotos').style.marginTop = "0%";
  document.querySelector('#clothes').style.color = "rgba(177,177,177)";
})
document.querySelector('#clothes').addEventListener('mouseleave', function () {
  document.querySelector('#clothes').style.color = "initial";
})

document.querySelector('#bag').addEventListener('mousemove', function (e) {
  document.querySelector('#slidephotos').style.marginTop = "-133%";
  document.querySelector('#bag').style.color = "rgba(177,177,177)";
})
document.querySelector('#bag').addEventListener('mouseleave', function () {
  document.querySelector('#bag').style.color = "initial";
})

document.querySelector('#shose').addEventListener('mousemove', function (e) {
  document.querySelector('#slidephotos').style.marginTop = "-267%";
  document.querySelector('#shose').style.color = "rgba(177,177,177)";
})
document.querySelector('#shose').addEventListener('mouseleave', function () {
  document.querySelector('#shose').style.color = "initial";
})

document.querySelector('#accessory').addEventListener('mousemove', function (e) {
  document.querySelector('#slidephotos').style.marginTop = "-400%";
  document.querySelector('#accessory').style.color = "rgba(177,177,177)";
})
document.querySelector('#accessory').addEventListener('mouseleave', function () {
  document.querySelector('#accessory').style.color = "initial";
})


document.querySelector('#eff').addEventListener('mousemove', function () {
  document.querySelector('#slidephoto').style.display = "initial";
  document.querySelector('#slidephoto').style.opacity = 1;
})
document.querySelector('#eff').addEventListener('mouseleave', function () {
  document.querySelector('#slidephoto').style.display = "none";
  document.querySelector('#slidephoto').style.opacity = 0;
})


/* section3 movetext */
let pTag1 = document.querySelector(".first-parallel"); //첫번째줄영역
let pTag2 = document.querySelector(".second-parallel"); //두번째줄영역

let textArr1 = 'That Is Excellent Choice. That Is Excellent Choice. That Is Excellent Choice. That Is Excellent Choice. That Is Excellent Choice. That Is Excellent Choice.'.split(' '); //띄워쓰기를 기준으로 잘라서 배열로 만든다
//console.log(textArr1)
let textArr2 = 'What Do You Want? I Have Everyting You Need. What Do You Want? I Have Everyting You Need. What Do You Want? I Have Everyting You Need. What Do You Want? I Have Everyting You Need.'.split(" ")
//console.log(textArr2)


let count1 = 0; //첫번째줄 글자
let count2 = 0; //두번째줄 글자

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)

function initTexts(element, textArry) {
  textArry.push(...textArry) //8개의 배열에 동일한 배열을 복사하여 배열뒤에 넣음//16개
  //console.log(textArry)
  //\u00A0 => javascript에서의 공백을 나타냄
  for (let i = 0; i < textArry.length; i++) {
    element.innerHTML += `${textArry[i]}\u00A0\u00A0\u00A0`;

  }
}

function animate() {
  count1++;
  count2++;
  // console.log(count1)

  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, 1) // 반대로 움직임

  window.requestAnimationFrame(animate) //setInterval의 업그레이드 버전
  // animate함수를 다시 실행
}

function marqueeText(count, element, direction) {
  // .scrollWidth : 보이지 않는 공간일지라도 스크롤해서 확인할 수 있는 공간까지의 넓이
  // console.log(element,scrollWidth)
  //if(count>element)
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0,0)`
  }
  element.style.transform = `translate(${count * direction}px,0)`
  return count; //count=0

}

function scrollHandler() {
  count1 += 25;
  count2 += 25;
}
animate();
window.addEventListener("scroll", scrollHandler)



/* section3 two-section */


/* section4 파노라마 */
let panoWrap = document.querySelector('.sj_panorama .pano_wrap');
let listWrap = panoWrap.querySelector('.list');
let item = listWrap.children;

console.log(item);

let listClone = null;
let itemWidth = item[0].offsetWidth; //이미지 하나의 넓이 
let itemLength = item.length; //10개
let listWidth = itemLength * itemWidth // 300 x 10 = 3000px
let move = 0;
//let controls = document.querySelector('.sj_panorama .controls')
let controls = panoWrap.parentElement.querySelector('.controls');
let timer;



var init=function (){
    panoWrap.style.width = listWidth * 2 +"px";
    listWrap.style.width = listWidth + "px";
    panoWrap.appendChild(listWrap.cloneNode(true))//listWrap를 복사하되 자식까지 포함해서 복사
    listClone = panoWrap.children;
    //console.log(listClone)
    render();
    add();
    event();
}

let render = function(){
    move +=1;
    //유사배열을 배열로 바꿈
    //console.log(Array.from(listClone))
    Array.from(listClone).forEach(function(clone){
        clone.style.transform = `translateX(-${move}px)`;

    })

    timer = window.requestAnimationFrame(render)
}

let add = function(){
    setInterval(function () {
        panoWrap.appendChild(listWrap.cloneNode(true));
        listClone = panoWrap.children;
    }, 10000);
}
let event=function(){
    controls.querySelector('.play_on').addEventListener('click',function(e){
        e.preventDefault();
        //console.log(this)
        if(this.classList.contains('active')){
            this.classList.remove('active')
            window.cancelAnimationFrame(timer)
        }else{
            this.classList.add('active')
            render();
        }

    })
}



window.addEventListener('load', function () {
    init()
})


//section4 배경컬러변경
$(window).scroll(function(){
  //$(this)는 window
  let scrollTop=$(this).scrollTop();
  console.log(scrollTop)

  //service영역이 천장에 닿는 지점(높이값)
  let offset=$('#section4').offset().top - 500;

  //service영역이 천장에 닿고 스크롤을 더 내리면
  if(scrollTop>offset){
      $('body').addClass('on')
  }else{
      $('body').removeClass('on')
  }
})

/* footer 배경컬러 변경*/
$(window).scroll(function(){
  //$(this)는 window
  let scrollTop=$(this).scrollTop();
  console.log(scrollTop)

  //service영역이 천장에 닿는 지점(높이값)
  let offset=$('#footer').offset().top - 500;

  //service영역이 천장에 닿고 스크롤을 더 내리면
  if(scrollTop>offset){
      $('body').addClass('end')
  }else{
      $('body').removeClass('end')
  }
})


/* scroll up */
let scrollup=()=>{
  let scrollup=document.getElementById('scroll-up');
  pageYOffset>=350? 
  scrollup.classList.add('show-scroll'): 
  scrollup.classList.remove('show-scroll');
}
window.addEventListener("scroll",scrollup)
