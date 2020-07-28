function numberCalling(numberId)
{
    var element=document.getElementById(numberId).innerText ;
    console.log(element);
    var display=document.getElementById("display-box").value;
    var showValue=display+element;
    document.getElementById("display-box").value=showValue;
    return showValue;
    

}
function special(id){
    //var display=document.getElementById(id).innerText;
    if(id=="c"){
        document.getElementById("display-box").value="";
    }
    if(id=="equal-sign"){
        document.getElementById("display-box").value=eval(document.getElementById("display-box").value);
    }
}
