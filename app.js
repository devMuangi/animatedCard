//movement anime
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const potraite = document.querySelector('.potraite img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const options = document.querySelector('.options');

//moving animation event
container.addEventListener("mousemove", (e)=>{
    console.log(e.pageX, e.pageY)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});

//Animate In
container.addEventListener("mouseenter", (e)=> {
    card.style.transition = 'none';
    //Popout
    title.style.transform = "translateZ(150px)";
    potraite.style.transform = "translateZ(150px) rotateZ(-45deg)";
    description.style.transform = "translateZ(150px)";
    options.style.transform = "translateZ(0px)";
    potraite.style.transform = "translateZ(0px)";
});


//Animate Out
container.addEventListener("mouseleave", (e)=> {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    potraite.style.transform = "translateZ(0) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    options.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";


});

