let showclock = document.querySelector('p')

let clocktimer

function setclock(){
  let clock= new Date();  
  let hour= document.querySelector('.hour')
  let minutes = document.querySelector('.minutes')
  let seconds = document.querySelector('.seconds')

 hour.style.transform = `rotate(${clock.getHours()*30+180}deg)`
 minutes.style.transform = `rotate(${clock.getMinutes()*6+180}deg)`
 seconds.style.transform = ` rotate(${clock.getSeconds()*6+180}deg)`

  showclock.textContent= `${clock.getHours()}H:${clock.getMinutes()}M:${clock.getSeconds()}S`
  clocktimer=setTimeout(()=>{
       
       setclock()

  },1000)
}

setclock();

let currentelm=null
  let timer
  let time1;
  let time2
 
elem.addEventListener('mouseenter',function(e){
   
  currentelm=e.target
   time1= Date.now()
   
   timer=setTimeout(function(){
     let time1= Date.now()
      if(currentelm){
       tooltip.hidden=false;
      }
   },400)
         elem.addEventListener('mousemove',function(e){
        time2= Date.now()
      if(time2 - time1 >= 500){
     tooltip.hidden=false;
     time1=time2
     }
})

})
elem.addEventListener('mouseleave',function(e){
    tooltip.hidden=true; 
     currentelm=null
     clearTimeout(timer)
     time1=0;
     time2=0 
})