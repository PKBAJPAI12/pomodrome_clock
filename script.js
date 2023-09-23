let hh=document.getElementById("minute");
let mm=document.getElementById("second");
let st=document.getElementById("sessiontime");
let bt=document.getElementById("breaktime");
let sp=document.getElementById("sessionplus");
let sm=document.getElementById("sessionminus");
let bp=document.getElementById("breakplus");
let bm=document.getElementById("breakminus");
let cnt=document.getElementById("control");
let rst=document.getElementById("reset");

let isRunning=false;
hh.innerHTML=st.innerHTML;
mm.innerHTML=0;

let h=parseInt(hh.innerHTML);
let m=parseInt(mm.innerHTML);
let val;
let countdown=h*60+m;
let setsession=st.innerHTML;
let setbreak=bt.innerHTML;
let resetvalue=countdown;
sp.addEventListener("click",function(){
  if(isRunning==false){
    setsession++;
st.innerHTML=setsession;
val=parseInt(setsession);
countdown=val*60+m;
resetvalue=countdown;
updateTime();
}   
})

  bp.addEventListener("click",function(){
    if(isRunning==false){
      setbreak=bt.innerHTML;
      setbreak++;    
    bt.innerHTML=setbreak;
    //val=parseInt(countdown);
    h=parseInt(setbreak);
    countdown=h;
    updateTime();
    }
  })


  bm.addEventListener("click",function(){
    setbreak=bt.innerHTML;
    setbreak--;    
  bt.innerHTML=setbreak;
//  val=parseInt(countdown);
  console.log(val);
  console.log(countdown);
  h=parseInt(setbreak);
  countdown=h;
  updateTime();
  })
  


sm.addEventListener("click",function(){
  if(isRunning==false){
    if(setsession>0){
      setsession--;
  st.innerHTML=setsession;
  val=parseInt(setsession);
countdown=val*60+m;
  resetvalue=countdown;
  updateTime();
    }
    
}   
})

  let clockinterval;
  function countdownstart(){
    clockinterval=setInterval(function()
  {countdown--; updateTime();},1000);
  }
  console.log(clockinterval);
function countdownstop(){
  clearInterval(clockinterval);
}

cnt.addEventListener("click",function(){
  if(isRunning==false){
  isRunning=true;
  console.log(isRunning);
  cnt.innerHTML="Pause";
  countdownstart();
  //h=hh.innerText;
  //m=mm.innerText;
  //countdown=((h*60)+m);
}
else if(isRunning) {
  isRunning=false;
  cnt.innerHTML="Start";
  console.log(isRunning);
  h=parseInt(hh.innerHTML);
  m=parseInt(mm.innerHTML);
  countdown=h*60+m;
  countdownstop();
    }
})

rst.addEventListener("click",function()
{
if(isRunning){
  isRunning=false;
  countdownstop();
  cnt.innerHTML="Start";
  hh.innerHTML=15;
mm.innerHTML=0;
  h=parseInt(hh.innerHTML);
  m=parseInt(mm.innerHTML);
  countdown=h*60+m;
 }
 else{
  cnt.innerHTML="Start";
  hh.innerHTML=15;
  mm.innerHTML=0;
  h=parseInt(hh.innerHTML);
  m=parseInt(mm.innerHTML);
  countdown=h*60+m;
 } 
})

function updateTime(){
  if(countdown>=0){
  hh.innerHTML=parseInt(countdown/60);
   mm.innerHTML=countdown%60;  
  }
  else if(resetvalue>0){
    isRunning=true;
      cnt.innerHTML="Pause";
      countdown=resetvalue;
      hh.innerHTML=parseInt(countdown/60);
      mm.innerHTML=countdown%60;
      resetvalue=0;
      countdownstart();
      }
  else{
  hh.innerHTML=0;
 mm.innerHTML=0;
  }
  
}
