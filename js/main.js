'use strict';

{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    // const results=['大吉','中吉','凶','末吉'];
    // const results=['大吉','大吉','大吉','凶'];
    // const n=Math.floor(Math.random()*results.length);
    // btn.textContent=results[n];
    // btn.textContent=n;
    // switch(n){
    //   case 0:
    //     btn.textContent='大吉';
    //     break;
    //   case 1:
    //     btn.textContent='中吉';
    //     break;
    //   case 2:
    //     btn.textContent='凶';
    //     break;
    // }
    const n=Math.random();
    if (n<0.05){ //5%の確立
      btn.textContent='大吉';
    }else if(n<0.2){
      //15%の確率
      btn.textContent='中吉';
    }else{
      //残りの80％
      btn.textContent='凶';
    }
  });
  btn.addEventListener('mousedown',()=>{
    btn.classList.add('pressed');
  })
  btn.addEventListener('mouseup',()=>{
    btn.classList.remove('pressed');
  })

}
