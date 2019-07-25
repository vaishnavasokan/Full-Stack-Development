var i=0;
var mv = Array();

function getName()
{
    mv[i]=document.getElementById("name").value;
    i++;

var s="";
for(var j=0;j<mv.length;j++)
{
    s+=mv[j]+"<br>";
    
}

document.getElementById("mname").innerHTML=s;

}

