var counter;
var ms = 0, s = 0, m = 0;
var time = document.querySelector('.time');
var start=document.querySelector('.start');
var stop_timer=document.querySelector('.stop');
var reset_timer=document.querySelector('.reset');
start.addEventListener('click', function(){
   if(!counter){
    counter = setInterval(run, 10)
   } 
         function run(){
            time.textContent = m + ":" + s + ":" + ms ;
            ms++
            if(ms == 100){
                ms = 0;
                s++
            }
            if(s == 60){
                s = 0;
                m ++;
            }
         }
})
stop_timer.addEventListener('click', function(){
    clearInterval(counter)
    counter = false
})
reset_timer.addEventListener('click', function(){
    clearInterval(counter);
    counter= false;
ms = 0, s= 0 , m = 0;
time.textContent = m + ":" + s + ":" + ms;
})