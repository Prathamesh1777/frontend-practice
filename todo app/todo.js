const input=document.getElementById("input");
const button=document.getElementById("btn");
const list=document.getElementById("list1")

button.addEventListener("click",function(){
if(input.value ==="")
{
    alert("write something");
} 
else{
     let li=document.createElement("li");
     li.innerHTML=input.value;
     list.appendChild(li);
     input.value="";
     let span=document.createElement("span");
     span.innerHTML="&#10005";
     li.appendChild(span);
}

});


list.addEventListener("click",function(e){
     if(e.target.tagName ==="LI"){
    e.target.classList.toggle("clicked");   
    

}
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
    }
  }  )
