function getDetails()
{ 
    var sname=document.getElementById("stname").value;
    var sem= document.getElementById("semname").value;
    var ecode=document.getElementById("excode").value;
    
    var s1=document.getElementById("sub1").value;
    var s2=document.getElementById("sub2").value;
    var s3=document.getElementById("sub3").value;
    var s4=document.getElementById("sub4").value;
    var s5=document.getElementById("sub5").value;
    var s6=document.getElementById("sub6").value;

    var m = Array();
    var t = Array();
    var per=Array();
    for(var i=1; i<=6; i++)
    {
        m[i]=document.getElementById("mk"+i).value;
        t[i]=document.getElementById("tot"+i).value;
        per[i]=(m[i]/t[i])*100;
    }
    
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
    }
    //console.log(m);
    // m[1]=document.getElementById("mk3").value;
    // m[2]=document.getElementById("mk4").value;
    // m[3]=document.getElementById("mk5").value;
    // m[4]=document.getElementById("mk3").value;
    // m[5]=document.getElementById("mk4").value;
    // m[6]=document.getElementById("mk5").value;

    // var m1=document.getElementById("mk1").value;
    // var m2=document.getElementById("mk2").value;
    // var m3=document.getElementById("mk3").value;
    // var m4=document.getElementById("mk4").value;
    // var m5=document.getElementById("mk5").value;
    // var m6=document.getElementById("mk6").value;

    var s1=document.getElementById("sub1").value;
    var s2=document.getElementById("sub2").value;
    var s3=document.getElementById("sub3").value;
    var s4=document.getElementById("sub4").value;
    var s5=document.getElementById("sub5").value;
    var s6=document.getElementById("sub6").value;

    document.getElementById("studname").innerHTML=sname;
    document.getElementById("semester").innerHTML=sem;
    document.getElementById("examc").innerHTML=ecode;

    for(var i=1;i<=6;i++)
    {
        document.getElementById("mr"+i).innerHTML=per[i].toString();   
    }

}
