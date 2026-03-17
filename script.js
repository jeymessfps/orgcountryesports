document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

document.querySelector(link.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


tsParticles.load("particles-bg",{

particles:{

number:{
value:100
},

color:{
value:"#ffffff"
},

links:{
enable:true,
distance:160,
color:"#ffffff",
opacity:0.2
},

move:{
enable:true,
speed:1
},

size:{
value:{min:1,max:3}
},

opacity:{
value:0.4
}

}

});