
function getHistory()
{
    return document.getElementById("history").innerText;
}
function printHistory(num){
    document.getElementById("history").innerText = num;
}
function getOutput(){
    return document.getElementById("output").innerText;
}
function printOutput(num){
    if(num=="")
    {
        document.getElementById("output").innerText = num;
    }
    else
        document.getElementById("output").innerText = num;
}




const operator = document.getElementsByClassName("operator");
for(let i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click', function() {
        if(this.value == "allclear")
        {
            printHistory("");
            printOutput("");
        }
        if(this.value == "backspace")
        {
            let output = getOutput().toString();
            if(output)
                {
                    output= output.substr(0, output.length-1);
                    printOutput(output);
                }
        }
        else
        {
            let output = getOutput();
            let history = getHistory();
            if(output=="" && history != "")
            {
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!="")
            {
                history = history + output;
                if(this.value == "=")
                {
                    let result = eval(history);
                    result = parseFloat(result).toPrecision(13);
                    printOutput(result);
                    printHistory("");
                }
                else
                    {
                        history = history + this.value;
                        printHistory(history);
                        printOutput("");
                    }
            }
        }
    })
}






const numbers = document.getElementsByClassName("number");
for(let i=0;i<numbers.length;i++)
{
    numbers[i].addEventListener('click', function() {
        let output = getOutput();
        if(output!=NaN)
        {
            if(this.value == ".")
            {
                output = output.toString();
                if(!output.includes("."))
                    {
                        output = output + "."; 
                        printOutput(output);
                    }
                    
            }
            else
            {output= output+this.value;
            printOutput(output);}
        }
    })
}

document.addEventListener("keydown",function(e){
    let element;
    if(e.key == "c" || e.key =="C")
    {
         element = document.querySelector(`button[value="allclear"]`);

    }
    else if(e.key == "Backspace")
        element = document.querySelector(`button[value="backspace"]`);
    else if(e.key == "Enter")
        element = document.querySelector(`button[value="="]`);   
        else if(e.key == "/")
         element = document.querySelector(`button[value="/"]`);
    else
         element = document.querySelector(`button[value="${e.key}"]`);
    element.click();
})