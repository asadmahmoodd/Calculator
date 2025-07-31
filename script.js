const input=document.getElementById("display-num");


const nums=document.getElementById("num-btns");
nums.addEventListener("click",(e)=>
    {   
        const number=e.target.id;
        if(number!='/'&&number!='x'&&number!='+'&&number!='-'&&number!='del'&&number!='num-btns'&&number!='equal')
        {   const input=document.getElementById("display-num");

            if(input.value=='0')
                input.value=number;
            else
                input.value=input.value+number;
        
        }
        else if(number=="del"&&input.value!="0")
        {
            if(input.value.length!=1)
            {
                let str=input.value;
                str=str.slice(0,-1)
                input.value=str;
            }
            else
                input.value="0"
        }

    });
function insert_num()
{
    
}