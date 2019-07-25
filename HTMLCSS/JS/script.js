function add(a,b)
    {
        var c= a+b;
        return c;
    }

    function subtract(a,b)
    {
        var c=a-b;
        return c;
    }
    function multiply(a,b)
    {
        var c= a*b;
        return c;
    }
    function divide(a,b)
    {
        var c=a/b;
        return c;
    }

    function getValue()
    {
        var n1=parseFloat(document.getElementById("num1").value);
        var n2 = parseFloat(document.getElementById("num2").value);
        var op=document.getElementById("operations").value;
        var r;
        if(op=="Addition")
        {
            r=add(n1,n2);
            
        }
        else if(op=="Subtraction")
        {
            r=subtract(n1,n2);
        }
        else if(op=="Multiplication")
        {
            r=multiply(n1,n2);
        }
        else if(op=="Division")
        {
            r=divide(n1,n2);
        }
        document.getElementById("result").innerHTML=r;

    }