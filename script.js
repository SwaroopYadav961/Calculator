let r
function c()
{
 document.getElementById("textval").value = "";
}
function display(dis)
{
    document.getElementById("textval").value+=dis;
    r=document.getElementById("textval").value;
}
function solution()
{
    let x=document.getElementById("textval").value;
    let y;
    try {
        y=eval(x);
    }
    catch(err) {
        // document.getElementById("textval").value="Error!";
    }
    if(y==undefined) document.getElementById("textval").value="Error!";
                else document.getElementById("textval").value=y;
}
function delet() {
    document.getElementById("textval").value=document.getElementById("textval").value.slice(0,-1);
}
function recap()
{
    document.getElementById("textval").value=r;
}
