var string='';
var btn= document.querySelectorAll('button');
var arr=Array.from(btn);
arr.forEach(button => {
button.addEventListener("click",function(e){
    
    if(e.target.innerHTML=="C"){
        string="";
        document.querySelector('input').value=string;
    }else if(e.target.innerHTML=="=")
    {
      string=eval(string);
      document.querySelector('input').value=string;   
    }
    else{
    string=string + e.target.innerHTML;
    document.querySelector('input').value=string;
}

})    
});

