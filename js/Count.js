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
	this.nextdate = 12;
	
	this.totalday = (this.nextmonth*30 + this.nextdate) - (this.month*30 + this.date);



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
        return "距离下一次相遇还有 : " + " " +this.totalday + " Day " + this.hour + ":" + this.minute + ":" + (60-this.second); 
    };
	
	
    this.display = function(ele) {
        var count = new Count();
        ele.innerHTML = count.toCount();
        window.setTimeout(function() {count.display(ele);}, 1000);
    };
}