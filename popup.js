document.getElementById('btnToggle').addEventListener('click', btnToggleClick);
document.getElementById('theme').addEventListener('change', textAreaChange);
document.getElementById("btnToggle").value = GetEnabled();
document.getElementById('viewTheme').addEventListener('change', viewThemeChange);
document.getElementById('applyTheme').addEventListener('change', applyThemeChange);
document.getElementById('branding').addEventListener('click',btnBranding);

switch(localStorage['selectedTheme']){
     case 'theme1':
          document.getElementById('theme1').selected=true;
          document.getElementById('view1').selected=true;
          document.getElementById('theme').value=localStorage['theme1'];
          break;
     case 'theme2':
          document.getElementById('theme2').selected=true;
          document.getElementById('view2').selected=true;
          document.getElementById('theme').value=localStorage['theme2'];
          break;
     case 'theme3':
          document.getElementById('theme3').selected=true;
          document.getElementById('view3').selected=true;
          document.getElementById('theme').value=localStorage['theme3'];
          break;
     case 'theme4':
          document.getElementById('theme4').selected=true;
          document.getElementById('view4').selected=true;
          document.getElementById('theme').value=localStorage['theme4'];
          break;
}

function btnBranding(){
     chrome.tabs.create({url: 'http://www.devhl.com'});
}

function applyThemeChange(){
     localStorage['selectedTheme']=document.getElementById('applyTheme').value;
     console.log('trying');
     //document.getElementById('btnToggle').value="Disabled"
     //localStorage["enabled"]="false";
     //btnToggleClick();
          localStorage["enabled"]=true;
          document.getElementById("btnToggle").value="Enabled";
          chrome.runtime.sendMessage({method: "disable", key: "disable"});
          chrome.runtime.sendMessage({method: "enable", key: "enable"});
//     if(document.getElementById('btnToggle').value==="Enabled"){
//          //document.getElementById('btnToggle').click();
//          //document.getElementById('btnToggle').click();
//          //btnToggleClick();
//          btnToggleClick();
//          btnToggleClick();
//          console.log('a');
//     }else{
//          //document.getElementById('btnToggle').click();
//          btnToggleClick();
//          console.log('b');
//     }
}

function viewThemeChange(){
     document.getElementById('theme').value=localStorage[document.getElementById('viewTheme').value];
}

function textAreaChange(){
     localStorage[document.getElementById('viewTheme').value]=document.getElementById('theme').value;
}



function GetEnabled(){
     if(!localStorage["enabled"]){
          localStorage["enabled"]=true;
          return "Enabled";
     }else{
          if(localStorage["enabled"]==="true"){
               return "Enabled";
          }else{
               return "Disabled";
          }
     }
}



function btnToggleClick() {
     console.log('clicked');
     if(localStorage["enabled"]==="true"){
          localStorage["enabled"]=false;
          document.getElementById("btnToggle").value="Disabled";
          chrome.runtime.sendMessage({method: "disable", key: "disable"});
     }else{
          localStorage["enabled"]=true;
          document.getElementById("btnToggle").value="Enabled";
          chrome.runtime.sendMessage({method: "enable", key: "enable"});
     }
}