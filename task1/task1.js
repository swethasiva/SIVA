var flag =1 ;
	function openMenu(e){
		if(flag==0)
	{document.getElementById('bart').style.display = 'block';
     flag=1;}

else
	{document.getElementById('bart').style.display ='none';
      flag=0;}
}




function todolist()
{
var item = document.getElementById("todoinput").value;
if(item.length==0)
{ 
	//alert("you need to write something") ;
  document.getElementById('err1').innerHTML="* mandatory!!!";
  document.getElementById('err1').style.color="red";
}
else
{
	var text =document.createTextNode(item);
var newitem=document.createElement("li");


 var sel1 = document.getElementById('priority').value;

//alert(sel1);

  if(sel1 == "1"){

   newitem.style.backgroundColor="#E86565";
   newitem.appendChild(text);
//newitem.style.visibility="show";
document.getElementById("todolist").appendChild(newitem);
   }


   else if(sel1 == "2"){
   
      newitem.style.backgroundColor="#c1f7f1";
      newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
   }

   
else if(sel1 == "3"){

     newitem.style.backgroundColor="#FCF3CF";
     newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
   }


}
var myNodelist = document.getElementsByTagName("LI");
var i=myNodelist.length-1;
var span =document.createElement("BUTTON");
var txt =document.createTextNode("TASK COMPLETED");
span.className="close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
var close = document.getElementsByClassName("close");


  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }


   


}





 function backcolor() {
  

 }


