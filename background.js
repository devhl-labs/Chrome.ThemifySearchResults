if(localStorage['version']!=='.7'){
     localStorage['version']='.7';
     alert('Themify Search Page has been updated.\nYou can now create your own theme.\nUse the "Dark" button in the top right of your browser.\nHappy coding!');
}

var theme1='';
theme1 = "body{background-color:" + 'black' + ";}\n";
theme1 += "#main{background-color:" + '#0D0D0D' + "}\n";
theme1 += "a{color:" + '#6783ab' + " !important;}\n";
theme1 += ".content{background-color: " + '#222' + ";}\n\n";

theme1 += '/*search bar section*/\n';
theme1 += "#gbq1{background-color:" + 'black' + "}\n\n";

theme1 += '/*google logo*/\n';
theme1 += "#gb > div.gb_Jb.gb_Hc > div.gb_f.gb_pb{background-color: " + 'black' + ";}\n";
theme1 += "#gba{background-color: " + 'black' + ";}\n";
theme1 += "#gb > div.gb_Jb.gb_Hc > div.gb_Z.gb_Hc.gb_f.gb_Fc{background-color: " + 'black' + ";}\n";
theme1 += ".gb_Ib{background-color: " + 'black' + ";}\n";
theme1 += "#gb > div.gb_Lb.gb_Ic > div.gb_Z.gb_Ic.gb_f.gb_Hc{background-color: " + 'black' + ";}\n";
theme1 += "#gb > div.gb_Lb.gb_Ic > div.gb_f.gb_rb{background-color: " + 'black' + ";}\n";
theme1 += "#gb > div.gb_Lb.gb_Ic > div.gb_0.gb_Ic.gb_f.gb_Hc{background-color: " + 'black' + ";}\n";
theme1 += "#gb{background-color: black;}\n";
theme1 += "#searchform > div.sfbg.nojsv > div{background-color: " + 'black' + ";}\n";
theme1 += "#cnt > div:nth-child(2){background-color: " + 'black' + "; max-width: 100%;}\n";     
theme1 += "#cnt > div:nth-child(2){max-width: 100%;}\n";
theme1 += "#slim_appbar{background-color: " + 'black' + ";}\n\n";

theme1 += '/*sets the background color for the search results*/\n';
theme1 += "#cnt{background-color: " + '#222' + ";}\n\n";

theme1 += '/*twitter feed*/\n';
theme1 += '#rso > div > div > g-snapping-carousel > div._caj.iw3mnmMTe5NQ-WI_562leVwQ > div > div > div > div > div._AOf._ZIh{color: #545454;}\n';
theme1 += '#rso > div > div > g-snapping-carousel > div._caj.iyMGDuSFpaUY-WI_562leVwQ > div > div > div > div > div._AOf._ZIh{color:#545454;}\n\n';

theme1 += '/*information aside*/\n';
theme1 += '#rhs_block > div > div.kp-blk._Jw._Rqb._RJe > div > div._OKe > ol > div > div > div > span._xdb > a{color:#545454 !important;}\n';
theme1 += '#rhs_block > div > div.kp-blk._Jw._Rqb._RJe > div > div._OKe > ol > div > div > div > span._Xbe.kno-fv{color:#545454;}\n\n';

theme1 += '/*for "images for..."*/\n';
theme1 += "#imagebox_bigimages > div._Icb._kk._wI > a{color: " + '#6783ab' + ";}\n";
theme1 += "#imagebox_bigimages > a{color: " + '#6783ab' + ";}\n\n";

theme1 += '/*sets the color for the strip above the search results*/\n';
theme1 += "#hdtbSum{background-color: " + 'black' + ";}\n";
theme1 += "#topabar{background-color: " + 'black' + ";}\n\n";

theme1 += ".r a{color: " + '#6783ab' + ";}\n\n";

theme1 += '/*title of each result*/\n';
theme1 += ".fl{color: " + '#6783ab' + " !important;}\n\n";

theme1 += '/*this handles links to files instead of html pages*/\n';
theme1 += '/*it sets the color for when there is [doc] or [pdf] preceding the result title*/\n';
theme1 += ".w{color:" + '#6783ab' + ";}\n\n";			

theme1 += '/*links at bottom of page that match searh term*/\n';
theme1 += "#brs > div._r > div > p > a{color: " + '#6783ab' + "; font-weight:900;}\n";
theme1 += "#brs > div._r > div > p > a > b{color: " + '#6783ab' + "; font-weight:100;}\n\n";

theme1 += '/*next button in footer*/\n';
theme1 += "#pnnext > span:nth-child(2){color: " + '#6783ab' + "; display: block; margin-left: 53px;}\n\n";

theme1 += '/*previous button in footer*/\n';
theme1 += "#pnprev > span:nth-child(2){color: " + '#6783ab' + "; display: block; margin-right: 35px; clear: right;}\n\n";



theme1 += '/*small change to handle the news tab*/\n';
theme1 += "div._fC._r > a{color: " + '#6783ab' + ";}\n";
theme1 += "div > div > a{color: " + '#6783ab' + ";}\n";
theme1 += ".news-author{color: " + '#6783ab' + ";}\n\n";

theme1 += '/*in the footer area, searches related to...*/\n';
theme1 += "#brs > div.card-section > div > p > a{color: " + '#6783ab' + ";}\n\n";

theme1 += '/*page footer*/\n';
theme1 += "#fbar{background-color: " + 'black' + ";}\n\n";

theme1 += '/*fixes text in the View Profile button*/\n';
theme1 += 'a[href^="https://plus.google.com/u/0/me"]{color: white;}\n\n';

theme1 += '/*this styles the definitions provided by google directly in the search results*/\n';
theme1 += "div._Hs{color: " + '#aaa' + ";}\n";
theme1 += "div._YD{color: " + '#aaa' + ";}\n\n";

theme1 += "#rcnt{background-color: " + '#222' + ";}\n\n";

theme1 += '/*modifies the options button*/\n';

theme1 += 'a[href^="https://www.google.com/intl/en/options/"]{background-color: ' + '#780000' + ';opacity:100;}\n';
theme1 += 'a[href^="https://www.google.com/intl/en/options/"]:hover{background-color: ' + 'red' + ';}\n\n';

theme1 += '/*modifies the notifications button*/\n';

theme1 += '#gbw > div > div > div.gb_8b.gb_Ne.gb_R > div.gb_gc.gb_Wc.gb_R.gb_hc > div.gb_jc > a > div{background-color: ' + '#780000' + ';}\n';
theme1 += '#gbw > div > div > div.gb_8b.gb_Ne.gb_R > div.gb_gc.gb_Wc.gb_R.gb_hc > div.gb_jc > a > div:hover{background-color: ' + 'red' + ';}\n\n';

theme1 += '/*handles the current page number*/\n';
theme1 += ".cur{color: #6a6a6a;}\n\n";

theme1 += '/*movie showtimes*/\n';
theme1 += "span.vk_bk.lr_c_h{color:#808080 !important;}\n";
theme1 += "div.tb_h{color: rgb(255,209, 216);}\n";
theme1 += "div.lr_c_tf.r-search-5{background-color: " + '#222' + ";color: #808080;}\n";
theme1 += "div.vk_pl.vk_pr{color: #808080;}\n";
theme1 += "div.lr_c_tmt{color: #808080;}\n";
theme1 += "a.vk_bk{color:" + '#6783ab' + " !important;}\n";
theme1 += "div.kno-rdesc{color:#808080;}\n";
theme1 += "div.kno-ecr-pt.kno-fb-ctx{color:#808080;}\n";
theme1 += "div.ellip{color:#808080;}\n";
theme1 += "span._vWc>span{color:" + '#6783ab' + " !important;}\n";
theme1 += "#lr_c_tc > div.lr_c_tf.r-search-6{color:#808080;background-color:" + '#222' + ";}\n";
theme1 += "#lr_c_tc > div.tb_c.tb_stc > div > div > div > div.lr_c_vn{color:#808080;background-color:" + '#222' + ";}\n\n";


theme1 += '/*showing results for...*/\n';
theme1 += ".spell{color:#545454;}\n";
theme1 += "a.spell{color:" + '#6783ab' + ";}\n";
theme1 += ".spell_original{color:" + '#6783ab' + " !important;}\n";
theme1 += "span.spell_orig{color:#545454;}\n\n";

theme1 += '/*definitions*/\n';
theme1 += "div._Tgc{color:#545454;}\n\n";

theme1 += "#gsr > a{display:none;}\n";

var theme2='/*header*/\n';
theme2 += 'body{background-color: #065206;}\n';
theme2+='#searchform > div.sfbg.nojsv > div{background-color: #065206;}\n';
theme2+='#hdtbSum{background-color:#065206;}\n';
theme2+='#topabar{background-color: #065206;}\n\n';

theme2+='/*search results background*/\n';
theme2+='#cnt{background-color: rgb(125, 167, 103);}\n\n';

theme2+='/*footer*/\n';
theme2+='#fbar{background-color: #065206;}\n\n';

theme2+='/*urls in the results*/\n';
theme2+='#rso > div > div > div > h3 > a{color:#201010;}\n\n';

theme2+='/*sub urls in the results*/\n';
theme2+='#rso > div > div > div > div > div > div.osl > a{color:#201010;}\n\n';

theme2+='/*searches related to...*/\n';
theme2+='#brs > div > div > p > a{color:#201010;}\n\n';

var theme3='/*header*/\n';
theme3+= 'body{background-color: #ff7373;}\n';
theme3+='#searchform > div.sfbg.nojsv > div{background-color: #ff7373;}\n';
theme3+='#hdtbSum{background-color:#ff7373;}\n';
theme3+='#topabar{background-color: #ff7373;}\n\n';

theme3+='/*search results background*/\n';
theme3+='#cnt{background-color: #c39797;}\n\n';

theme3+='/*footer*/\n';
theme3+='#fbar{background-color: #ff7373;}\n\n';

theme3+='/*urls in the results*/\n';
theme3+='#rso > div > div > div > h3 > a{color:#201010;}\n\n';

theme3+='/*sub urls in the results*/\n';
theme3+='#rso > div > div > div > div > div > div.osl > a{color:#201010;}\n\n';

theme3+='/*searches related to...*/\n';
theme3+='#brs > div > div > p > a{color:#201010;}\n';

theme3+='/*options*/\n';
theme3+='#gbwa > div.gb_jc > a{background-color:white;opacity:100;}\n';

theme3+='#gbw > div > div > div.gb_8b.gb_Ne.gb_R > div.gb_gc.gb_Wc.gb_R.gb_hc > div.gb_jc > a{background-color:white;}\n';
var theme4='/*Try and build your own!  Its not very difficult.*/';

setDefaultColors();

function setDefaultColors(){ 
     if(!localStorage['theme1']){localStorage['theme1']=theme1;}
     if(!localStorage['theme2']){localStorage['theme2']=theme2;}
     if(!localStorage['theme3']){localStorage['theme3']=theme3;}
     if(!localStorage['theme4']){localStorage['theme4']=theme4;}
     if(!localStorage['selectedTheme']){localStorage['selectedTheme']='theme1';}
     if(!localStorage['enabled']){localStorage['enabled']='true';}
}  

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
     setDefaultColors();
     if (request.method === "getEnabled"){
          sendResponse({
               theme1: localStorage['theme1'],
               theme2: localStorage['theme2'],
               theme3: localStorage['theme3'],
               theme4: localStorage['theme4'],
               selectedTheme: localStorage['selectedTheme'],
               data: localStorage['enabled']            
               });
     }
          
          if(request.method==="disable"){
               chrome.tabs.query({}, function(tabs) {
                    var message = {method: "disable"};
                    for (var i=0; i<tabs.length; ++i) {
                        chrome.tabs.sendMessage(tabs[i].id, message);
                    }
               });
          }else if(request.method==="enable"){
               chrome.tabs.query({}, function(tabs) {
                    var message = {method: "enable",  
                         theme1: localStorage['theme1'],
                         theme2: localStorage['theme2'],
                         theme3: localStorage['theme3'],
                         theme4: localStorage['theme4'],
                         selectedTheme: localStorage['selectedTheme']                        
                    };
                    for (var i=0; i<tabs.length; ++i) {
                        chrome.tabs.sendMessage(tabs[i].id, message);
                    }
               });
          }
     }
  );   
