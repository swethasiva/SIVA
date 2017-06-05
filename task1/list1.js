var sval=0;
var flag =1 ;
var priority=new Array(100);
	function openMenu(e){                             //function to display and hide the name bar
		if(flag==0)
	{document.getElementById('bart').style.display = 'block';
     flag=1;}

else
	{document.getElementById('bart').style.display ='none';
      flag=0;}
}


//localStorage.clear();

function todolist()                                 //function to add notes with priority into list
{ sval=0;
var item = document.getElementById("todoinput").value;
var item1 = document.getElementById('priority').value;
    
if(item.length==0)
{ 
	//alert("you need to write something") ;
  document.getElementById('err1').innerHTML="* mandatory!!!";
  document.getElementById('err1').style.color="red";
   
}
    

    
 else {
	var text =document.createTextNode(item);
var newitem=document.createElement("li");
var myNodelist = document.getElementsByTagName("LI");
var i=myNodelist.length;

 var sel1 = document.getElementById('priority').value;



  if(sel1 == "1"){

   newitem.style.backgroundColor="#E86565";
   newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
      priority[i]=1;
     
      
      addbtn();
   }


   else if(sel1 == "2"){
   
      newitem.style.backgroundColor="#c1f7f1";
      newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
        priority[i]=2;
      
       addbtn();
   }

   
else if(sel1 == "3"){

     newitem.style.backgroundColor="#FCF3CF";
     newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
     priority[i]=3;
      
    addbtn();
   }
else 
    {
         document.getElementById('err2').innerHTML="* mandatory!!!";
  document.getElementById('err2').style.color="red";
        nvalue=0;
    }


}
    


    


}

function addbtn ()                                // adding close button to each note
{
    var myNodelist = document.getElementsByTagName("LI");
var i=myNodelist.length-1;
var span =document.createElement("BUTTON");
var txt =document.createTextNode("TASK COMPLETED");
span.className="close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
var close = document.getElementsByClassName("close");
    



  close[i].onclick = function()
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
    
}





/*

function sort()
{  alert("called");
    if(sval==1)
        {
            alert("it is alredy sorted");
            
        }
    
    else {
     var myNodelist = document.getElementsByTagName("LI");
   
    for(var i=0;i<=myNodelist.length-1;i++)
        { 
            if(priority[i]==1)
                {
                   document.getElementById("sorted").appendChild(myNodelist[i]);
                }
            
        }
     for(var i=0;i<=myNodelist.length-1;i++)
        { 
            if(priority[i]==2)
                {
                   document.getElementById("sorted").appendChild(myNodelist[i]);
                    
                }
            
        }
 for(var i=0;i<=myNodelist.length-1;i++)
        { 
            if(priority[i]==3)
                {
                   document.getElementById("sorted").appendChild(myNodelist[i]);
                }
            
        }
            sval=1;
        document.getElementById('todolist').style.display ='none';
    }
    
    
}

*/


function getelement()                                                //reconstructing data from local storage
        {
            
         var item=localStorage.getItem("element");
            var item1=localStorage.getItem("prior");
            item=item.split(",");
            item1=item1.split(",");
for(var i=0;i<item.length;i++)
     { 
         var text =document.createTextNode(item[i]);
         var newitem=document.createElement("li");
              
              if(item1[i]==1)
              {

   newitem.style.backgroundColor="#E86565";
   newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
                   addbtn();

              }


   else if(item1[i]==2)
        {
   
      newitem.style.backgroundColor="#c1f7f1";
      newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
             addbtn();
   
        }

   
else if(item1[i]==3)
        {

     newitem.style.backgroundColor="#FCF3CF";
     newitem.appendChild(text);

document.getElementById("todolist").appendChild(newitem);
             addbtn();

        }
              
  }
            
       
       
}
    
        function store()   // storing data into local storage
        {
            var myNodelist = document.getElementsByTagName("LI");
             var arr= new Array();
            
            
           for (var i=0;i<myNodelist.length;i++)
               {
                   arr.push(myNodelist[i].innerHTML);
                
               }
            
             var i=myNodelist.length-1;
            localStorage.setItem("element",arr);
            localStorage.setItem("prior",priority);
            
           
            
        }
        
        function save()
        {
                store();
        }
