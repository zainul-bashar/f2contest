let element1=document.getElementsByTagName("input")[0].value;
let element2=document.getElementsByTagName("input")[1].value;
let element3=document.getElementsByTagName("input")[2].value;
let element=document.getElementsByTagName("input").value;
let btn=document.querySelector("button");
btn.addEventListener("click",addEmployees)
function addEmployes(){
    if(element1!=null && element2!=null && element3!=null){
        alert("employyee added successfully");
        console.log(element.innerHTML)
    }
    else{
        alert("all fields are required");
    }
}