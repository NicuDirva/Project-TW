{
    var par1=document.getElementById("s1");
    var par2=document.getElementById("s2");
    var par3=document.getElementById("s3");
    var par4=document.getElementById("s4");
    var par5=document.getElementById("s5");
    var par6=document.getElementById("s6");
    document.body.onkeyup=function(event)
    { 
    switch (event.key) {
     case "r":
     par1.style.color="red";
     par1.style.backgroundColor ="#001a1a"
     break;
     case "g":
     par2.style.color="green";
     par2.style.backgroundColor ="#001a1a"
     break;
     case "b":
     par3.style.color="blue";
     par3.style.backgroundColor ="#001a1a"
     break;
     case "m":
     par4.style.color="purple";
     par4.style.backgroundColor ="#001a1a"
     break;
     case "p":
     par5.style.color="#4d2600";
     par5.style.backgroundColor ="#001a1a"
     break;
     case "c":
     par6.style.color="#00cccc";
     par6.style.backgroundColor ="#001a1a"
     break;
     default:
     alert("Alta tasta"); return; 
     }
    document.getElementById("tasta").innerHTML=event.key;
    }

    }
    