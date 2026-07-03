/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #faf8f5;
  color: #333;
  line-height: 1.7;
}

/* CABEÇALHO */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8%;
  z-index: 1000;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: bold;
}

nav a {
  text-decoration: none;
  color: #444;
  margin-left: 30px;
  transition: .3s;
}

nav a:hover {
  color: #b08d72;
}

/* HERO */

.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 120px 8% 60px;
}

.hero-text {
  flex: 1;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 60px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  color: #666;
  margin-bottom: 35px;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  width: 100%;
  max-width: 420px;
  border-radius: 30px;
  box-shadow: 0 30px 60px rgba(0,0,0,.12);
}

/* BOTÕES */

.buttons {
  display: flex;
  gap: 20px;
}

.btn-primary,
.btn-secondary {

  padding: 15px 30px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 600;
  transition: .3s;

}

.btn-primary {

  background: #b08d72;
  color: white;

}

.btn-primary:hover {

  transform: translateY(-3px);

}

.btn-secondary {

  border:2px solid #b08d72;
  color:#b08d72;

}

.btn-secondary:hover{

  background:#b08d72;
  color:white;

}

/* SEÇÕES */

section{

padding:100px 8%;

}

section h2{

font-family:'Playfair Display', serif;
font-size:42px;
margin-bottom:40px;

}

/* CARDS */

.cards{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;

}

.card{

background:white;
padding:35px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.06);
transition:.3s;

}

.card:hover{

transform:translateY(-8px);

}

.card h3{

margin-bottom:15px;

}

/* CONTATO */

#contato{

text-align:center;

}

#contato p{

margin-bottom:15px;

}

/* RODAPÉ */

footer{

padding:40px;
text-align:center;
background:white;

}

/* RESPONSIVO */

@media(max-width:900px){

header{
flex-direction:column;
gap:15px;
}

nav{
display:flex;
flex-wrap:wrap;
justify-content:center;
}

nav a{
margin:8px;
}

.hero{
flex-direction:column-reverse;
text-align:center;
}

.hero h1{
font-size:42px;
}

.hero p{
font-size:18px;
}

.buttons{
justify-content:center;
flex-wrap:wrap;
}

.hero-image img{
max-width:320px;
}
}

/* ANIMAÇÕES */
section{
opacity:0;
transform:translateY(60px);
transition:all .8s ease;
}

section.show{
opacity:1;
transform:translateY(0);
}

nav a.active{
color:#b08d72;
font-weight:600;
}
