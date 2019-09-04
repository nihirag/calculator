function getFormattedNumber(num)
{
    if(num == "-"){
        return "";
    }
    let n = Number(num);
    return n.toLocaleString("en");
}

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
        document.getElementById("output").innerText = getFormattedNumber(num);
}

function reverseFormat(num)
{
    return Number(num.replace(/,/g,''));
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
            let output = reverseFormat(getOutput()).toString();
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
                output = output==""?output:reverseFormat(output);
                history = history + output;
                if(this.value == "=")
                {
                    let result = eval(history);
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
        let output = reverseFormat(getOutput());
        if(output!=NaN)
        {
            output= output+this.value;
            printOutput(output);
        }
    })
}