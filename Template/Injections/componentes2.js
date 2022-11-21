
let vsp = document.querySelector('.videoSpace');

let cent = document.querySelector('.enter');



let ctrzy = document.querySelector('.centralizar');
let btngo = document.querySelector('.roletalink');

btngo.addEventListener('click',function(){
   ctrzy.removeChild(btngo);
})


//let boobl = document.querySelector('#blockk');


/*let ader = document.querySelector('#qadr');

ader.addEventListener('click', function(){
   window.open(linkCkt);
})*/


let rodarl = document.querySelector('#rodar');

rodarl.addEventListener('click', function(){
      setTimeout(function(){
         window.location.assign(linkCkt)

      },12000)
})

