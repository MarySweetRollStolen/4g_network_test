/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var language;
var typeClass ;
var isTest;
var allDevices=0;
var mistakes=0;
var rectlength;
var browser;

function checkFinal(){
    console.log(allDevices);
    var mass=document.getElementById('dragObjects').getElementsByTagName('img');
    var right=0;
    var wrong=0;
    var all;
    for(var i=0; i<mass.length; i++) {
	
            if($(mass[i]).data("checker")=="right")right++;
            if($(mass[i]).data("checker")=="wrong")wrong++;
             
           
            
    }
    all=right+wrong;
        console.log(right);
        console.log(wrong);
       // console.log(all);
    mistakes+=allDevices-all;
    mistakes+=wrong;
   /* =$("img").css("border-style","dotted");
    var wrong=$("img").css("border-style","solid");
    var all=right.length+wrong.length;*/
   // console.log(mass.length);
    console.log(mistakes);
};
function ShowHint(objId){
   // alert(objId);
    var findStr="p.txt"+language.toString();
    var rexp=/[0-9]*/i;
    var ObjStr="#"+objId.toString()+"Hint";
	$(findStr).css("display","block");
    $(ObjStr).animate({width:'show' },200);
      if($(ObjStr).find(findStr).height() >$(ObjStr).height() )InitFontSize(ObjStr,findStr);
        $(ObjStr).css("min-height",$(ObjStr).find(findStr).height());
       
}
function InitFontSize(obj,str){
    
    var el=$(obj).find(str);
   // console.log(el);
    var FS;
	var FS1;
    do{
        FS=el.css("font-size");
        FS=parseInt(FS);
		FS1=FS;
        FS=FS-1;
        FS=FS+"px";
        el.css("font-size",FS);
       
    }while(el.height()+FS1>$(obj).height());
    
}
function isRight(n,elem,left,top){
    var k
    if(browser=="opera" || browser=="ie"){
         k=0.06*rectlength;
    }
    else{
        if(rectlength<($(elem).width()+6)){
            k=0;
        }
        if(rectlength<($(elem).width()+12)){
            k=0.0028*$(window).width();
        }
        else{
            k=0.004*$(window).width();
        }
    }
    
    var timer=300;
    var perc=70;
   top=top+k;
   left=left+k;
    
    if(isTest==1){
        
        $(elem).offset({top:top,left:left});
            $(elem).hide( "scale", 
          {percent:perc , direction: 'both',origin: ['middle']}, timer );
           
           $(elem).show( "scale", 
          {percent: perc, direction: 'both',origin: ['middle']}, timer );
          /* $(elem).fadeOut(timer);
           $(elem).offset({top:top+k,left:left+k});
           $(elem).fadeIn(timer);*/
            //$(elem).show("medium");
            if(n==0){
                $(elem).data("checker","wrong");
				
            }
            else{
                $(elem).data("checker","right");
            }
    }
    if(isTest==0){
        $(elem).offset({top:top,left:left});
            $(elem).hide( "scale", 
          {percent: perc, direction: 'both',origin: ['middle']}, timer );
           
           $(elem).show( "scale", 
          {percent: perc, direction: 'both',origin: ['middle']}, timer );
         
        if(n==0){
            
            //alert(isWrong);
             elem.style.border="1px solid red";
          
        }
        else{
            elem.style.border="1px solid green";
        }
    }
    
    
}
function checkDroppedGsm(acc,el) {
    var rexp=/[0-9]*/i;
    var elId=rexp.exec(el.id);
    var accPos=document.getElementById(acc).getBoundingClientRect();
    console.log("Акцептор '"+acc+"': принял объект '"+el+"'");
    if(acc!="dragObjects"){
        if(el.className==typeClass || el.className=="network"){
             if(acc=="4" || acc=="5" ||acc=="6" ||acc=="7"){
                    if(elId.toString()=="4" || elId.toString()=="5" || elId.toString()=="6"||elId.toString()=="7"){
                       // alert("yep");
                       isRight(1,el,accPos.left,accPos.top);
                        return;
                    } 
             }
         
         if(elId.toString()==acc.toString()){
               isRight(1,el,accPos.left,accPos.top);
         }
         else{
          isRight(0,el,accPos.left,accPos.top);
         }
        }
        else{
          isRight(0,el,accPos.left,accPos.top);
           // tryes++;
        }
         
    }
    else{
        el.style.border='none';
		$(el).data("checker","none"); 
        el.style.position='static';
      
         
    }
    
}
function checkDroppedUmts(acc,el) {
    var rexp=/[0-9]*/i;
    var elId=rexp.exec(el.id);
    var accPos=document.getElementById(acc).getBoundingClientRect();
 //   alert(elId);
 //   alert(acc);
    console.log("Акцептор '"+acc+"': принял объект '"+el+"'");
    if(acc!="dragObjects"){
        if(el.className==typeClass || el.className=="network"){
             if(acc=="4" || acc=="5" ||acc=="6"){
                    if(elId.toString()=="4" || elId.toString()=="5" || elId.toString()=="6"){
                       // alert("yep");
                       isRight(1,el,accPos.left,accPos.top);
                        return;
                    } 
             }
         
         if(elId.toString()==acc.toString()){
               isRight(1,el,accPos.left,accPos.top);
         }
         else{
          isRight(0,el,accPos.left,accPos.top);
         }
        }
        else{
          isRight(0,el,accPos.left,accPos.top);
        }
         
    }
    else{
        el.style.border='none';
		 $(el).data("checker","none"); 
        el.style.position='static';
      
         
    }
    
}


function checkDroppedLte(acc,el) {
    var rexp=/[0-9]*/i;
    var elId=rexp.exec(el.id);
   var accPos=document.getElementById(acc).getBoundingClientRect();
    console.log("Акцептор '"+acc+"': принял объект '"+el+"'");
    if(acc!="dragObjects"){
        if(elId.toString()==acc.toString() && elId==0){
             
            isRight(1,el,accPos.left,accPos.top);
            
            return;
        }
        if(el.className==typeClass){

         if(elId.toString()==acc.toString()){

            isRight(1,el,accPos.left,accPos.top);
         }
         else{
          isRight(0,el,accPos.left,accPos.top);
         }
        }
        else{
           isRight(0,el,accPos.left,accPos.top);
        }
    
    }
    else{
         el.style.border='none';
		  $(el).data("checker","none"); 
         el.style.position='static';
    }
    
}
function checkDroppedWimax(acc,el) {
    var rexp=/[0-9]*/i;
    var elId=rexp.exec(el.id);
   var accPos=document.getElementById(acc).getBoundingClientRect();
    console.log("Акцептор '"+acc+"': принял объект '"+el+"'");
    if(acc!="dragObjects"){
        if(elId.toString()==acc.toString() && elId==0){
             
            isRight(1,el,accPos.left,accPos.top);
            return;
        }
        if(el.className==typeClass){

         if(elId.toString()==acc.toString()){

            isRight(1,el,accPos.left,accPos.top);
         }
         else{
          isRight(0,el,accPos.left,accPos.top);
         }
        }
        else{
           isRight(0,el,accPos.left,accPos.top);
        }
         
    }
    else{
         el.style.border='none';
		  $(el).data("checker","none"); 
         el.style.position='static';
    }
    
}

function getElementPosition(elemId)
{
    var elem = document.getElementById(elemId);
	
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;
	
    var l = 0;
    var t = 0;
	
    while (elem)
    {
        l += elem.offsetLeft;
        t += elem.offsetTop;
        elem = elem.offsetParent;
    }

    return {"left":l, "top":t, "width": w, "height":h};
}
function GetCanvasPropert(){
    
    var br=document.getElementById('neste').getBoundingClientRect();
    alert("Top:"+br.top+", Left:"+br.left+", Right:"+br.right+", Bottom:"+br.bottom);

};

function SetCanvas(){
    browser=cBrowser();
    $("#neste").height($(window).height()-$("#dragObjects").height()-$("#backwr").height());
    var pos = getElementPosition("neste");
    var width = pos.width;
    var height = pos.height;
    
   var br={
     left:10,
     top:15  
   };
   
    var paper = Raphael(document.getElementById("neste"), width, height-2*$("#backwr").height());
    var rw=parseInt($('img').css('width'));
    var rh=parseInt($('img').css('height'));
    var rectwidth=rw+0.22*rw;
    rectlength=rectwidth;
    var rectheight=rh+0.22*rh;
    var distanceTop=0.2*rectheight;
    var distanceLeft=0.2*rectwidth;
     var strokeWidth=0.02*rectheight.toString();
    var mass=[];
    var dash=[];
    var tarr=[];
    var lines=[];
    
    if(browser=="opera" || browser=="ie"){
       $('#neste').append('<img src="img/symbols/target.png" id=0 class="figure"/>');
         $("#0").offset({left:br.left+distanceLeft,top:br.top+rectheight+distanceTop});
    }
    else{
         var telephone = paper.rect(br.left+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
         mass.push(telephone);
    }
   
    
    
    
 
   switch (typeClass){
       case "gsm":{
               if( browser=="opera" || browser=="ie"){
                   $('#neste').append('<img src="img/symbols/target.png" id=1 class="figure"/>');
                   $("#1").offset({left:br.left+1.2*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=2 class="figure"/>');
                   $("#2").offset({left:br.left+2.5*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=3 class="figure"/>');
                   $("#3").offset({left:br.left+6*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=4 class="figure"/>');
                   $("#4").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=5 class="figure"/>');
                   $("#5").offset({left:br.left+6*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=6 class="figure"/>');
                   $("#6").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=7 class="figure"/>');
                   $("#7").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top+rectheight+1.3*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=8 class="figure"/>');
                   $("#8").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=9 class="figure"/>');
                   $("#9").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
               }
               else{
                   
               
                 var vishka = paper.rect(br.left+1.2*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(vishka);
                 var BSC = paper.rect(br.left+2.5*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(BSC);
                 var MSC = paper.rect(br.left+6*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(MSC);
                 var HLR = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(HLR);
                 var VLR = paper.rect(br.left+6*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(VLR);
                 var AUC = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(AUC);
                 var EIR = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top+rectheight+1.3*distanceTop, rectwidth,rectheight);
                 mass.push(EIR);
                 var SGSN = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(SGSN);
                 var GGSN = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(GGSN);
             }
                 
                 var vishka_BSC_str='M'+(br.left+1.2*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+2.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString();                     
                 var vishka_BSC=paper.path(vishka_BSC_str);
                 lines.push(vishka_BSC);
                 var BSC_MSC_str='M'+(br.left+2.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString(); 
                 var BSC_MSC = paper.path(BSC_MSC_str);
                 lines.push(BSC_MSC);
                 var MSC_HLR_str='M'+(br.left+6*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight).toString();
                 var MSC_HLR = paper.path(MSC_HLR_str);
                 lines.push(MSC_HLR);
                 var MSC_VLR_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight).toString();
                 var MSC_VLR = paper.path( MSC_VLR_str);
                 lines.push(MSC_VLR);
                 var MSC_AUC_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight).toString();
                 var MSC_AUC = paper.path(MSC_AUC_str);
                 lines.push(MSC_AUC);
                 var MSC_EIR_str = 'M'+(br.left+6*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+1.3*distanceTop+rectheight/2).toString();
                 var MSC_EIR= paper.path(MSC_EIR_str);
                 lines.push(MSC_EIR);
                 var BSC_SGSN_str='M'+(br.left+2.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString(); 
                 var BSC_SGSN = paper.path(BSC_SGSN_str);
                 lines.push(BSC_SGSN);
                 var SGSN_GGSN_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString(); 
                 var SGSN_GGSN = paper.path(SGSN_GGSN_str);
                 lines.push(SGSN_GGSN);
                 var MSC_other_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft+rectwidth*2.8).toString()+' '+(br.top+rectheight+0.1*rectheight).toString(); 
                 var MSC_other = paper.path(MSC_other_str);
                 lines.push(MSC_other);
                 if(language==0){
                     var t1=paper.text(br.left+6*rectwidth+1.2*distanceLeft+rectwidth*3.4,br.top+rectheight+0.1*rectheight,"Другие операторы \n фиксированной и\n мобильной связи");
 
                 }
                 if(language==1){
                    var t1=paper.text(br.left+6*rectwidth+1.2*distanceLeft+rectwidth*3.4,br.top+rectheight+0.1*rectheight,"Інші оператори \n фіксованого та\n мобільного зв'язку");

                 }
                 tarr.push(t1);
                 var BSS_NSS_str='M'+(br.left+2.5*rectwidth+distanceLeft+rectwidth*1.5).toString()+' '+(br.top+distanceTop).toString()+' '+'L'+(br.left+2.5*rectwidth+distanceLeft+rectwidth*1.5).toString()+' '+(br.top+2*rectheight+distanceTop).toString();
                 var BSS_NSS = paper.path(BSS_NSS_str);
                 lines.push(BSS_NSS);
                 dash.push(BSS_NSS);
                 var t2=paper.text(br.left+2.3*rectwidth+distanceLeft+rectwidth*1.5,2*distanceTop,"BSS");
                 tarr.push(t2);
                 var t3=paper.text(br.left+2.7*rectwidth+distanceLeft+rectwidth*1.5,2*distanceTop,"NSS");
                 tarr.push(t3);
                 var GGSN_other_str='M'+(br.left+7.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft+rectwidth*1.2).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString();
                 var GGSN_other = paper.path(GGSN_other_str);
                 lines.push(GGSN_other);
                 if(language==0){
                     var t4=paper.text(br.left+br.left+7.5*rectwidth+rectwidth*2,br.top+2*rectheight+2*distanceTop+rectheight/2,"Другие сети\n передачи данных");
                     
                 }
                 if(language==1){
                     var t4=paper.text(br.left+br.left+7.5*rectwidth+rectwidth*2,br.top+2*rectheight+2*distanceTop+rectheight/2,"Інші мережі\n передачі даних");
                    
                 }
                 tarr.push(t4);
                 
               break;
       }
       case "umts":{
              if( browser=="opera" || browser=="ie"){
				$('#neste').append('<img src="img/symbols/target.png" id=1 class="figure"/>');
                   $("#1").offset({left:br.left+1.2*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=2 class="figure"/>');
                   $("#2").offset({left:br.left+2.5*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=3 class="figure"/>');
                   $("#3").offset({left:br.left+6*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=4 class="figure"/>');
                   $("#4").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=5 class="figure"/>');
                   $("#5").offset({left:br.left+6*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=6 class="figure"/>');
                   $("#6").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=7 class="figure"/>');
                   $("#7").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=8 class="figure"/>');
                   $("#8").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=9 class="figure"/>');
                   $("#9").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
			  }
			  else{
				  
			     var vishka = paper.rect(br.left+1.2*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(vishka);
                 var BSC = paper.rect(br.left+2.5*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(BSC);
                 var MSC = paper.rect(br.left+6*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(MSC);
                 var HLR = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(HLR);
                 var VLR = paper.rect(br.left+6*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(VLR);
                 var AUC = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(AUC);  
                 var MGW = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(MGW);
                 var SGSN = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(SGSN);
                 var GGSN = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(GGSN);
			  }
                
               
                 
                 var vishka_BSC_str='M'+(br.left+1.2*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+2.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString();                     
                 var vishka_BSC=paper.path(vishka_BSC_str);
                 lines.push(vishka_BSC);              
                 var BSC_MGW_str='M'+(br.left+2.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString(); 
                 var BSC_MGW = paper.path(BSC_MGW_str);
                 lines.push(BSC_MGW);
                 var MGW_MSC_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString(); 
                 var MGW_MSC = paper.path(MGW_MSC_str);
                 lines.push(MGW_MSC);
                 var MSC_HLR_str='M'+(br.left+6*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight).toString();
                 var MSC_HLR = paper.path(MSC_HLR_str);
                 lines.push(MSC_HLR);
                 var MSC_VLR_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight).toString();
                 var MSC_VLR = paper.path( MSC_VLR_str);
                 lines.push(MSC_VLR);
                 var MSC_AUC_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight).toString();
                 var MSC_AUC = paper.path(MSC_AUC_str);
                 lines.push(MSC_AUC);
                 var BSC_SGSN_str='M'+(br.left+2.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString(); 
                 var BSC_SGSN = paper.path(BSC_SGSN_str);
                 lines.push(BSC_SGSN);
                 var SGSN_GGSN_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString(); 
                 var SGSN_GGSN = paper.path(SGSN_GGSN_str);
                 lines.push(SGSN_GGSN);
                 
                 var MGW_other_str='M'+(br.left+4.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop).toString()+' '+'L'+(br.left+2.5*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight/2).toString(); 
                 var MGW_other=paper.path(MGW_other_str);
                 lines.push(MGW_other);
                 if(language==0){
                     var t3=paper.text(br.left+2.5*rectwidth+distanceLeft+rectwidth/2,br.top+distanceTop,"Другие операторы \n фиксированной и\n мобильной связи");
 
                 }
                 if(language==1){
                    var t3=paper.text(br.left+2.5*rectwidth+distanceLeft+rectwidth/2,br.top+distanceTop,"Інші оператори \n фіксованого та\n мобільного зв'язку");

                 }
                 tarr.push(t3);
                 var GGSN_other_str='M'+(br.left+7.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft+rectwidth*1.2).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString();
                 var GGSN_other = paper.path(GGSN_other_str);
                 lines.push(GGSN_other);
                 if(language==0){
                     var t4=paper.text(br.left+br.left+7.5*rectwidth+rectwidth*2,br.top+2*rectheight+2*distanceTop+rectheight/2,"Другие сети\n передачи данных");
                     
                 }
                 if(language==1){
                     var t4=paper.text(br.left+br.left+7.5*rectwidth+rectwidth*2,br.top+2*rectheight+2*distanceTop+rectheight/2,"Інші мережі\n передачі даних");
                    
                 }
                 tarr.push(t4);
                
               break;
       } 
       case "lte":{
             if( browser=="opera" || browser=="ie"){
				$('#neste').append('<img src="img/symbols/target.png" id=1 class="figure"/>');
                   $("#1").offset({left:br.left+1.2*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=2 class="figure"/>');
                   $("#2").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=3 class="figure"/>');
                   $("#3").offset({left:br.left+6*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=4 class="figure"/>');
                   $("#4").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top+2*rectheight+2*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=5 class="figure"/>');
                   $("#5").offset({left:br.left+4.5*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=6 class="figure"/>');
                   $("#6").offset({left:br.left+7.5*rectwidth+distanceLeft,top:br.top});
                    $('#neste').append('<img src="img/symbols/target.png" id=7 class="figure"/>');
                   
				 }
			  else{
                 var vishka = paper.rect(br.left+1.2*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                 mass.push(vishka);
                 
                 var ServGate = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(ServGate);
                 var PDN = paper.rect(br.left+6*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(PDN);
                 var PCRF = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top+2*rectheight+2*distanceTop, rectwidth,rectheight);
                 mass.push(PCRF);
                 var MME = paper.rect(br.left+4.5*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(MME);
                 var HSS = paper.rect(br.left+7.5*rectwidth+distanceLeft, br.top, rectwidth,rectheight);
                 mass.push(HSS);
				 
			  } 
                 var vishka_MME_str='M'+(br.left+1.2*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight/2).toString();
                 var vishka_MME=paper.path(vishka_MME_str);
                 lines.push(vishka_MME);
                 dash.push(vishka_MME);
                 var MME_ServGate_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+2*rectheight+2*distanceTop).toString();
                 var MME_ServGate=paper.path(MME_ServGate_str);
                 lines.push(MME_ServGate);
                 dash.push(MME_ServGate);
                 var MME_HSS_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight/2).toString();
                 var MME_HSS=paper.path(MME_HSS_str);
                 lines.push(MME_HSS);
                 dash.push(MME_HSS);
                 var vishka_ServGate_str='M'+(br.left+1.2*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+4.5*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString();
                 var vishka_ServGate = paper.path(vishka_ServGate_str);
                 lines.push(vishka_ServGate);
                 var ServGate_PDN_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString();
                 var ServGate_PDN = paper.path(ServGate_PDN_str);
                 lines.push(ServGate_PDN);
                 var PDN_PCRF_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString()+' '+'L'+(br.left+7.5*rectwidth+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight/2).toString();
                 var PDN_PCRF = paper.path(PDN_PCRF_str);
                 lines.push(PDN_PCRF);
                 dash.push(PDN_PCRF);
                 var MME_other_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight+rectheight/3).toString();
                 var MME_other= paper.path(MME_other_str);
                 lines.push(MME_other);
                 dash.push(MME_other);
                 var ServGate_other_str='M'+(br.left+4.5*rectwidth+distanceLeft+rectwidth).toString()+' '+(br.top+2*rectheight+2*distanceTop).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+rectheight+rectheight/2).toString();
                 var ServGate_other= paper.path(ServGate_other_str);
                 lines.push(ServGate_other);
                 if(language==0){
                     var t1=paper.text(br.left+6*rectwidth+distanceLeft+rectwidth/2,br.top+rectheight+rectheight/(2.5),"2G,3G сеть того же оператора");
                 }
                 if(language==1){
                     var t1=paper.text(br.left+6*rectwidth+distanceLeft+rectwidth/2,br.top+rectheight+rectheight/(2.5),"2G,3G мережа того ж оператора");
                 }
                 
                 tarr.push(t1);
                 var PDN_other_str='M'+(br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight).toString()+' '+'L'+(br.left+6*rectwidth+distanceLeft+rectwidth/2).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight+rectheight/6).toString();
                 var PDN_other= paper.path(PDN_other_str);
                 lines.push(PDN_other);
                 if(language==0){
                   
                    var t2=paper.text(br.left+6*rectwidth+distanceLeft+rectwidth/2,br.top+2*rectheight+2*distanceTop+rectheight+rectheight/4.5,"Другие операторы фиксированной и мобильной связи а также сети передачи данных");
                   
                 }
                 if(language==1){
                     var t2=paper.text(br.left+6*rectwidth+distanceLeft+rectwidth/2,br.top+2*rectheight+2*distanceTop+rectheight+rectheight/4.5,"Інші оператори фіксованого та мобільного зв'язку а також мережі передачі даних");
                 }
                 tarr.push(t2);
                 
                 
               break;
       }
       case "wimax":{
               if( browser=="opera" || browser=="ie"){
				$('#neste').append('<img src="img/symbols/target.png" id=1 class="figure"/>');
                   $("#1").offset({left:br.left+1.5*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=2 class="figure"/>');
                   $("#2").offset({left:br.left+2.7*rectwidth+distanceLeft,top:br.top+rectheight+distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=3 class="figure"/>');
                   $("#3").offset({left:br.left+5*rectwidth+distanceLeft,top:br.top+rectheight/2+distanceTop*2});
                    $('#neste').append('<img src="img/symbols/target.png" id=4 class="figure"/>');
                   $("#4").offset({left:br.left+6.2*rectwidth+distanceLeft,top:br.top+rectheight+2*distanceTop});
                    $('#neste').append('<img src="img/symbols/target.png" id=5 class="figure"/>');
                   $("#5").offset({left:br.left+7.4*rectwidth+distanceLeft,top:br.top+rectheight/2+distanceTop*2});
                    $('#neste').append('<img src="img/symbols/target.png" id=6 class="figure"/>');
				 }
			  else{
                var vishka = paper.rect(br.left+1.5*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                mass.push(vishka);
                var ASNGW = paper.rect(br.left+2.7*rectwidth+distanceLeft, br.top+rectheight+distanceTop, rectwidth,rectheight);
                mass.push(ASNGW);
                var AAA = paper.rect(br.left+5*rectwidth+distanceLeft, br.top+rectheight/2+distanceTop*2, rectwidth,rectheight);
                mass.push(AAA);
                var HA = paper.rect(br.left+6.2*rectwidth+distanceLeft, br.top+rectheight+distanceTop*2, rectwidth,rectheight);
                mass.push(HA);
                var PF = paper.rect(br.left+7.4*rectwidth+distanceLeft, br.top+rectheight/2+distanceTop*2, rectwidth,rectheight);
                mass.push(PF);
			  }
                var FirstGroup = paper.rect(br.left+1.25*rectwidth+distanceLeft, br.top+distanceTop+rectheight/2, rectwidth*2.7,rectheight*2.2);
                lines.push(FirstGroup);
                var SecondGroup = paper.rect(br.left+4.75*rectwidth+distanceLeft, br.top+distanceTop+rectheight/2, rectwidth*3.8,rectheight*2.2);
                lines.push(SecondGroup);
                var telephone_FirstGroup_str='M'+(br.left+distanceLeft+rectwidth).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString()+' '+'L'+(br.left+1.25*rectwidth+distanceLeft).toString()+' '+(br.top+rectheight+distanceTop+rectheight/2).toString();
                var telephone_FirstGroup=paper.path(telephone_FirstGroup_str);
                lines.push(telephone_FirstGroup);
                var FirstGroup_SecondGroup_str='M'+(br.left+1.25*rectwidth+distanceLeft+rectwidth*2.7).toString()+' '+(br.top+distanceTop+(rectheight*3)/2).toString()+' '+'L'+(br.left+4.75*rectwidth+distanceLeft).toString()+' '+(br.top+distanceTop+(rectheight*3)/2).toString();
                var FirstGroup_SecondGroup=paper.path(FirstGroup_SecondGroup_str);
                lines.push(FirstGroup_SecondGroup);
                var SecondGroup_other_str='M'+(br.left+4.75*rectwidth+distanceLeft+rectwidth*3.8).toString()+' '+(br.top+distanceTop+(rectheight*3)/2).toString()+' '+'L'+(br.left+4.75*rectwidth+distanceLeft+rectwidth*4).toString()+' '+(br.top+distanceTop+(rectheight*3)/2).toString();
                var SecondGroup_other=paper.path(SecondGroup_other_str);
                lines.push(SecondGroup_other);
			  
                if(language==0){
                   
                    var t1=paper.text(br.left+4.75*rectwidth+distanceLeft+rectwidth*4.5,br.top+distanceTop+(rectheight*3)/2,"Другие сети");
                   
                 }
                 if(language==1){
                     var t1=paper.text(br.left+4.75*rectwidth+distanceLeft+rectwidth*4.5,br.top+distanceTop+(rectheight*3)/2,"Інші мережі");
                 }
                 tarr.push(t1);
                 var t2=paper.text(br.left+2.7*rectwidth+distanceLeft,br.top+1.5*distanceTop+rectheight/1.8,"ASN");
                 tarr.push(t2);
                 var t3=paper.text(br.left+6.5*rectwidth+2*distanceLeft,br.top+1.5*distanceTop+rectheight/1.8,"CSN");
                 tarr.push(t3);
                 
                
                
               break;
       }
      
   }
   var data_str='M'+(br.left+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight*0.5).toString()+' '+'L'+(br.left+distanceLeft+rectwidth*0.5).toString()+' '+(br.top+2*rectheight+2*distanceTop+rectheight*0.5).toString();
     var data = paper.path(data_str);
     lines.push(data);
     var signal_str='M'+(br.left+distanceLeft).toString()+' '+(br.top+2*rectheight+2*distanceTop+0.75*rectheight).toString()+' '+'L'+(br.left+distanceLeft+rectwidth*0.5).toString()+' '+(br.top+2*rectheight+2*distanceTop+0.75*rectheight).toString();
     var signal = paper.path(signal_str);
     lines.push(signal);
      dash.push(signal);
      if(language==0){
         var t5=paper.text(br.left+distanceLeft+rectwidth,br.top+2*rectheight+2*distanceTop+rectheight*0.5,"Данные");
      }
      if(language==1){
       var t5=paper.text(br.left+distanceLeft+rectwidth,br.top+2*rectheight+2*distanceTop+rectheight*0.5,"Данi");

      }
      tarr.push(t5);
      if(language==0){
           var t6=paper.text(br.left+distanceLeft+rectwidth*1.2,br.top+2*rectheight+2*distanceTop+rectheight*0.75,"Сигнализация");

      }
      if(language==1){
          var t6=paper.text(br.left+distanceLeft+rectwidth*1.2,br.top+2*rectheight+2*distanceTop+rectheight*0.75,"Сигналiзацiя");
      }

      tarr.push(t6);
	
		   
            var dropTargets = $("img.figure");
            for(var i=0; i<dropTargets.length; i++) {
               new DropTarget(dropTargets[i]);
             }
            $(".figure").width(rectwidth);
            $(".figure").height(rectheight);
            $(".figure").css("border","1px solid black");
            $(".figure").css("border-width",strokeWidth*1.5);
            $(".figure").css("position","fixed");
			
			 
        
           InitObjects();
		   $('#SumDU').css("display","block");
			 $('#SumDU').width(rw*1.5);
			 $('#SumDU').height(rh*1.5);
			 $('#SumDU').css("font-size","1.6vw");
			 $('#SumDU').css("left",$(window).width()-$("#SumDU").width()*2.6);
			 $('#SumDU').css("top",br.top);
			
			 
        
      allDevices=mass.length;
      SetLineThickness();
      MakeDash();
    SetFontSize();
    SetFill();
    
    if(isTest==1){
         $('#checkTest').css("display","block");
         $('#checkTest').width($("img").width()*2);
         $('#checkTest').height($("img").height()/2);
         $('#checkTest').css("font-size","1.6vw");
         $('#checkTest').css("left",br.left);
         $('#checkTest').css("top",br.top);
    }
    else{
         $('#showVideo').css("display","block");
         $('#showVideo').width($("img").width()*2);
         $('#showVideo').height($("img").height()/2);
         $('#showVideo').css("font-size","1.2vw");
         $('#showVideo').css("left",br.left);
         $('#showVideo').css("top",br.top);
        if(typeClass=="lte"){
          $('#showVideo2').css("display","block");
          $('#showVideo2').width($("img").width()*2);
          $('#showVideo2').height($("img").height()/2);
          $('#showVideo2').css("font-size","1.2vw");
          $('#showVideo2').css("left",br.left+$("img").width()*2.3);
          $('#showVideo2').css("top",br.top);  
        }
        
    }
        $('#SumDUpict').css("display","block");
         $('#SumDUpict').width(rw*1.5);
         $('#SumDUpict').height(rh*1.5);
         $('#SumDUpict').css("font-size","1.6vw");
         $('#SumDUpict').css("left",$(window).width()-$("#SumDUpict").width()*2.7);
         $('#SumDUpict').css("top",br.top);
         
         $('#Kaf').css("display","block");
         $('#Kaf').width(rw*1.7);
         $('#Kaf').height(rh*1.5);
         $('#Kaf').css("font-size","1.6vw");
         $('#Kaf').css("left",$(window).width()-$('#Kaf').width()*1.4);
         $('#Kaf').css("top",br.top);
         
         
   
   
    function MakeDash() {
        for(var i=0; i<dash.length; i++) {
            dash[i].attr({
                         "stroke-dasharray": "- "
                     });
        }   
    }
    function SetFontSize() {
        if($(window).width()<1300){
            var fs=$(window).width()*0.013;
            fs=Math.round(fs);
            fs=fs.toString()+"pt";
        }
        else{
         var fs=$(window).width()*0.011;
         fs=Math.round(fs);
         fs=fs.toString()+"pt";
        }
         for(var i=0; i<tarr.length; i++) {
            tarr[i].attr({
                         "font-size": fs
                     });
        }   
    }
    function SetFill() {
       
        for(var i=0; i<mass.length; i++) {
                    mass[i].attr("stroke", "black");
                    mass[i].attr("stroke-width", strokeWidth);
                    mass[i].attr("fill", "white");
               
                }   
                  
        
    }
    function SetLineThickness() {
       
        for(var i=0; i<lines.length; i++) {
                    lines[i].attr("stroke", "black");
                    lines[i].attr("stroke-width", strokeWidth);
               
                }   
    }
    function InitObjects() {
         
         var Objects;
         Objects = document.querySelectorAll('rect');
        
     for(var i=0; i<Objects.length; i++) {
        
        Objects[i].id=i;
       
       new DropTarget(Objects[i]);
       
       
     }   
    }
};
function cBrowser() {
		var ua = navigator.userAgent;
		var bName = function () {
                    if (ua.search(/MSIE/) > -1) return "ie";
                    if (ua.search(/Firefox/) > -1) return "firefox";
                    if (ua.search(/Opera/) > -1) return "opera";
                    if (ua.search(/Chrome/) > -1) return "chrome";
                    if (ua.search(/Safari/) > -1) return "safari";
                    if (ua.search(/Konqueror/) > -1) return "konqueror";
                    if (ua.search(/Iceweasel/) > -1) return "iceweasel";
                    if (ua.search(/SeaMonkey/) > -1) return "seamonkey";}();
		var version = function (bName) {
			switch (bName) {
                            case "ie" : return (ua.split("MSIE ")[1]).split(";")[0];break;
                            case "firefox" : return ua.split("Firefox/")[1];break;
                            case "opera" : return ua.split("Version/")[1];break;
                            case "chrome" : return (ua.split("Chrome/")[1]).split(" ")[0];break;
                            case "safari" : return (ua.split("Version/")[1]).split(" ")[0];break;
                            case "konqueror" : return (ua.split("KHTML/")[1]).split(" ")[0];break;
                            case "iceweasel" : return (ua.split("Iceweasel/")[1]).split(" ")[0];break;
                            case "seamonkey" : return ua.split("SeaMonkey/")[1];break;
			}}(bName);
		return [bName];
	}


function getRandomInt(min, max){

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function windowClose() {
    var lang=document.getElementsByName("lang");
    var radios=document.getElementsByName("rad");
	var checkTest=document.getElementsByName("chTest");
    var numb;
    for (i=0; i<lang.length; i++) {
        if (lang[i].checked) {
            if(lang[i].value=='rus'){
                language=0;
                $("#backwr").html("Разместите устройства в квадраты соответственно схеме сети данной технологии");
                $("#checkTest").html("Проверить");
                 $("#showVideo").html("Посмотреть видео");
                 $("#showVideo2").html("Посмотреть видео");
                 $("button.closeBtn").html("Закрыть");
            }
            if(lang[i].value=='ukr'){
                language=1;
                $("#backwr").html("Розмістість пристрої у квадрати відповідно до схеми мережі даної технології");
                $("#checkTest").html("Перевірити");
                 $("#showVideo").html("Переглянути відео");
                  $("#showVideo2").html("Переглянути відео");
                 $("button.closeBtn").html("Закрити");
            }
        }
    }
	
		if(checkTest[0].checked){
			 for (i=0; i<radios.length; i++) {
				if (radios[i].checked) {
					isTest=1;
					typeClass=radios[i].value;
				}
			 }
		}
		
	
    else{
		for (i=0; i<radios.length; i++) {
				if (radios[i].checked) {
					isTest=0;
					typeClass=radios[i].value;
				}
		}
                
    }
   
   document.getElementById('parent_popup').style.display='none';
    SetCanvas();
    
}
function countClassElements() {
    //alert(document.getElementsByClassName(typeClass).length);
    
}
function DropTarget(element) {
    
	
	element.dropTarget = this;
	//console.log(this);
	this.canAccept = function(dragObject) {
           
		return true;
           
	};
	
	this.accept = function(dragObject) {
                
		this.onLeave();
		var i=dragObject+"/";
                var y=this+"/";
                var reg=/[0-9]*[a-z]*/i;
		//dragObject.hide();
		var id=reg.exec(i);
                var acc=reg.exec(y);
                var obj=document.getElementById(id);
                if(typeClass=="gsm"){
                   
                    checkDroppedGsm(acc,obj);
               }
               if(typeClass=="umts"){
                   
                    checkDroppedUmts(acc,obj);
               }  
               if(typeClass=="lte"){
                   
                    checkDroppedLte(acc,obj);
               }
               if(typeClass=="wimax"){
                   
                    checkDroppedWimax(acc,obj);
               }
	};
	
	this.onLeave = function() {
		element.className =  '';
                
                
	};
	
	this.onEnter = function() {
		element.className = 'uponMe';
	};
	
	this.toString = function() {
		return element.id;
                
	};
    
    
}


