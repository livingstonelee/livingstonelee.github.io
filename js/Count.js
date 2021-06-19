function Count() {
    var date = new Date();

    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.day = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")[date.getDay()];

    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

	this.nextmonth = 6;
	this.nextdate = 13;
	this.nexthour = 17;
	this.nextmin = 25;
	this.nextsec = 0;
	
	this.nexttotal = ((((this.nextmonth)*30 + this.nextdate)*24 + this.nexthour)*60 + this.nextmin)*60 + this.nextsec;
	this.nowtotal = ((((this.month)*30 + this.date)*24 + this.hour)*60 + this.minute)*60 + this.second;
	this.total = this.nexttotal - this.nowtotal;
	
	this.waitdate = Math.floor(this.total / (60*60*24));
	this.waithour = Math.floor((this.total - this.waitdate*60*60*24) / (60*60));
	this.waitmin = Math.floor((this.total - this.waitdate*60*60*24 - this.waithour*60*60) / 60);
	this.waitsec = this.total - this.waitdate*60*60*24 - this.waithour*60*60 - this.waitmin*60;

	
	this.nowtotal = date.getTime();
	this.TogetherDay = Math.floor(this.nowtotal / 3600 / 24 / 1000) - 18720;
	


	



    this.toString = function() {
        return "现在是:" + this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + this.day; 
    };
    
    this.toSimpleDate = function() {
        return this.year + "-" + this.month + "-" + this.date;
    };
    
    this.toDetailDate = function() {
        return this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.second;
    };
    
	this.toCount = function() {
        return "现\r\n在是:" + this.year + "年" + this.month + "月" + this.date + "日 " + this.hour + ":" + this.minute + ":" + this.second + " " + this.day + "现在总秒数：" + this.nowtotal + "等待总秒数：" + this.nexttotal +"距离下一次相遇还有 : " + " " + this.waitdate + " Day " + this.waithour + " : " + this.waitmin + " : " + this.waitsec; 
    };
	
	this.TogetherTotal = function(){
		return "从在一起到现在  · " + this.TogetherDay + " 天  · " + this.hour + " : " + this.minute + " : " + this.second;
	};
	
    this.display = function(ele) {
        var count = new Count();
        ele.innerHTML = count.TogetherTotal();
        window.setTimeout(function() {count.display(ele);}, 1000);
    };
}
