///Coluna vertebral

async function start() {
try {

    let bg = document.body.style.backgroundImage=`url(${bgIMG})`;

    document.body.style.backgroundSize='cover';
    document.body.style.backgroundPosition='center';
    document.body.style.backgroundRepeat='no-repeat';
    document.body.style.backgroundAttachment='fixed';
   let bgC = document.body.style.backgroundColor=`${corBG}`;

 ////////////////////////



 ////////////////////////////

    await div1(); // Div com o geolocalizador
    await divGeral();// todo conteúdo vem aqui // NÃO APAGAR
    
    ////////////////////////////
    /// ADD / RMV ELEMENTOS
    
    await Elemento1();
    //await headLine();
    await checkTime(timerBtnckt);



} catch (error) {
    console.log(error);
}
  
}

function redirecionar() {  
    setTimeout(function(){
       alert('oi');
    }), 3000;
 }

function div1() {  
    //Método atual para consultas em API
    fetch('https://ipinfo.io/json').then(x => x.json()).then(
    y => { let nomeCidade = document.querySelector('.address');
          nomeCidade.textContent = y.city;});
    let d1 = document.createElement('div');
    d1.className = 'bvrm';
    d1.innerHTML = '<div class="infoCity">Você e outras pessoas de <b><span class="address"></span></b> foram selecionados para participar deste programa.</div>';
    document.body.appendChild(d1);
}

function divGeral(){
    let d2 = document.createElement('div');
    d2.className = 'container';
    document.body.appendChild(d2);

}

function Elemento1() {

    let d2 = document.querySelector('.container');
    //CriaçãoDaDiv
    let Divlogo = document.createElement("div")
    Divlogo.className='divlogo';

    //Criação da Imagem
    let logo = document.createElement("img")
    logo.src = imgElemento1;
    logo.className = 'logo';
    Divlogo.appendChild(logo);
    
    ////////
    d2.appendChild(Divlogo);
}

function headLine() {  
    let d2 = document.querySelector('.container');

    //Criação do Div
    let divHeadLine = document.createElement("div");
    divHeadLine.className = 'divHeadLine';

    //Criação do H3
    let headLine = document.createElement("h3");
    headLine.className = 'headLine';
    headLine.textContent = textHeadLine;

    divHeadLine.appendChild(headLine);

    //////

    d2.appendChild(divHeadLine);

}

function VideoDiv() {
    let d2 = document.querySelector('.container');
    let hhh = document.querySelector('.headerLine');
    
    let divTV = document.createElement("div");
    divTV.className = 'videoDiv';
   // divTV.innerHTML = `<div id="vid_63731d05916f4d000bfa42e9" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_63731d05916f4d000bfa42e9" src="https://images.converteai.net/68303d0c-902e-4ca5-a150-1a832bc13cd2/players/63731d05916f4d000bfa42e9/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_63731d05916f4d000bfa42e9" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_63731d05916f4d000bfa42e9">var s=document.createElement("script");s.src="https://scripts.converteai.net/68303d0c-902e-4ca5-a150-1a832bc13cd2/players/63731d05916f4d000bfa42e9/player.js",s.async=!0,document.head.appendChild(s);</script>`;   

    

    ///////

    d2.appendChild(divTV);
 //   hhh.innerHTML = '<p>oi</p>';




 function add(){number+=Math.floor((Math.random()*6)+1);document.getElementById("number").innerHTML=number;setTimeout("add()",10000);}        
 function generate(){number=Math.floor(Math.random()*342)+803;document.getElementById("number").innerHTML=number;add();}
 generate();



}


function checkTime(x) {

    setTimeout((a)=> {

        let ctrz = document.querySelector('.centralizar');
        let rlll = document.querySelector('.roletalink');
        rlll.style.display="block";
       

            //alert('oooooooooooi');
    }, x);
    
}



////Steps////
start();