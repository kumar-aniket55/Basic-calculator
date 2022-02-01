let result_string="";
let num;
function input_value(x)
{
    if(document.getElementById("input").value=="INVALID")
    {
        document.getElementById("input").value="";
        result_string="";
    }
          
    if(document.getElementById("input").value=='ENTER')
    {
        document.getElementById("input").value="";
    }
    if(x=="!")
    {
         num=parseInt(result_string);
    let result=num;
    if(result==0)
    {
        result=1;
    }
    else{
        for(let i=num-1;i>1;i--)
    {
        result*=i;
    }

    }
    
    result_string=result;
    document.getElementById("input").value+=x;
    }
    else if(x=="%")
    {
        document.getElementById("input").value+=x;
    result_string+="/100";
    }
    else if(x=="e")
    {
        document.getElementById("input").value+=x;
        result_string+="2.71828182846";

    }
    
   else
   {
    document.getElementById("input").value+=x;
    result_string+=x;
   }

}
function pi(x)
{
     if(document.getElementById("input").value=="INVALID")
    {
        document.getElementById("input").value="";
        result_string="";
    }
          
    if(document.getElementById("input").value=='ENTER')
    {
        document.getElementById("input").value="";
    }
    document.getElementById("input").value+=x;
    result_string+="3.14159265359";

}
function clear_input()
{
    document.getElementById("input").value='ENTER';
    result_string="";

}
function expo()
{
    result_string+="**";
    document.getElementById("input").value+="^";
    
    // result_string+="**";

}
function output_result()
{
     
      try {
        document.getElementById("input").value=eval(result_string);
      
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById("input").value="INVALID"
            console.log(e);
        }
    }

   
}
function factorial()
{
    let num=parseInt(result_string);
    let result=num;
    for(let i=num-1;i>1;i--)
    {
        result*=1;
    }
    result_string=result;
}
