<<<<<<< HEAD
;(function (global){
    var Format = {
        date :function(){
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth()+1;
            var day = now.getDate();
            var week = now.getDay();
            var hour = now.getHours();
            var min = now.getMinutes();
            var sec = now.getSeconds();
            var weekArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
            //处理个位数
            month = month < 10 ? "0" + month : month;
            day = day < 10 ? "0" + day : day;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            //如果只有一个参数的时候，用12小时表示 
            if(arguments.length == 1){
                if(hour > 12){
                    hour -= 12;
                }
                hour = hour < 10 ? "0" + hour : hour;
            }else if(arguments.length == 2 && arguments[1] == 24){
                hour = hour < 10 ? "0" + hour : hour;
            }
            //根据参数返回值
            switch (arguments[0]) {
                case undefined:
                    return year +' '+ month  +' '+day +' '+ weekArr[week];;
                    break;
                case "YYYY/MM/DD":
                    return year +'/'+ month  +'/'+day;
                    break;
                case "YYYY/MM/DD WW":
                    return year +'/'+ month  +'/'+day +' '+weekArr[week];
                    break;
                case "YYYY/MM/DD WW hh:mm:ss":
                    return year +'/'+ month  +'/'+day +' '+weekArr[week] +' '+ hour + ':' + min + ':' + sec;
                    break;
                case "YYYY-MM-DD":
                    return year +'-'+ month  +'-'+day;
                    break;
                case "YYYY-MM-DD WW":
                    return year +'-'+ month  +'-'+day +' '+weekArr[week];
                    break;
                case "YYYY-MM-DD WW hh:mm:ss":
                    return year +'-'+ month  +'-'+day +' '+weekArr[week] +' '+ hour + ':' + min + ':' + sec;
                    break;
                case "YYYY年MM月DD日":
                    return year +'年'+ month  +'月'+day +'日'
                    break;
                case "YYYY年MM月DD日 WW":
                    return year +'年'+ month  +'月'+day +'日' +' '+weekArr[week];
                    break;
                case "YYYY年MM月DD日 WW hh时mm分ss秒":
                    return year +'年'+ month  +'月'+day +'日' +' '+weekArr[week] +' '+ hour + '时' + min + '分' + sec + '秒';
                    break;
                case "YYYYMMDDHHMMSS":
                    return year + month +day + hour + min + sec ;
                    break;
                case "YYYY":
                    return year;
                    break;
                case "MM":
                    return month;
                    break;
                case "DD":
                    return day;
                    break;
                case "WW":
                    return weekArr[week];
                    break;
                case "hh":
                    return hour;
                    break;
                case "mm":
                    return min;
                    break;
                case "ss":
                    return sec;
                    break;
            }
        }
    }
    
    global.Format = Format;
})(window)

=======
function normalizeDate(){

        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth()+1;
        var day = now.getDate();
        var week = now.getDay();
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        var weekArr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

        //处理个位数
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        //如果只有一个参数的时候，用12小时表示 
        if(arguments.length == 1){
            if(hour > 12){
                hour -= 12;
            }
            hour = hour < 10 ? "0" + hour : hour;
        }else if(arguments.length == 2 && arguments[1] == 24){
            hour = hour < 10 ? "0" + hour : hour;
        }
        //根据参数返回值
        switch (arguments[0]) {
            case undefined:
                return year +' '+ month  +' '+day +' '+ weekArr[week];;
                break;
            case "YYYY/MM/DD":
                return year +'/'+ month  +'/'+day;
                break;
            case "YYYY/MM/DD WW":
                return year +'/'+ month  +'/'+day +' '+weekArr[week];
                break;
            case "YYYY/MM/DD WW hh:mm:ss":
                return year +'/'+ month  +'/'+day +' '+weekArr[week] +' '+ hour + ':' + min + ':' + sec;
                break;
            case "YYYY-MM-DD":
                return year +'-'+ month  +'-'+day;
                break;
            case "YYYY-MM-DD WW":
                return year +'-'+ month  +'-'+day +' '+weekArr[week];
                break;
            case "YYYY-MM-DD WW hh:mm:ss":
                return year +'-'+ month  +'-'+day +' '+weekArr[week] +' '+ hour + ':' + min + ':' + sec;
                break;
            case "YYYY年MM月DD日":
                return year +'年'+ month  +'月'+day +'日'
                break;
            case "YYYY年MM月DD日 WW":
                return year +'年'+ month  +'月'+day +'日' +' '+weekArr[week];
                break;
            case "YYYY年MM月DD日 WW hh时mm分ss秒":
                return year +'年'+ month  +'月'+day +'日' +' '+weekArr[week] +' '+ hour + '时' + min + '分' + sec + '秒';
                break;
            case "YYYY":
                return year;
                break;
            case "MM":
                return month;
                break;
            case "DD":
                return day;
                break;
            case "WW":
                return weekArr[week];
                break;
            case "hh":
                return hour;
                break;
            case "mm":
                return min;
                break;
            case "ss":
                return sec;
                break;
        }
    }
>>>>>>> 14303ca83415720e7d9cc9160830d39ed7745924
