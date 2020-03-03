# formatting-with-js-node-
This is node.js project (Upwork)

===============#INFO#===============
Info 1: aaaa
Info 2: bbbb
Info 3: cccc
Info 4: dddd
Info 5: eeee
Info 6: ffff
Info 7: gg / gg
Info 8: hhhh
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============
===============#INFO===============
Info 9: iiii
Info 10: jjjj
Info 11: kkkk
Info 12: llll
Info 13: mmmm
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============

Format needed:
Info 6:Info 7:Info 8:Info 3 + " " + Info 4:Info 9:Info 12:Info 11:"CANADA":Info 13:Info 1

Should return:
ffff:gg:gg:hhhh:cccc dddd:iiii:llll:kkkk:CANADA:mmmm:aaaa

Instruction:
- Always put only the answer (aaaa) without any space (need to delete all caracter that are not ("#", number or letter)
- Always separe with ":" each info, not the info 3 and Info 4 that one need a space
- Some times Info 9 to 13 are missing and we only gona have this:

===============#INFO#===============
Info 1: aaaa
Info 2: bbbb
Info 3: cccc
Info 4: dddd
Info 5: eeee
Info 6: ffff
Info 7: gg / gg
Info 8: hhhh
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============

In this case do same format but without Info 9 to 13, will have over 100-150 format like this, always start a new line when you see the next Info 6 see exemple bellow:






===============#INFO#===============
Info 1: aaaa
Info 2: bbbb
Info 3: cccc
Info 4: dddd
Info 5: eeee
Info 6: ffff
Info 7: gg / gg
Info 8: hhhh
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============
===============#INFO===============
Info 9: iiii
Info 10: jjjj
Info 11: kkkk
Info 12: llll
Info 13: mmmm
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============
===============#INFO#===============
Info 1: aaaa
Info 2: bbbb
Info 3: cccc
Info 4: dddd
Info 5: eeee
Info 6: ffff
Info 7: gg / gg
Info 8: hhhh
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============

===============#INFO#===============
Info 1: aaaa
Info 2: bbbb
Info 3: cccc
Info 4: dddd
Info 5: eeee
Info 6: ffff
Info 7: gg / gg
Info 8: hhhh
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============
===============#INFO===============
Info 9: iiii
Info 10: jjjj
Info 11: kkkk
Info 12: llll
Info 13: mmmm
----------------------------
Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============


should return:
ffff:gg:gg:hhhh:cccc dddd:iiii:llll:kkkk:CANADA:mmmm:aaaa
ffff:gg:gg:hhhh:cccc dddd:CANADA:aaaa
ffff:gg:gg:hhhh:cccc dddd:iiii:llll:kkkk:CANADA:mmmm:aaaa

Name of Info 1: Info 2: will never change but ===============#INFO=============== this can change

and this to so need to work with/without it:

Ip : 184.151.230.21
UA : Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1
===============#end#===============


Files should be a node that read task.csv and return a result.csv with all good format (files will be in same folder)
i should start it with commander doing : node formating.js
