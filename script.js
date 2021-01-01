const cube = document.querySelector('.cube');
let y = 0, x = 0, z = 0, timer;
let play = true;
const rot = ()=>{
     if(play){
          timer = setInterval(()=>{
               cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
          }, 100)
     } else {
          clearInterval(timer)
     }
   
}
rot()
document.querySelector('.top-x-control').addEventListener('click', ()=>{
     cube.style.transform = `rotateX(${x +=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.bottom-x-control').addEventListener('click', ()=>{
     cube.style.transform = `rotateX(${x -=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
document.querySelector('.left-y-control').addEventListener('click', ()=>{
     cube.style.transform = `rotateX(${x}deg) rotateY(${y +=20}deg) rotateZ(${z}deg)`
})
document.querySelector('.right-y-control').addEventListener('click', ()=>{
     cube.style.transform = `rotateX(${x}deg) rotateY(${y -=20}deg) rotateZ(${z}deg)`
})
document.querySelector('.top-z-control').addEventListener('click', ()=>{
     cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -=20}deg)`
})
document.querySelector('.bottom-z-control').addEventListener('click', ()=>{
     cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z +=20}deg)`
})
let pp = document.querySelector('.pause #pp');
document.querySelector('.pause').addEventListener('click', ()=>{ 
 
  if(pp.classList[1] === 'fa-play'){
     play = false;
     pp.classList.remove('fa-play');
     pp.classList.add('fa-pause');
     
  } else {
     play = true;
     pp.classList.remove('fa-pause');
     pp.classList.add('fa-play');
     

  }
  rot();
  
})
// git init 
//git status
// git add *
// git commit -m "write sth"
// git push -u origin master
//git remote set-url git@github.com:gitusername/repository.git