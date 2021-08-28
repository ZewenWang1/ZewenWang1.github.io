 setInterval(function(){
         var time=new Date();
         var year=time.getFullYear(); //获取年份
         var month=checkTime(time.getMonth()+1); //获取月份
         var day=time.getDate();  //获取日期
         var hour=checkTime(time.getHours());  //获取时
         var minite=checkTime(time.getMinutes()); //获取分
         var second=checkTime(time.getSeconds()); //获取秒
         /****当时、分、秒、小于10时，则添加0****/
         function checkTime(i){
             if(i<10) return "0"+i;
             return i;
         }
		 
         var nowtime=document.getElementById("nowtime");
         nowtime.innerHTML=year+"-"+month+"-"+day+" "+hour+":"+minite+":"+second;
		 
		 var startime=document.getElementById("starttime");
		 startime.innerHTML=year+"-"+month+"-"+day+" "+"07"+":"+"00";
		 
		 var endtime=document.getElementById("endtime");
		 endtime.innerHTML=year+"-"+month+"-"+day+" "+(hour+1)+":"+"00";
        },1000);   //setInterval(fn,i) 定时器，每隔i秒执行fn
