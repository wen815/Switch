
$(function(){
    /*show initial image and span, hide others*/
$("ul li").not(".c1").hide();
/*slide*/
var n=0;
function f(){
       n++;
    if(n===1){
        $("ul .c1").show();$("ul li").not(".c1").hide();   
    }
    if(n===2){
         $("ul .c2").show();$("ul li").not(".c2").hide();   
    }
    if(n===3){
         $("ul .c3").show(); $("ul li").not(".c3").hide();   
    } 
        if(n===4){
n=0;
    } 
}
setInterval(f,1000);
});