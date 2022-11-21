function add(){number+=Math.floor((Math.random()*6)+1);document.getElementById("number").innerHTML=number;setTimeout("add()",10000);}        
           function generate(){number=Math.floor(Math.random()*342)+803;document.getElementById("number").innerHTML=number;add();}
           generate();