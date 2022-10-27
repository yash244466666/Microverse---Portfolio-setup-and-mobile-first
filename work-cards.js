const workSec = document.getElementById('work-sec');
const div = document.createElement('div');
const cardInfo = [{
  link: '/index.html',
}];

workSec.appendChild(div);

div.innerHTML = `<div class="works">
<div class="project-1 p1">
    <img class="project-1-img" src="res/img_Placeholder.png" alt="Project-1">
    <div class="project1-txt">
        <h3 class="project-1-h3">Multi-Post Stories</h3>
        <p class="project-1-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the .</p>
    </div>
    <div class="siklls">
        <ul class="skills-ul">
            <li><a href="${cardInfo[0].link}">css</a></li>
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
        <a id="project1-btn">See Project</a>
    </div>
</div>
<div class="project-2 p2">
        <h3 class="project-2-h3 p2h">Profesional Art </br> Printing Data</h3>
        <p class="project-2-p p2p">A daily selection of privately </br> personalized reads; no accounts or </br> sign-ups required. has been the </br> industry's standard</p>
    <div class="siklls skills2">
        <ul class="skills-ul p2ul">
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
        <button id="p2btn11" class="project-2-btn p2btn2">See Project</button>
    </div>
    <button id="p2btn1" class="project-2-btn p2btn">See Project</button>
</div>
<div class="project-2 p3">
        <h3 class="project-2-h3">Profesional Art </br> Printing Data</h3>
        <p class="project-2-p">A daily selection of privately </br> personalized reads; no accounts or </br> sign-ups required. has been the </br> industry's standard</p>
    <div class="siklls skills2">
        <ul class="skills-ul">
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
    </div>
    <button id="p2btn2" class="project-2-btn p3btn">See Project</button>
</div>
<div class="project-2 p4">
        <h3 class="project-2-h3">Profesional Art </br> Printing Data</h3>
        <p class="project-2-p">A daily selection of privately </br> personalized reads; no accounts or </br> sign-ups required. has been the </br> industry's standard</p>
    <div class="siklls skills2">
        <ul class="skills-ul">
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
    </div>
    <button id="p2btn3" class="project-2-btn p4btn">See Project</button>
</div>
<div class="project-2 p5">
        <h3 class="project-2-h3">Profesional Art </br> Printing Data</h3>
        <p class="project-2-p">A daily selection of privately </br> personalized reads; no accounts or </br> sign-ups required. has been the </br> industry's standard</p>
    <div class="siklls skills2">
        <ul class="skills-ul">
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
    </div>
    <button id="p2btn4" class="project-2-btn p5btn">See Project</button>
</div>
<div class="project-2 p6">
        <h3 class="project-2-h3">Profesional Art </br> Printing Data</h3>
        <p class="project-2-p">A daily selection of privately </br> personalized reads; no accounts or </br> sign-ups required. has been the </br> industry's standard</p>
    <div class="siklls skills2">
        <ul class="skills-ul">
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
    </div>
    <button id="p2btn5" class="project-2-btn p6btn">See Project</button>
</div>
<div class="project-2 p7">
        <h3 class="project-2-h3">Profesional Art </br> Printing Data</h3>
        <p class="project-2-p">A daily selection of privately </br> personalized reads; no accounts or </br> sign-ups required. has been the </br> industry's standard</p>
    <div class="siklls skills2">
        <ul class="skills-ul">
            <li><a a href="${cardInfo[0].link}">html</a></li>
            <li><a a href="${cardInfo[0].link}">bootstrap</a></li>
            <li><a a href="${cardInfo[0].link}">Ruby</a></li>
        </ul>
    </div>
    <button id="p2btn6" class="project-2-btn p7btn">See Project</button>
</div>
</div>`;
