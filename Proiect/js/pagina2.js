window.onload = function()
{ 
    alert("Functioneza")
}

function buton_secret () {
    var b = document.getElementById("buton_secret");
    b.onclick = function(){alert("Meciurile echipei sunt transmise acum si pe INFO EXPRES TV");}
 }

 buton_secret()
 
 const myTimeout1 = setTimeout(rezumat1, 5000)

 function rezumat1()
 {
     document.getElementById("demo1").innerHTML = "Echipa a retrogradat"
 }

 function myStopFunction1()
 {
     clearTimeout( myTimeout1 ) 
 }

 const myTimeout2 = setTimeout(rezumat2, 5000)
 function rezumat2()
 {
     document.getElementById("demo2").innerHTML = "Echipa a promovat"
 }

 function myStopFunction2()
 {
     clearTimeout( myTimeout2 ) 
 }