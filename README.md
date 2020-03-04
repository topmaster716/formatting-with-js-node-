# Formatting-with-js-node
This is node.js project (Upwork)


## Input Pattern

===============#INFO#===============<br>
Info 1: aaaa<br>
Info 2: bbbb<br>
Info 3: cccc<br>
Info 4: dddd<br>
Info 5: eeee<br>
Info 6: ffff<br>
Info 7: gg / gg<br>
Info 8: hhhh<br>
----------------------------<br>
Ip : 184.151.230.21<br>
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1<br>
===============#end#===============<br>
===============#INFO===============<br>
Info 9: iiii<br>
Info 10: jjjj<br>
Info 11: kkkk<br>
Info 12: llll<br>
Info 13: mmmm<br>
----------------------------<br>
Ip : 184.151.230.21<br>
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1<br>
===============#end#===============<br>

## Output Pattern

ffff:gg:gg:hhhh:cccc dddd:iiii:llll:kkkk:CANADA:mmmm:aaaa<br>

### Format Method

Info 6:Info 7:Info 8:Info 3 + " " + Info 4:Info 9:Info 12:Info 11:"CANADA":Info 13:Info 1<br>

### Introduction

* Always put only the answer (aaaa) without any space (need to delete all caracter that are not ("#", number or letter).
* Always separe with ":" each info, not the info 3 and Info 4 that one need a space.
* Some times Info 9 to 13 are missing and we only gona have this.<br>
In this case do same format but without Info 9 to 13:
* Always start a new line when you see the next Info 6.
* Files should be a node that read task.csv and return a result.csv with all good format (files will be in same folder).

## How to run

```html
##> node formating.js
```