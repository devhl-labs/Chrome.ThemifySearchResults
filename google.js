var selectedTheme='';
var theme1='';
var theme2='';
var theme3='';
var theme4='';


chrome.runtime.onMessage.addListener(function(request, sender) {
    console.log ('msg received in content script');
     
     if (request.method === "disable"){
         unstyle();
     }
     if(request.method==="enable"){
          selectedTheme=request.selectedTheme;
          theme1=request.theme1;
          theme2=request.theme2;
          theme3=request.theme3;
          theme4=request.theme4;
          style(true);
     }
});

chrome.runtime.sendMessage({method: "getEnabled", key: "getEnabled"}, function(response) {
     if(response.data==="true"){
          selectedTheme=response.selectedTheme;
          theme1=response.theme1;
          theme2=response.theme2;
          theme3=response.theme3;
          theme4=response.theme4;
          
          style(false);
          console.log('enabled');
     }else{
          console.log('response is: ' + response.data);
     }
});

function getCustomColors(){
     
}

function unstyle(){
     try{
          var node = document.getElementById("themify");
          node.parentNode.removeChild(node);
     }catch(err){
          console.log(err.message);
     }
}

function style(booIgnoreDomState){
     try{
          var sheet = document.createElement('style');
          sheet.id="themify";

          switch(selectedTheme){
               case 'theme1':
                    sheet.innerHTML = theme1;
                    break;
               case 'theme2':
                    sheet.innerHTML = theme2;
                    break;
               case 'theme3':
                    sheet.innerHTML = theme3;
                    break;
               case 'theme4':
                    sheet.innerHTML = theme4;
                    break;     
          }
          
          if(booIgnoreDomState){
               document.body.appendChild(sheet);
          }else{
               document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
          }
          
     }catch(err){
          console.log(err.message);
     }
     function fireContentLoadedEvent () {
          try{
               document.body.appendChild(sheet);  
          }catch(err){
               console.log(err.message);
          }
     }

}