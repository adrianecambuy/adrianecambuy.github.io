/* =====================================
   ADRIANE CAMBUY
   script.js
===================================== */

// HEADER GLASS AO ROLAR
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// REVEAL ANIMATION
const reveals = document.querySelectorAll(
".client-card,.service-card,.video-card,.about,.portfolio,.services,.cta,.hero,.tags span"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

reveals.forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});


// CONTADORES
const numeros = document.querySelectorAll(".numbers h3");

let iniciou = false;

function iniciarContadores(){

if(iniciou) return;

if(window.scrollY > document.querySelector(".about").offsetTop-350){

iniciou=true;

numeros.forEach(numero=>{

const texto = numero.innerText;

const alvo = parseInt(texto);

let atual = 0;

const incremento = alvo/60;

const intervalo = setInterval(()=>{

atual += incremento;

if(atual>=alvo){

numero.innerText=texto;

clearInterval(intervalo);

}else{

if(texto.includes("%")){

numero.innerText=Math.floor(atual)+"%";

}else if(texto.includes("+")){

numero.innerText=Math.floor(atual)+"+";

}else{

numero.innerText=Math.floor(atual);

}

}

},20);

});

}

}

window.addEventListener("scroll", iniciarContadores);


// FLOAT DA FOTO
const foto = document.querySelector(".hero-photo img");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

foto.style.transform=`translate(${x}px,${y}px)`;

});


// PARALLAX DOS GLOWS
const gradients=document.querySelectorAll(".gradient");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

gradients.forEach((g,index)=>{

const velocidade=(index+1)*12;

g.style.transform=`translate(${x*velocidade}px,${y*velocidade}px)`;

});

});


// HOVER 3D NOS CARDS
const cards=document.querySelectorAll(".client-card,.service-card,.video-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


// BOTÃO VOLTAR AO TOPO
const voltar=document.createElement("button");

voltar.innerHTML="↑";

voltar.className="backTop";

document.body.appendChild(voltar);

voltar.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

voltar.classList.add("show");

}else{

voltar.classList.remove("show");

}

});


// MENU MOBILE
const menu=document.querySelector(".menu-mobile");
const nav=document.querySelector("nav");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("open");
menu.classList.toggle("active");

});

}


// ANIMAÇÃO DE ENTRADA DA HERO
window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


// EFEITO MAGNÉTICO NOS BOTÕES
const botoes=document.querySelectorAll(".btn-primary,.btn-secondary,.btn-nav");

botoes.forEach(botao=>{

botao.addEventListener("mousemove",(e)=>{

const rect=botao.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

botao.style.transform=`translate(${x*0.15}px,${y*0.15}px)`;

});

botao.addEventListener("mouseleave",()=>{

botao.style.transform="translate(0,0)";

});

});
