# formatDate
### 格式化本地时间和日期
#### 使用方法
```
<script src="formatDate.js"></script>
```
#### 实现效果
```
  通过传递参数，控制日期的显示样式，还可以单独获得 年、月、日、周、时（12小时制和24小时制）、分、秒。
  
  Format.date()                     
  // 2017 07 04 星期二
  
  Format.date('YYYYMMDDhhmmss)  
  // 20170704174245

  Format.date('YYYY/MM/DD')    
  // 2017/07/04

  Format.date('YYYY/MM/DD WW')      
  // 2017/07/04 星期二

  Format.date('YYYY/MM/DD WW hh:mm:ss',24)  
  // 2017/07/04 星期二 17:42:45

  Format.date('YYYY-MM-DD')        
  // 2017-07-04

  Format.date('YYYY-MM-DD WW')      
  // 2017-07-04 星期二

  Format.date('YYYY-MM-DD WW hh:mm:ss')  
  // 2017-07-04 星期二 05:42:45

  Format.date('YYYY年MM月DD日')     
  // 2017年07月04日

  Format.date('YYYY年MM月DD日 WW')  
  // 2017年07月04日 星期二

  Format.date('YYYY年MM月DD日 WW hh时mm分ss秒',24)  
  // 2017年07月04日 星期二 17:42:45

  Format.date('YYYY')  
  // 2017

  Format.date('MM')  
  // 7

  Format.date('DD')  
  // 4

  Format.date('WW')  
  // 星期二

  Format.date('hh',24)  
  // 17

  Format.date('mm')  
  // 09

  Format.date('ss')  
  // 45

```
