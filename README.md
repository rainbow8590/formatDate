# normalizeDate
### 格式化本地时间和日期
#### 使用方法
```
<script src="normalizeDate.js"></script>
```
#### 实现效果
```
  通过传递参数，控制日期的显示样式，还可以单独获得 年、月、日、周、时（12小时制和24小时制）、分、秒。
  
  normalizeDate()                     
  // 2017 07 04 星期二
  
  normalizeDate('YYYYMMDDhhmmss)  
  // 20170704174245

  normalizeDate('YYYY/MM/DD')    
  // 2017/07/04

  normalizeDate('YYYY/MM/DD WW')      
  // 2017/07/04 星期二

  normalizeDate('YYYY/MM/DD WW hh:mm:ss',24)  
  // 2017/07/04 星期二 17:42:45

  normalizeDate('YYYY-MM-DD')        
  // 2017-07-04

  normalizeDate('YYYY-MM-DD WW')      
  // 2017-07-04 星期二

  normalizeDate('YYYY-MM-DD WW hh:mm:ss')  
  // 2017-07-04 星期二 05:42:45

  normalizeDate('YYYY年MM月DD日')     
  // 2017年07月04日

  normalizeDate('YYYY年MM月DD日 WW')  
  // 2017年07月04日 星期二

  normalizeDate('YYYY年MM月DD日 WW hh时mm分ss秒',24)  
  // 2017年07月04日 星期二 17:42:45

  normalizeDate('YYYY')  
  // 2017

  normalizeDate('MM')  
  // 7

  normalizeDate('DD')  
  // 4

  normalizeDate('WW')  
  // 星期二

  normalizeDate('hh',24)  
  // 17

  normalizeDate('mm')  
  // 09

  normalizeDate('ss')  
  // 45

```
