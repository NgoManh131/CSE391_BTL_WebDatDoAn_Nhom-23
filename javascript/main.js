const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () => {
     document.body.style.visibility = 'visible';
});

const navOpen = () => {
     navList.classList.add('show');
     navBgOverlayEl.classList.add('active');
     document.body.style = 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
     navList.classList.remove('show');
     navBgOverlayEl.classList.remove('active');
     document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

// AOS
// AOS.refreshHard();
AOS.init({
     offset: 200, // offset (tính bằng px) từ điểm kích hoạt ban đầu
     delay: 100, // giá trị từ 0 đến 3000, với bước 50ms
     duration: 400, // values from 0 to 3000, with step 50ms
     easing: 'ease', // dnới lỏng mặc định cho hoạt ảnh AOS
     once: false, // hoạt ảnh có nên chỉ xảy ra một lần hay không - trong khi cuộn xuống
     mirror: false, // liệu các phần tử có nên hoạt ảnh trong khi cuộn qua chúng hay không
     anchorPlacement: 'top-bottom', // xác định vị trí của phần tử liên quan đến cửa sổ sẽ kích hoạt hoạt ảnh
});

   // const dishGridEl = Array.from(document.querySelectorAll('#dishGrid'));
   // if (dishGridEl.length > 0){
   //   // console.log(dishGridEl)
   //   dishGridEl.forEach(item => {
   //     item.setAttribute('data-aos', 'fade-up');
   //   })
   // }