
function getitem(){
    var value= document.getElementById("item").value;
    xhr=new XMLHttpRequest();
    xhr.open('POST','/todo?item='+value,true);
   //console.log(value);
     xhr.onreadystatechange = function () {
 
      
        //console.log(value);
         if ( xhr.readyState==4 && xhr.status == 200) {
            console.log("works");

          
     } 
    
     }
 {item:value};
     xhr.send(item);
}

function change(e){
    var x=e.target.innerHTML;
    //console.log(x);
    xhr=new XMLHttpRequest();
    xhr.open('DELETE','/todo?item='+x,true);
  
     xhr.onreadystatechange = function () {
         if ( xhr.readyState==4 && xhr.status == 200) {
            
            location.reload();
            // document.getElementById("data").innerHTML=xhr.responseText;
        
          
     } 
    
     }
 {item:x};

     xhr.send(item);



}