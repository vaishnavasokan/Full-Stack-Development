function getDetails()
{ 
    var res = document.getElementById("result");
    if(res.style.display=="none")
        res.style.display="block";  
        
    var sname=document.getElementById("stname").value;
    var sem= document.getElementById("semname").value;
    var ecode=document.getElementById("excode").value;

    if (sname==null || sname=="" ||  ecode==null || ecode=="")
    {  
        alert("Please enter required fields");
        document.getElementById("alert1").style.display="auto";
        return;
    }
    


    var subject = Array();
    for(var i=1; i<=6; i++)
    {
        subject[i]=document.getElementById("sub"+i).value;
        document.getElementById("sb"+i).innerHTML=subject[i];
    }

    //var s1=document.getElementById("sub1").value;
    //var s2=document.getElementById("sub2").value;
    //var s3=document.getElementById("sub3").value;
    //var s4=document.getElementById("sub4").value;
    //var s5=document.getElementById("sub5").value;
    //var s6=document.getElementById("sub6").value;

    var m = Array();
    var t = Array();
    var per=Array();
    for(var i=1; i<=6; i++)
    {
        m[i]=document.getElementById("mk"+i).value;
        document.getElementById("mr"+i).innerHTML=m[i];
        t[i]=document.getElementById("tot"+i).value;
        document.getElementById("tt"+i).innerHTML=t[i];
        per[i]=(m[i]/t[i])*100;
    }
    //console.log(m);
    
    var grade=Array();
    for(var i=1;i<=6;i++)
    {
        if(parseInt(per[i])<50)
            grade[i]="F";
        else if((parseInt(per[i])>=50) && (parseInt(per[i])<=54))
            grade[i]="D";
        else if((parseInt(per[i])>=55) && (parseInt(per[i])<=64))
            grade[i]="D+";
        else if((parseInt(per[i])>=65) && (parseInt(per[i])<=69))
            grade[i]="C";
        else if((parseInt(per[i])>=70) && (parseInt(per[i])<=74))
            grade[i]="C+";
        else if((parseInt(per[i])>=75) && (parseInt(per[i])<=79))
            grade[i]="B";
        else if((parseInt(per[i])>=80) && (parseInt(per[i])<=84))
            grade[i]="B+";
        else if((parseInt(per[i])>=85) && (parseInt(per[i])<=89))
            grade[i]="A";
        else if((parseInt(per[i])>=90) && (parseInt(per[i])<=94))
            grade[i]="A+";
        else if((parseInt(per[i])>=95) && (parseInt(per[i])<=100))
            grade[i]="S";   
            
        document.getElementById("gd"+i).innerHTML=grade[i];
    }
    var status ="PASSED";
    document.getElementById("studname").innerHTML=sname;
    document.getElementById("semester").innerHTML=sem;
    document.getElementById("examc").innerHTML=ecode;   
    for(var i=0;i<=6;i++)
    {
        if(grade[i]=="F")
        {   
            status="FAILED";
            break;
        }
        
        
    }
    document.getElementById("stat").innerHTML=status;
    if(status=="FAILED")
    document.getElementById("stat").style.color="red";
    else
    document.getElementById("stat").style.color="green";

}
