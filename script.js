const input=document.getElementById("display-num");


const nums=document.getElementById("num-btns");
nums.addEventListener("click",(e)=>
    {   
        const number=e.target.id;
        if(/*number!='/'&&number!='x'&&number!='+'&&number!='-'&&*/number!='del'&&number!='num-btns'&&number!='equal')
        {   const input=document.getElementById("display-num");

            if(input.innerHTML=='0')
            {
                if(number!='/'&&number!='x'&&number!='+'&&number!='-')
                    { input.innerHTML=number;}
            }
            else
            {
                input.innerHTML=input.innerHTML+number;
            }
        
        }
        else if(number=="del"&&input.innerHTML!="0")
        {
            if(input.innerHTML.length!=1)
            {
                let str=input.innerHTML;
                str=str.slice(0,-1)
                input.innerHTML=str;
            }
            else
                input.innerHTML="0"
        }
       else
       {
        if(number=='equal')
        {
            let expression=input.innerHTML;
            expression=expression.replaceAll("x","*");
            let solve=eval(expression);
            console.log(solve)
            console.log(solve.toString());
            input.innerHTML=solve.toString();
            
        }
       }
    });
function insert_num()
{
    
}