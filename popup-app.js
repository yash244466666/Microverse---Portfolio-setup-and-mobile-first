const body = document.querySelector('body');
const section = document.createElement('section');
// let popup = document.getElementById('popup');

const info = [{
  title: 'Multi-post stories',
  tch_dtls: ['html', 'bootstrap', 'Ruby on Rails'],
  mn_img_link: './res/popup-img.png',
  x_img_link: './res/popup-Cancel.svg',
  dis_txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam odit quis saepe fuga porro inventore ipsum cum. Nulla velit aspernatur nesciunt quo eum nobis. Non neque ut accusantium tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam odit quis saepe fuga porro inventore ipsum cum. Nulla velit aspernatur nesciunt quo eum nobis. Non neque ut accusantium tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam odit quis saepe fuga porro inventore ipsum cum. Nulla velit aspernatur nesciunt quo eum nobis. Non neque ut accusantium tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam odit quis saepe fuga porro inventore ipsum cum. Nulla velit aspernatur nesciunt quo eum nobis. Non neque ut accusantium tempora?',
}];

body.appendChild(section);
section.className = 'pop-sec';

section.innerHTML = `
<div id="popup" class="popup pop-hidden">
    <div class="popup-bg"></div>
    <div class="popup-content">
        <div class="popup-header"><h1>${info[0].title}</h1><i id="popup-x" class="fa-sharp fa-solid fa-x"></i></div>
        <div class="popup-skill-btn">
            <button>${info[0].tch_dtls[0]}</button>
            <button>${info[0].tch_dtls[1]}</button>
            <button>${info[0].tch_dtls[2]}</button>
        </div>
        <div class="popup-main-content">
            <div class="popup-img"><img src="${info[0].mn_img_link}" alt="Popup image"></div>
            <div class="popup-text"><p>${info[0].dis_txt}</p></div>
            <div class="popup-content-btn-div">
                <button class="popup-content-btn1">See Live <img src="./res/see-live-ico.svg" alt="See Live"></button>
                <button class="popup-content-btn2">See Source <img src="./res/popup-GitHub.svg" alt="See Source"></button>
            </div>
        </div>
    </div>
</div>
`;

const popupBg = document.createElement('div');
popupBg.className = 'popup-bg';

const project1btn = document.getElementById('project1-btn');
project1btn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const popupX = document.getElementById('popup-x');
popup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const p2btn1 = document.getElementById('p2btn1');
p2btn1.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});
const p2btn11 = document.getElementById('p2btn11');
p2btn11.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const p2btn2 = document.getElementById('p2btn2');
p2btn2.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const p2btn3 = document.getElementById('p2btn3');
p2btn3.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const p2btn4 = document.getElementById('p2btn4');
p2btn4.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const p2btn5 = document.getElementById('p2btn5');
p2btn5.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});

const p2btn6 = document.getElementById('p2btn6');
p2btn6.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.toggle('pop-hidden');
});
